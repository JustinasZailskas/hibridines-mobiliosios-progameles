import AsyncStorage from "@react-native-async-storage/async-storage";

const PLAYER_STORAGE_KEY = 'players';

export const savePlayer = async (playerName, playerTeam) => {
    try {
        const newPlayer = { id: Date.now().toString(), name: playerName, team: playerTeam };
        const existingPlayers = await getPlayers();
        const updatedPlayers = existingPlayers ? [...existingPlayers, newPlayer] : [newPlayer];
        await AsyncStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(updatedPlayers));
    } catch (error) {
        console.error('Klaida saugojant informacija apie zaideja:', error);
    }
};

export const getPlayers = async () => {
    try {
        const players = await AsyncStorage.getItem(PLAYER_STORAGE_KEY);
        console.log('Retrieved players:', players);
        return players ? JSON.parse(players) : [];
    } catch (error) {
        console.error('Klaida gaunant duomenis:', error);
        return null;
    }
};

export const removeAllPlayers = async () => {
    try {
        await AsyncStorage.removeItem(PLAYER_STORAGE_KEY);
    } catch (error) {
        console.error('Klaida šalinant visus žaidėjus:', error);
    }
};

export const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.error('Klaida išvalant saugyklą:', error);
    }
};

export const removePlayer = async (playerId) => {
    try {
        const players = await getPlayers();
        const updatedPlayers = players.filter(player => player.id !== playerId);
        await AsyncStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(updatedPlayers));
    } catch (error) {
        console.error('Klaida šalinant žaidėją:', error);
    }
};
