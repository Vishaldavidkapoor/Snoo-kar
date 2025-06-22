import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

type HeaderProps = {
  text: string;
};

export const Header: React.FC<HeaderProps> = ({ text }) => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.backIcon}
          source={require('../../../../assets/back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{text}</Text>
      <View />
    </View>
  );
};

