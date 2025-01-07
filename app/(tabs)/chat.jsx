import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLOR from "../../constants/color";
import HeaderProfile from "../../components/HeaderProfile";
import { useRouter } from "expo-router";

const datas = [
  {
    id: 1,
    name: "Giffard Kennedy",
    email: "giffardkennedy@gmail.com",
    lastOnline: "Yesterday",
    notif: 2,
    profile: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    name: "Garland Allyn",
    email: "garlandallyn@gmail.com",
    lastOnline: "Yesterday",
    notif: 2,
    profile: "https://picsum.photos/200/300?random=2",
  },
];

const Item = ({ data }) => {
  const router = useRouter();
  const { name, email, lastOnline, notif, profile } = data; // Destructure the properties

  const pressHandler = () => {
    router.push('/chatDetails');
  }

  return (
    <TouchableOpacity onPress={() => pressHandler()} style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginVertical: 5, flexDirection: 'row', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{ uri: profile }} style={{ width: 50, height: 50, borderRadius: 25 }} />
      <View style={{width: '60%'}}>
        <Text style={{fontSize: 16, fontWeight: 600}}>{name}</Text>
        <Text style={{fontSize: 13}}>{email}</Text>
      </View>
      <View style={{alignItems: 'flex-end', gap: 4}}>
        <Text style={{fontSize: 10}}>{lastOnline}</Text>
        <View style={{backgroundColor: COLOR.secondary, height: 17, width: 17, alignItems: 'center', justifyContent: 'center', borderRadius: 999}}>
          <Text style={{fontSize: 8, color: 'white'}}>{notif}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ChatScreen = () => {
  const [topBar, setTopBar] = React.useState(0);
  const renderItem = ({ item }) => <Item data={item} />;

  const handlePress = (value) => {
    setTopBar(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Chats</Text>
        <HeaderProfile icon={"+"} />
        <View style={styles.topBar}>
          {["All", "Groups", "Unread"].map((label, index) => (
            <TouchableOpacity
              key={index}
              style={styles.tab}
              onPress={() => handlePress(index)}
            >
              <Text style={[styles.tabText, topBar === index && styles.activeTabText]}>
                {label}
              </Text>
              {topBar === index && <View style={styles.activeIndicator} />}
            </TouchableOpacity>
          ))}
        </View>
        <View style={{marginTop: 12, height: '100%'}}>
          <FlatList
            data={datas}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    margin: 16,
  },
  title: {
    margin: 20,
    fontSize: 24,
    fontWeight: "600",
    color: COLOR.secondary,
  },
  topBar: {
    height: 36,
    marginTop: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: COLOR.txtSecondary,
  },
  activeTabText: {
    color: COLOR.secondary,
  },
  activeIndicator: {
    width: '100%',
    height: 3,
    backgroundColor: COLOR.secondary,
    position: 'absolute',
    bottom: -10,
  },
});