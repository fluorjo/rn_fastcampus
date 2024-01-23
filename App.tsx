// 시작 전 App.js 코드
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const Header = (props: {title: string}) => {
  return <Text>{props.title}</Text>;
};
const MyProfile = () => {
  return (
    <Profile
      name="me"
      uri="https://pbs.twimg.com/media/FtsxswzaUAAZXJj.jpg:large"
      profileSize={40}
    />
  );
};
const Division = () => {
  return <Text>Division</Text>;
};
const FriendSection = () => {
  return <Text>FriendSection</Text>;
};
const FriendList = () => {
  return (
    <View>
      <Profile
        name="ss"
        uri="https://pbs.twimg.com/media/FtsxswzaUAAZXJj.jpg:large"
        profileSize={30}
      />
      <Profile
        name="ss"
        uri="https://static.thenounproject.com/png/138926-200.png"
        profileSize={30}
      />
      <Profile
        name="ss"
        uri="https://static.thenounproject.com/png/138926-200.png"
        profileSize={30}
      />

      <Profile
        name="ss"
        uri="https://static.thenounproject.com/png/138926-200.png"
        profileSize={30}
      />
    </View>
  );
};

const Profile = (props: {name: string; uri: string; profileSize: number}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{uri: props.uri}}
        style={{
          width: props.profileSize,
          height: props.profileSize,
        }}
      />
      <Text>{props.name}</Text>
    </View>
  );
};


export default function App() {
  return (
    <View style={styles.container}>
      <Header title="friend" />
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
