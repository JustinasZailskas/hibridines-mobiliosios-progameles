
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function LocationExample() {
  // State kintamasis naudotojo vietai saugoti
  const [location, setLocation] = useState(null);
  // State kintamasis klaidos pranešimams saugoti
  const [errorMsg, setErrorMsg] = useState(null);
  // useEffect vykdomas TIK vieną kartą, kai komponentas užkraunamas
  useEffect(() => {
    // Iškart paleidžiame anoniminę asinchroninę funkciją,
    // nes pats useEffect negali būti async
    (async () => {
      // 1. Prašome leidimo naudoti lokaciją (foreground)
      const { status } = await Location.requestForegroundPermissionsAsync();
      // 2. Jei leidimas nesuteiktas – rodome klaidą ir nieko daugiau nedarome
      if (status !== 'granted') {
        setErrorMsg('Leidimas naudoti vietos informaciją atmestas');
        return; // sustabdome funkciją
      }
      // 3. Jei leidimas duotas – gauname dabartinę vartotojo vietą
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced, // nustatome GPS tikslumą
      });
      // 4. Įrašome gautą lokaciją į state, kad būtų galima atvaizduoti ekrane
      setLocation(currentLocation);
    })(); // <-- čia funkcija iškart iškviečiama
  }, []); 
  // tuščias masyvas reiškia, kad useEffect veiks tik 1 kartą (on mount)
  let text = 'Laukiama vietos…';

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    const { latitude, longitude } = location.coords;
    text = `Platuma: ${latitude}, Ilguma: ${longitude}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 
  },
  paragraph: { fontSize: 18, textAlign: 'center' },
});
