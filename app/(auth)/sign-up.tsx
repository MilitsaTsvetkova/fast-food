import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignUp = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = () => {
    if (!form.name || !form.email || !form.password) {
      return Alert.alert("Error", "Please fill in all fields.", [
        { text: "OK" },
      ]);
    }
    setIsSigningUp(true);

    try {
      Alert.alert("Success", "You have successfully signed up.");
      router.replace("/");
    } catch (error: unknown) {
      Alert.alert(
        "Error",
        error instanceof Error ? error.message : "An error occurred."
      );
    } finally {
      setIsSigningUp(false);
    }
  };
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your full name"
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
        label="Full Name"
      />
      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        label="Password"
        secureTextEntry
      />
      <CustomButton title="Sign Up" isLoading={isSigningUp} onPress={submit} />
      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-500">
          Already have an account?
        </Text>
        <Link href="/(auth)/sign-in" className="base-bold text-primary">
          Sign In
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
