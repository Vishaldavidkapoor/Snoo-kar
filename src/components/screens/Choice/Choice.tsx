import React from "react";
import { Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import { Header } from "../../common/Header/Header";
import { useNavigation } from "@react-navigation/native";
import strings from "../../../utils/translations/en";
import styles from "./styles";


const choice = [strings.Choice.game8Ball, strings.Choice.gameSnooker];

export const Choice = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header text={strings.Choice.selectGame} />
      <ImageBackground style={styles.imageBackground} 
      source={require('../../../../assets/background.jpg')}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {choice.map((item, index) => {
          return (
            <View key={index} >
                <TouchableOpacity style={{ paddingLeft: 10, alignItems: "center" }}
                onPress={()=> navigation.navigate('Book a Table',{index}) }
                >
              <Image
                style={{ width: 170, height: 170, borderRadius: 20 }}
                source={
                  index == 0
                    ? require("../../../../assets/8balls.jpg")
                    : require("../../../../assets/snookers.jpg")
                }
              />
              <Text style={{fontSize:19, fontWeight:'bold', color:'black'}}>{index == 0 ? choice[0] : choice[1]}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      </ImageBackground>
    </>
  );
};
