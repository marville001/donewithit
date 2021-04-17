import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            { text: "Yes" },
            { text: "No" },
          ])
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
