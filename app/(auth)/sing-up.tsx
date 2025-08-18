import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { authStyles } from "../../assets/styles/auth.styles";

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSingUp = () => {
    router.push("/(auth)/verify-email");
  }


  return (
    <View style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        style={authStyles.keyboardView}
      >
        <ScrollView style={authStyles.scrollContent}>
          {/* image container  */}
          <View style={authStyles.imageContainer}>
            <Image
              source={require("../../assets/images/i2.png")}
              style={authStyles.image}
              contentFit="contain"
            />
          </View>
          <Text style={authStyles.title}>Create Account</Text>


          <View style={authStyles.formContainer}>
            {/* Email address  */}
            <View style={authStyles.inputContainer}>
              <TextInput keyboardType="email-address" autoCapitalize="none" placeholder="Email"  style={authStyles.textInput} placeholderTextColor={COLORS.textLight} />
            </View>

            <View style={authStyles.inputContainer}>
              <TextInput 
                secureTextEntry={!showPassword}
                placeholder="Password"
                style={authStyles.textInput}
                placeholderTextColor={COLORS.textLight}
              />
              <TouchableOpacity 
                style={authStyles.eyeButton}
                onPress={() => { setShowPassword(!showPassword)}}
              >
                <Ionicons 
                  name={showPassword ? "eye-outline" : "eye-off-outline"} 
                  size={20} 
                  color={COLORS.textLight} 
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={authStyles.authButton}
              onPress={handleSingUp}
            >
              <Text style={authStyles.buttonText}>Sing Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={authStyles.linkContainer} onPress={() => {router.back()}}>
              <Text style={authStyles.linkText}>Already have an account? <Text style={authStyles.link}>Sing In</Text></Text>
            </TouchableOpacity>


          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
