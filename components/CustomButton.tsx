import cn from "clsx";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  onPress,
  title = "Click Me",
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={cn("custom-btn", style)}
      onPress={onPress}
      disabled={isLoading}
    >
      {leftIcon}
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text className={cn("text-white-100 paragraph-semibold", textStyle)}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
