import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { loginUser } from '../services/firebaseService'
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Klaida', 'Užpildykite visus laukus');
      return;
    }

    setLoading(true);
    try {
      await loginUser(email, password);
      Alert.alert('Sėkmingai prisijungta');
      navigation.replace('MainApp'); // po prisijungimo pereina į pagrindinį ekraną
    } catch (error) {
      Alert.alert('Klaida', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prisijungimas</Text>

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

      <Button title={loading ? 'Jungiama...' : 'Prisijungti'} onPress={handleLogin} />

      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Register')}
      >
        Neturi paskyros? Registruokis
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
