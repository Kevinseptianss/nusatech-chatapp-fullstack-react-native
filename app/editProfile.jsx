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
  
  const EditProfile = () => {
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
            <Text style={styles.headerTitle}>Edit Profile</Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Input Name"
            style={styles.textInput}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Input Email"
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default EditProfile;
  
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
    textInput: {
      height: 54,
      borderColor: COLOR.borderTextInput,
      borderWidth: 1,
      borderRadius: 8,
      padding: 12,
    },
    saveButton: {
      marginTop: "100%",
      height: 50,
      margin: 16,
      backgroundColor: COLOR.btnGrey,
      padding: 16,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    saveButtonText: {
      color: COLOR.txtGoogle,
    },
  });