import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { ButtonParamList } from "../types";

export default function TabTwoScreen<ButtonParamList>() {
  return (
    <View
      style={styles.container}
      onClick={() => {
        console.log("hello world2");
      }}
    >
      <Text style={styles.text}>I am a button, I swear.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: "#444",
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // link: {
  //   marginTop: 15,
  //   paddingVertical: 15,
  // },
  // linkText: {
  //   fontSize: 14,
  //   color: '#2e78b7',
  // },
});
