interface Data {
  image: string;
  [key: string]: string;
}

function serializeImageUrl(data: Array<Data>, propBlacklist: string = '') {
  const serverUrl = 'http://192.168.1.7:3333';

  const serializedData = data.map(dataItem => {
    const { [propBlacklist]: value, ...filteredData } = dataItem;

    return {
      ...filteredData,
      image_url: `${serverUrl}/uploads/${dataItem.image}`,
    }
  });

  return serializedData;
}

export default serializeImageUrl;