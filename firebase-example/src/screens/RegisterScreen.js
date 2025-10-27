import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { registerUser } from '../services/firebaseService';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password || !repeatPassword) {
      Alert.alert('Klaida', 'Užpildykite visus laukus');
      return;
    }

    if (password !== repeatPassword) {
      Alert.alert('Klaida', 'Slaptažodžiai nesutampa');
      return;
    }

    setLoading(true);
    try {
      await registerUser(email, password);
      Alert.alert('Paskyra sukurta', 'Galite prisijungti');
      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Klaida', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registracija</Text>

      <InputField
        placeholder="El. paštas"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <InputField
        placeholder="Slaptažodis"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <InputField
        placeholder="Pakartokite slaptažodį"
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        secureTextEntry
      />

      <Button title={loading ? 'Kuriama...' : 'Registruotis'} onPress={handleRegister} />

      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Login')}
      >
        Jau turite paskyrą? Prisijunkite
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: '#007bff',
  },
});
