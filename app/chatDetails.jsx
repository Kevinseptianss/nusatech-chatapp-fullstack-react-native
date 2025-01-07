import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import chevronLeft from "../assets/images/chevron-left.png";
import COLOR from "../constants/color";
import dot from "../assets/images/3dot.png";
import { GiftedChat } from "react-native-gifted-chat";
import { useRouter } from "expo-router";

const ChatDetails = () => {
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  const pressHandler = () => {
    router.back();
  };

  useEffect(() => {
    // Load initial messages
    setMessages([
      {
        _id: 1,
        text: "Hello! How can I help you?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Support",
          avatar: "https://picsum.photos/40/40",
        },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={pressHandler} style={styles.backButton}>
          <Image source={chevronLeft} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: "https://picsum.photos/40/40" }}
            style={styles.avatar}
          />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>Giffard Kennedy</Text>
            <Text style={styles.userEmail}>giffardkennedy@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.optionsButton}>
          <Image source={dot} />
        </TouchableOpacity>
      </View>
      <View style={styles.chatContainer}>
        <GiftedChat
          messages={messages}
          onSend={(newMessages) => onSend(newMessages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOR.borderGrey,
  },
  userInfo: {
    flexDirection: "row",
    gap: 8,
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userDetails: {
    flexDirection: "column",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 14,
    color: COLOR.textGrey,
  },
  optionsButton: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOR.borderGrey,
  },
  chatContainer: {
    flex: 1,
  },
});