import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import {
  FontAwesome as FontAwesomeIcon,
  Feather as FeatherIcon,
} from '@expo/vector-icons';

import styles from './styles';

const Detail: React.FC = () => {
  const navigation = useNavigation();
  
  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <FeatherIcon name='arrow-left' color='#34CB79' size={20} />
        </TouchableOpacity>

        <Image style={styles.pointImage} source={{ uri: 'https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' }} />
        
        <Text style={styles.pointName}>Mercado do Zé</Text>
        <Text style={styles.pointItems}>Óleo e lâmpadas</Text>
        
        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço</Text>
          <Text style={styles.addressContent}>Rua 13 de Maio</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <FontAwesomeIcon name='whatsapp' color='#FFF' size={20} />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={() => {}}>
          <FeatherIcon name='mail' color='#FFF' size={20} />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
}

export default Detail;