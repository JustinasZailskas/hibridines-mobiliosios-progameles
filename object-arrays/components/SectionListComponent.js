import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const DATA = [
  {
    title: 'Lakers',
    data: [
      { name: 'Arthur Kaluma', exp: 'R' },        // Rookie / naujokas :contentReference[oaicite:0]{index=0}
      { name: 'Austin Reaves', exp: 4 },           // :contentReference[oaicite:1]{index=1}
      { name: 'Bronny James', exp: 'R' },           // :contentReference[oaicite:2]{index=2}
      { name: 'Chris Mañon', exp: 'R' },            // :contentReference[oaicite:3]{index=3}
      { name: 'Dalton Knecht', exp: 1 },            // :contentReference[oaicite:4]{index=4}
      { name: 'Deandre Ayton', exp: 7 },            // :contentReference[oaicite:5]{index=5}
      { name: 'Gabe Vincent', exp: 6 },             // :contentReference[oaicite:6]{index=6}
      { name: 'Jake LaRavia', exp: 3 },             // :contentReference[oaicite:7]{index=7}
      { name: 'Jaxson Hayes', exp: 6 },             // :contentReference[oaicite:8]{index=8}
      { name: 'LeBron James', exp: 22 },            // :contentReference[oaicite:9]{index=9}
      { name: 'Maxi Kleber', exp: 8 },              // :contentReference[oaicite:10]{index=10}
      { name: 'R.J. Davis', exp: 'R' },             // :contentReference[oaicite:11]{index=11}
      { name: 'Rui Hachimura', exp: 6 },            // :contentReference[oaicite:12]{index=12}
      { name: 'Christian Koloko', exp: 2 },         // :contentReference[oaicite:13]{index=13}
      { name: 'Willie Cauley-Stein', exp: 8 }        // (jei yra roster’yje ‒ bet patikrink)  
    ],
  },
  {
    title: 'Warriors',
    data: [
      { name: 'Taran Armstrong', exp: 'R' },        // :contentReference[oaicite:14]{index=14}
      { name: 'Jimmy Butler', exp: 14 },            // :contentReference[oaicite:15]{index=15}
      { name: 'Stephen Curry', exp: 16 },           // :contentReference[oaicite:16]{index=16}
      { name: 'Draymond Green', exp: 13 },           // :contentReference[oaicite:17]{index=17}
      { name: 'Buddy Hield', exp: 9 },               // :contentReference[oaicite:18]{index=18}
      { name: 'Trayce Jackson-Davis', exp: 2 },       // :contentReference[oaicite:19]{index=19}
      { name: 'Braxton Key', exp: 4 },                // :contentReference[oaicite:20]{index=20}
      { name: 'Kevin Knox II', exp: 7 },              // :contentReference[oaicite:21]{index=21}
      { name: 'Moses Moody', exp: 4 },                // :contentReference[oaicite:22]{index=22}
      { name: 'Brandin Podziemski', exp: 2 },          // :contentReference[oaicite:23]{index=23}
      { name: 'Will Richard', exp: 'R' },             // :contentReference[oaicite:24]{index=24}
      { name: 'Jackson Rowe', exp: 1 },                // :contentReference[oaicite:25]{index=25}
      { name: 'Gui Santos', exp: 2 },                  // :contentReference[oaicite:26]{index=26}
      { name: 'Pat Spencer', exp: 2 }                  // :contentReference[oaicite:27]{index=27}
    ],
  },
  {
    title: 'Bucks',
    data: [
      { name: 'Giannis Antetokounmpo', exp: 12 },        // :contentReference[oaicite:28]{index=28}
      { name: 'Thanasis Antetokounmpo', exp: 6 },        // :contentReference[oaicite:29]{index=29}
      { name: 'Cole Anthony', exp: 5 },                  // :contentReference[oaicite:30]{index=30}
      { name: 'Jamaree Bouyea', exp: 3 },                // :contentReference[oaicite:31]{index=31}
      { name: 'Leonard? / Mark Sears', exp: 'R' },        // Mark Sears yra naujas, rookie :contentReference[oaicite:32]{index=32}
      { name: 'AJ Green', exp: 3 },                      // :contentReference[oaicite:33]{index=33}
      { name: 'Tyler Smith', exp: 1 },                    // :contentReference[oaicite:34]{index=34}
      { name: 'Chris Livingston', exp: 2 },               // :contentReference[oaicite:35]{index=35}
      { name: 'Bobby Portis', exp: 6 },                   // (čia reikia pasitikslinti ‒ ESPN ar NBA.com) 
      { name: 'Kevin Porter Jr.', exp: 6 }                // (reikia pasitikslinti) 
    ],
  },
];


const SectionListComponent = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.player}>{item.name} {item.exp}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    padding: 8,
    marginTop: 8,
    borderRadius: 6,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#c2f9ff',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 24,
    borderRadius: 6,
  },
  player: {
    fontSize: 18,
  },
});

export default SectionListComponent;