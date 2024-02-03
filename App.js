import React from "react";
import { StyleSheet,View } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import Header from "./src/Header.js";
import MyProfile from "./src/MyProfile.js";
import { myProfile } from "./src/data.js";
import Margin from "./src/Margin.js";
import Division from "./src/Division.js";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Margin height={10}/>

      <MyProfile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />

      <Margin height={15}/>
      <Division/>
      <Margin height={12}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
  },
});
