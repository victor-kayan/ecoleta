import React, { useState, useEffect } from 'react';
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

import api from '../../services/api';
import styles from './styles';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

const Points: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    });
  }, []);

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetail() {
    navigation.navigate('Detail');
  }

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([ ...selectedItems, id ]);
    }
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
          {items.map(item => (
            <TouchableOpacity
              key={String(item.id)}
              activeOpacity={0.6}
              onPress={() => handleSelectItem(item.id)}
              style={[
                styles.item,
                selectedItems.includes(item.id) ? styles.selectedItem : {}
              ]}
            >
              <SvgUri width={42} height={42} uri={item.image_url} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default Points;