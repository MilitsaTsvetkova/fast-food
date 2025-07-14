import { Models } from "react-native-appwrite";

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

interface CreateUserParams {
  email: string;
  password: string;
  name: string;
}

interface SignInParams {
  email: string;
  password: string;
}

export interface User extends Models.Document {
  name: string;
  email: string;
  avatar: string;
}

interface TabBarIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}

interface GetMenuParams {
  category: string;
  query: string;
}

export interface MenuItem extends Models.Document {
  name: string;
  price: number;
  image_url: string;
  description: string;
  calories: number;
  protein: number;
  rating: number;
  type: string;
}
