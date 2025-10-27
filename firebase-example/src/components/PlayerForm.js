import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';


export default function PlayerForm() {
    const [playerName, setPlayerName] = React.useState('');
    const [teamName, setTeamName] = React.useState('');

    const handleSave = async () => {
        
        setPlayerName('');
        setTeamName('');
    }
  
    return (
    <View style={styles.container}>
      <Text style={styles.label}>Krepšininko vardas</Text>
      <TextInput
        style={styles.input}
        value={playerName}
        onChangeText={setPlayerName}
        placeholder="Įveskite vardą"
      />
      <Text style={styles.label}>Komanda</Text>
      <TextInput
        style={styles.input}
        value={teamName}
        onChangeText={setTeamName}
        placeholder="Įveskite komandos pavadinimą"
      />
      <Button onPress={handleSave}>Išsaugoti</Button> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '80%',
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
});