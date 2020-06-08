import React, { useState } from 'react';
import { 
  KeyboardAvoidingView, 
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Platform,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';

const Home: React.FC = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('Points', { uf, city });
  }

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ImageBackground
        source={require('../../assets/home-background.png')}
        imageStyle={{ width: 274, height: 368 }}
        style={styles.container}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
            <Text style={styles.description}>Ajudamos pessoas a encontratem pontos de coleta de forma eficiente.</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput
            placeholder='Digite a UF'
            value={uf}
            onChangeText={setUf}
            maxLength={2}
            autoCapitalize='characters'
            autoCorrect={false}
            style={styles.input}
            />
          <TextInput
            placeholder='Digite a cidade'
            value={city}
            onChangeText={setCity}
            autoCorrect={false}
            style={styles.input}
          />

          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Icon name='arrow-right' color='#FFF' size={24} />
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

export default Home;