import React, { useEffect, useState, useContext, memo, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";
import { CounterContext } from "../context/CounterContext";

const Item = memo(({ title }) => {
  console.log("Rendering item:", title);
  return (
    <View style={styles.post}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
});

// const Item = ({ title }) => { //be memo funkcijos
//   console.log("Rendering item:", title);
//   return (
//     <View style={styles.post}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// };

const PostsScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
   const { counter, increment, decrement } = useContext(CounterContext);

   const renderItem = useCallback(({ item }) => <Item title={item.title} />, []);


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
      <Text style={styles.title}>Skaitiklis</Text>
            <Text style={styles.counter}>{counter}</Text>
            <View style={styles.buttons}>
              <Button title="+" onPress={increment} />
              <Button title="-" onPress={decrement} />
            </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      
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
