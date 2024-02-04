import React, { useState } from "react";
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
import TabBar from "./src/TabBar.js";
import { friendProfiles, myProfile } from "./src/data.js";
const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();
export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <Header />
        <Margin height={10} />

        <Profile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />

        <Margin height={15} />
        <Division />

        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          isOpened={isOpened}
        />

        <FriendList data={friendProfiles} isOpened={isOpened} />
      </View>
      <TabBar 
      selectedTabIdx={selectedTabIdx}
      setSelectedTabIdx={setSelectedTabIdx}
      />
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
