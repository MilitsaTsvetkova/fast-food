import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { signIn } from "@/lib/appwrite";
import * as Sentry from "@sentry/react-native";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignIn = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const submit = async () => {
    if (!email || !password) {
      return Alert.alert("Error", "Please fill in all fields.", [
        { text: "OK" },
      ]);
    }
    setIsSigningIn(true);

    try {
      await signIn({
        email,
        password,
      });
      router.replace("/");
    } catch (error: any) {
      Alert.alert(
        "Error",
        error instanceof Error ? error.message : "An error occurred."
      );
      Sentry.captureEvent(error);
    } finally {
      setIsSigningIn(false);
    }
  };
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        label="Password"
        secureTextEntry
      />
      <CustomButton title="Sign In" isLoading={isSigningIn} onPress={submit} />
      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-500">
          Don&apos;t have an account?
        </Text>
        <Link href="/(auth)/sign-up" className="base-bold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
