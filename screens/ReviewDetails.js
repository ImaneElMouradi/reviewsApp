import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>Review Details screen</Text>
      <Button title="Go back to home screen" onPress={pressHandler} />
    </View>
  );
}
