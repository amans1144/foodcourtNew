import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  // Add your homeScreen code here  ----------------*************
  return (
    <View>
      <Text style={styles.text}>Home... screen</Text>
      <Button
        onPress={() => navigation.navigate("SecondScreen")}
        title="Go to second screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Add your styles here ----------------*************
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
