import React from "react";
import { Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import Header from "../../common/Header/Header";

const choice = ["8 Ball", "Snooker"];

export default Choice = ({navigation}) => {
  return (
    <>
      <Header text="Select a Game" />
      <ImageBackground style={{height:'100%',width:'100%'}} 
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
                style={{ width: 170, height: 170 }}
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
