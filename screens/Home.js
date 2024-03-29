import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";

import Card from "../shared/card";

export default function Home({ navigation }) {
  const [modelOpen, setModelOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1"
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2"
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3"
    }
  ]);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modelOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModelOpen(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          />
          <Text>This is a modal</Text>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModelOpen(true)}
        style={styles.modalToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  }
});
