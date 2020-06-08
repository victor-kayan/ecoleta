import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Image,
  Text,
  Linking,
} from 'react-native';

import api from '../../services/api';
import * as MailComposer from 'expo-mail-composer';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  FontAwesome as FontAwesomeIcon,
  Feather as FeatherIcon,
} from '@expo/vector-icons';

import styles from './styles';

interface RouteParams {
  point_id: number;
}

interface Data {
  point: {
    name: string;
    image: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  items: {
    title: string;
  }[];
}

const Detail: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [data, setData] = useState<Data>({} as Data);

  const routeParams = route.params as RouteParams;

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=Olá! Tenho interesse sobre a coleta de resíduos.`);
  }

  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: 'Ecoleta - Interesse na coleta de resíduos',
      recipients: [data.point.email]
    });
  }

  useEffect(() => {
    api.get(`points/${routeParams.point_id}`).then(response => {
      setData(response.data);
    });
  }, []);

  if (!data.point) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size='large' color='#34CB79' />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <FeatherIcon name='arrow-left' color='#34CB79' size={20} />
        </TouchableOpacity>

        <Image style={styles.pointImage} source={{ uri: data.point.image }} />
        
        <Text style={styles.pointName}>{data.point.name}</Text>
        <Text style={styles.pointItems}>
          {data.items.map(item => item.title).join(', ')}
        </Text>
        
        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço</Text>
          <Text style={styles.addressContent}>{data.point.city}, {data.point.uf}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleWhatsapp}>
          <FontAwesomeIcon name='whatsapp' color='#FFF' size={20} />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={handleComposeMail}>
          <FeatherIcon name='mail' color='#FFF' size={20} />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
}

export default Detail;