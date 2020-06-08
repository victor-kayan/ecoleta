import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Platform,
  Image,
} from 'react-native';

import Emoji from 'react-native-emoji';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';

const Points: React.FC = () => {
  const navigation = useNavigation();
  
  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon name='arrow-left' color='#34CB79' size={20} />
      </TouchableOpacity>

      <View style={styles.row}>
        <Emoji name='smiley' style={styles.emoji} />
        <Text style={styles.title}>Bem vindo.</Text>
      </View>
      <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>

      <View style={styles.mapContainer}>
        <MapView 
          initialRegion={{
            latitude: -6.1123308,
            longitude: -38.2059587,
            latitudeDelta: 0.014,
            longitudeDelta: 0.014
          }}
          style={styles.map} 
        >
          <Marker
            style={styles.mapMarker}
            onPress={handleNavigateToDetail}
            coordinate={{
              latitude: -6.1123308,
              longitude: -38.2059587
            }}
          >
            <View style={styles.mapMarkerContainer}>
              <Image style={styles.mapMarkerImage} source={{ uri: 'https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' }} />
              <Text style={styles.mapMarkerTitle}>Mercado</Text>
            </View>
          </Marker>
        </MapView>
      </View>

      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: Platform.OS === 'ios' ? 20 : 0 }}
        >
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri width={42} height={42} uri='http://192.168.1.8:3333/uploads/lampadas.svg' />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri width={42} height={42} uri='http://192.168.1.8:3333/uploads/lampadas.svg' />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri width={42} height={42} uri='http://192.168.1.8:3333/uploads/lampadas.svg' />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri width={42} height={42} uri='http://192.168.1.8:3333/uploads/lampadas.svg' />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri width={42} height={42} uri='http://192.168.1.8:3333/uploads/lampadas.svg' />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri width={42} height={42} uri='http://192.168.1.8:3333/uploads/lampadas.svg' />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

export default Points;