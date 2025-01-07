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
import bigLock from "../assets/images/bigLock.png";
import { ProgressBar } from 'react-native-paper';

const changePassword = () => {
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
          <Text style={{ fontSize: 16, fontWeight: 600 }}>Change Password</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 24, marginBottom: 24}}>
        <Image source={bigLock} style={{ height: 64, width: 48 }} />
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
        <Text style={{ fontSize: 14, fontWeight: 400 }}>Password Lama</Text>
        <TextInput
          placeholder="Input Password lama"
          secureTextEntry={true}
          style={{
            height: 54,
            borderColor: COLOR.borderTextInput,
            borderWidth: 1,
            borderRadius: 8,
            padding: 12,
          }}
        />
        <Text style={{ fontSize: 14, fontWeight: 400 }}>Password Baru</Text>
        <TextInput
          placeholder="Input password baru"
          secureTextEntry={true}
          style={{
            height: 54,
            borderColor: COLOR.borderTextInput,
            borderWidth: 1,
            borderRadius: 8,
            padding: 12,
          }}
        />
        <Text style={{ fontSize: 14, fontWeight: 400 }}>Confirm Password</Text>
        <TextInput
          placeholder="Input password"
          secureTextEntry={true}
          style={{
            height: 54,
            borderColor: COLOR.borderTextInput,
            borderWidth: 1,
            borderRadius: 8,
            padding: 12,
          }}
        />
        <ProgressBar progress={0.1} color={COLOR.secondary} style={{ height: 4 }} />
        <TouchableOpacity
          style={{
            marginTop: 32,
            height: 50,
            backgroundColor: COLOR.secondary,
            padding: 16,
            flexDirection: "row",
            gap: 8,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 500}}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default changePassword;

const styles = StyleSheet.create({});
