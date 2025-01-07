import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLOR from "../../constants/color";
import HeaderProfile from "../../components/HeaderProfile";
import profile from "../../assets/images/profile.png";
import lock from "../../assets/images/lock.png";
import arrow from "../../assets/images/arrow.png";
import { useRouter } from "expo-router";

const Settings = () => {
  const router = useRouter();

  const handlePressUsername = () => {
    router.push("/changeUsername");
  };

  const handlePressPassword = () => {
    router.push("/changePassword");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <HeaderProfile icon={">"} />
      </View>

      <TouchableOpacity
        onPress={handlePressUsername}
        style={styles.optionContainer}
      >
        <Image source={profile} style={styles.icon} />
        <Text style={styles.optionText}>Change Username</Text>
        <View style={styles.arrow}>
          <Image source={arrow} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handlePressPassword}
        style={styles.optionContainer}
      >
        <Image source={lock} style={styles.icon} />
        <Text style={styles.optionText}>Change Password</Text>
        <View style={styles.arrow}>
          <Image source={arrow} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;

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
  optionContainer: {
    height: 56,
    margin: 8,
    marginHorizontal: 16,
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    gap: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  optionText: {
    width: "76%",
  },
  arrow: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    marginTop: "80%",
    height: 50,
    margin: 16,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: {
    color: COLOR.secondary,
  },
});
