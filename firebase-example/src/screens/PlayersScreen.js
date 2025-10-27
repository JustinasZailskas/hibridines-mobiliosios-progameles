import React, { useEffect, useCallback } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button } from "@react-navigation/elements";
import { useFocusEffect } from "@react-navigation/native";

export default function PlayersScreen() {
  const [players, setPlayers] = React.useState([]);

  // useEffect(() => {
  //   // Fetch players from storage when the component mounts
  //   const fetchPlayers = async () => {
  //     const storedPlayers = await getPlayers();
  //     setPlayers(storedPlayers);
  //   };
  //   fetchPlayers();
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visi žaidėjai</Text>
      {/* {players === null ? (
        <Text>Žaidėjų nėra</Text>
      ) : (
        <View style={styles.playerItem}>
          <Text style={styles.playerName}>{players.name}</Text>
          <Text style={styles.teamName}>{players.team}</Text>
        </View>
      )} */}
      {players.length === 0 ? (
        <Text style={styles.emptyText}>Žaidėjų nėra</Text>
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.playerItem}>
              <Text style={styles.playerName}>{item.name}</Text>
              <Text style={styles.teamName}>{item.team}</Text>
              <Button variant="plain" >
                Ištrinti žaidėją
              </Button>
            </View>
          )}
        />
      )}
      {players.length === 0  ? null : (
        <View>
          <Button onPress={removePlayers}>Istrinti visus zaidejus</Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  playerItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  playerName: {
    fontSize: 18,
    fontWeight: "500",
  },
  teamName: {
    fontSize: 16,
    color: "#666",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});