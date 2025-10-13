import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const PostsScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

    const postNewPost = async (e) => {
      e.preventDefault();
      const postObj = {
        title: "Naujas postas",
        body: "Naujo posto turinys",
        userId: 1,
      };

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postObj),
        });
        const data = await res.json();
        const updatedList = [data, ...posts];
        setPosts(updatedList);
      } catch (error) {
        console.error("Klaida:", error);
      }
    };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={postNewPost}>
        <Text style={styles.addButtonText}>Pridėti naują postą</Text>
      </TouchableOpacity>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  addButton: {
    backgroundColor: "#1976d2",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  post: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
  },
  title: { fontWeight: "bold", marginBottom: 4 },
});

export default PostsScreen;
