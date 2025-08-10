import { Image } from 'expo-image';
import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity
} from "react-native";
import { authStyles } from "../../assets/styles/auth.styles";
import { COLORS } from '@/constants/colors';
import { Ionicons } from "@expo/vector-icons";


const SignInScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSignIn = () => {
    // setShowPassword(!showPassword);
  };

  return (
    <View style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={authStyles.keyboardView}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView style={authStyles.scrollContent}>
          <View style={authStyles.imageContainer}>
            <Image
              source={require("../../assets/images/i1.png")}
              style={authStyles.image}
              contentFit="contain"
            />
          </View>
          <Text style={authStyles.title}>Welcome Back</Text>

          <View style={authStyles.formContainer}>
            <View style={authStyles.inputContainer}>
              <TextInput
                style={authStyles.textInput}
                placeholder="Email"
                placeholderTextColor={COLORS.textLight}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={authStyles.inputContainer}>
              <TextInput
                style={authStyles.textInput}
                placeholder="Enter password"
                placeholderTextColor={COLORS.textLight}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />

              <TouchableOpacity style={authStyles.eyeButton} onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color={COLORS.textLight}
                  onPress={() => setShowPassword(!showPassword)}
                />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={[authStyles.authButton, loading && authStyles.buttonDisabled]}
                onPress={handleSignIn}
                // disabled={loading}
                activeOpacity={0.8}
              >
                <Text style={authStyles.buttonText}>{loading ? "Signing In..." : "Sign In"}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={authStyles.linkContainer}>
                <Text style={authStyles.linkText}>
                  Don&apos;t have an account? <Text style={authStyles.link}>Sign up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default SignInScreen;
