import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLOR from "../../constants/color";
import HeaderProfile from "../../components/HeaderProfile";
import profile from "../../assets/images/profile.png";
import lock from "../../assets/images/lock.png";
import arrow from "../../assets/images/arrow.png";
import { useRouter } from "expo-router";

const setting = () => {
  const router = useRouter();
  const handlePressUsername = () => {
    router.push("/changeUsername");
  }
  const handlePressPassword = () => {
    router.push("/changePassword");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <HeaderProfile icon={">"}/>
      </View>

      <TouchableOpacity
        onPress={() => handlePressUsername()}
        style={{
          height: 56,
          marginLeft: 16,
          marginRight: 16,
          backgroundColor: "white",
          padding: 16,
          flexDirection: "row",
          gap: 8,
          borderRadius: 8,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image source={profile} style={{ width: 24, height: 24 }} />
        <Text style={{ width: "76%" }}>Change Username</Text>
        <View style={styles.arrow}>
          <Image source={arrow} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePressPassword()}
        style={{
          margin: 16,
          height: 56,
          backgroundColor: "white",
          padding: 16,
          flexDirection: "row",
          gap: 8,
          borderRadius: 8,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image source={lock} style={{ width: 24, height: 24 }} />
        <Text style={{ width: "76%" }}>Change Password</Text>
        <View style={styles.arrow}>
          <Image source={arrow} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: '80%',
          height: 50,
          margin: 16,
          backgroundColor: "white",
          padding: 16,
          flexDirection: "row",
          gap: 8,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: COLOR.secondary }}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default setting;

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
  arrow: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
});
