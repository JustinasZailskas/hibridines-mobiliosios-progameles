import { StyleSheet, Text, View } from 'react-native';
import PlayerForm from '../components/PlayerForm';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <PlayerForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

