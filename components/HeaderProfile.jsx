import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import profile from "../assets/images/profile.jpeg";
import COLOR from "../constants/color";
import arrow from "../assets/images/arrow.png";
import { useRouter } from "expo-router";

const HeaderProfile = ({ icon }) => {
  const router = useRouter();
  const hadlePress = () => {
    router.push("/chatNew");
  };

  const handlePressEdit = () => {
    router.push("/editProfile");
  }
  if (icon === "+") {
    return (
      <View style={styles.container}>
        <Image source={profile} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>Nusatech</Text>
          <Text style={styles.emailText}>Nusatech@company.co.id</Text>
        </View>
        <TouchableOpacity onPress={() => hadlePress()} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (icon === ">") {
    return (
      <TouchableOpacity onPress={() => handlePressEdit()} style={styles.container}>
        <Image source={profile} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>Nusatech</Text>
          <Text style={styles.emailText}>Nusatech@company.co.id</Text>
        </View>
        <View style={styles.arrow}>
          <Image source={arrow} />
        </View>
      </TouchableOpacity>
    );
  }
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    gap: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImage: {
    height: 48,
    width: 48,
    borderRadius: 99,
  },
  textContainer: {
    width: "60%",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600", // Use "600" as a string for fontWeight
    color: COLOR.txtSecondary,
  },
  emailText: {
    fontSize: 14,
    color: COLOR.txtSecondary,
  },
  addButton: {
    width: 38,
    height: 38,
    borderRadius: 99,
    backgroundColor: COLOR.btnGrey,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 25,
    color: COLOR.secondary,
  },
  arrow: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
});
