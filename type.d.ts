interface CustomInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  label?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
}

interface CustomButtonProps {
  onPress?: () => void;
  title?: string;
  style?: object;
  textStyle?: object;
  leftIcon?: React.ReactNode;
  isLoading?: boolean;
}
