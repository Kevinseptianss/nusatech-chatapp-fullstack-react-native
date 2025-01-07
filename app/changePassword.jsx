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
import { ProgressBar } from "react-native-paper";

const ChangePassword = () => {
  const router = useRouter();

  const pressHandler = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={pressHandler} style={styles.backButton}>
          <Image source={chevronLeft} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Change Password</Text>
        </View>
      </View>
      <View style={styles.lockImageContainer}>
        <Image source={bigLock} style={styles.lockImage} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Password Lama</Text>
        <TextInput
          placeholder="Input Password lama"
          secureTextEntry={true}
          style={styles.input}
        />
        <Text style={styles.label}>Password Baru</Text>
        <TextInput
          placeholder="Input password baru"
          secureTextEntry={true}
          style={styles.input}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          placeholder="Input password"
          secureTextEntry={true}
          style={styles.input}
        />
        <ProgressBar
          progress={0.1}
          color={COLOR.secondary}
          style={styles.progressBar}
        />
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

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
    position: "absolute",
    margin: 16,
  },
  headerTitleContainer: {
    flexDirection: "row",
    height: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  lockImageContainer: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  lockImage: {
    height: 64,
    width: 48,
  },
  formContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
    margin: 16,
    borderRadius: 8,
    gap: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
  },
  input: {
    height: 54,
    borderColor: COLOR.borderTextInput,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  progressBar: {
    height: 4,
  },
  saveButton: {
    marginTop: 32,
    height: 50,
    backgroundColor: COLOR.secondary,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});
