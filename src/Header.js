//export default를 하면 app.js에서 이름을 아무렇게나 해서 넣을 수 있음.
// 구조분해 ( {} 안에 변수명 넣는 거 )가 필요없음.
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View,TouchableOpacity } from "react-native";

const IconButton = (name,bgColor) => {
  return (
    <TouchableOpacity hitSlop={{ top: 15, bottom: 15 }} style={{paddingHorizontal:6,backgroundColor:bgColor}}>
      <Ionicons name={props.name} size={24} color="black" />
    </TouchableOpacity>
  );
};

export default () => {
  return (
    <View 
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>friends</Text>

      <View style={{ flexDirection: "row" }}>
        <IconButton name="search-outline"/>
        <IconButton name="person-add-outline"/>
        <IconButton name="musical-notes-outline"/>
        <IconButton name="settings-outline"/>
      </View>
    </View>
  );
};
