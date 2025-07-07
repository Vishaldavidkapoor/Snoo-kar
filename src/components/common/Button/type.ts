import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: React.ReactNode;
}
