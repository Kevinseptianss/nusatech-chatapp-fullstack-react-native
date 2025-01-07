import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
  const { name, email, lastOnline, notif, profile } = data;

  const pressHandler = () => {
    router.push("/chatDetails");
  };

  return (
    <TouchableOpacity onPress={pressHandler} style={styles.itemContainer}>
      <Image source={{ uri: profile }} style={styles.profileImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.emailText}>{email}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.lastOnlineText}>{lastOnline}</Text>
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationText}>{notif}</Text>
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
              <Text
                style={[
                  styles.tabText,
                  topBar === index && styles.activeTabText,
                ]}
              >
                {label}
              </Text>
              {topBar === index && <View style={styles.activeIndicator} />}
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={datas}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
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
    backgroundColor: "white",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: COLOR.txtSecondary,
  },
  activeTabText: {
    color: COLOR.secondary,
  },
  activeIndicator: {
    width: "100%",
    height: 3,
    backgroundColor: COLOR.secondary,
    position: "absolute",
    bottom: -10,
  },
  listContainer: {
    marginTop: 12,
    height: "100%",
  },
  itemContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    width: "60%",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600",
  },
  emailText: {
    fontSize: 13,
  },
  statusContainer: {
    alignItems: "flex-end",
    gap: 4,
  },
  lastOnlineText: {
    fontSize: 10,
  },
  notificationBadge: {
    backgroundColor: COLOR.secondary,
    height: 17,
    width: 17,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  notificationText: {
    fontSize: 8,
    color: "white",
  },
});
