import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  return (
    <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />
      
      { selectedFileUrl
        ? <img src={selectedFileUrl} alt="Point thumbnail"/>
        : isDragActive  
          ? <p>
              <FiUpload />
              Solte a imagem do estabelecimento aqui!
            </p>
          : <p>
              <FiUpload />
              Imagem do estabelecimento
              <br/>
              <span>Arraste a imagem ou clique para selecionar</span>
            </p>
      }
    </div>
  );
}

export default Dropzone;