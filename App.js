import React from "react";
import { StyleSheet } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/Header.js"
const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["right", "left"]} style={styles.container}>
        <Header />
      </SafeAreaView>
      {/* <View style={styles.container}>
        <Header />
      </View> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
  },
});
