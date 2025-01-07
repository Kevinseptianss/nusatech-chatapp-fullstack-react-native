import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLOR from "../constants/color";
import chevronLeft from "../assets/images/chevron-left.png";
import { useRouter } from "expo-router";

const editProfile = () => {
  const router = useRouter();

  const pressHandler = () => {
    router.back();
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
            position: "absolute",
            margin: 16,
          }}
        >
          <Image source={chevronLeft} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            height: 40,
            gap: 8,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 600 }}>Edit Profile</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          padding: 16,
          backgroundColor: "white",
          margin: 16,
          padding: 16,
          borderRadius: 8,
          gap: 16,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: 400 }}>Name</Text>
        <TextInput
          placeholder="Input Name"
          style={{
            height: 54,
            borderColor: COLOR.borderTextInput,
            borderWidth: 1,
            borderRadius: 8,
            padding: 12,
          }}
        />
        <Text style={{ fontSize: 14, fontWeight: 400 }}>Email</Text>
        <TextInput
          placeholder="Input Email"
          style={{
            height: 54,
            borderColor: COLOR.borderTextInput,
            borderWidth: 1,
            borderRadius: 8,
            padding: 12,
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: "100%",
            height: 50,
            margin: 16,
            backgroundColor: COLOR.btnGrey,
            padding: 16,
            flexDirection: "row",
            gap: 8,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: COLOR.txtGoogle }}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default editProfile;

const styles = StyleSheet.create({});
