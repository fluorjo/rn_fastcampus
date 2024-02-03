import React from "react";
import { StyleSheet, View } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import Division from "./src/Division.js";
import FriendList from "./src/FriendList.js";
import FriendSection from "./src/FriendSection";
import Header from "./src/Header.js";
import Margin from "./src/Margin.js";
import Profile from "./src/Profile.js";
import { friendProfiles, myProfile } from "./src/data.js";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();
const onPressArrow = () => {
  setIsOpened(!isOpened);
};
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Margin height={10} />

      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />

      <Margin height={15} />
      <Division />

      <FriendSection friendProfileLen={friendProfiles.length} onPressArrow />

      <FriendList data={friendProfiles} />
      <Margin height={12} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
    paddingHorizontal: 15,
  },
});
