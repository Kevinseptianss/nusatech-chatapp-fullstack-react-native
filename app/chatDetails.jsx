// ChatDetails.js
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
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          gap: 16,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => pressHandler()}
          style={{
            backgroundColor: "white",
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: COLOR.borderGrey,
          }}
        >
          <Image source={chevronLeft} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 8, flex: 1 }}>
          <Image
            source={{ uri: "https://picsum.photos/40/40" }}
            style={{ width: 40, height: 40, borderRadius: 99 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Giffard Kennedy
            </Text>
            <Text style={{ fontSize: 14, color: COLOR.textGrey }}>
              giffardkennedy@gmail.com
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: COLOR.borderGrey,
          }}
        >
          <Image source={dot} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
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

const styles = StyleSheet.create({});
