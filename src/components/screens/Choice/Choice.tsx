import React from "react";
import { Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import { Header } from "../../common/Header/Header";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import strings from "../../../utils/translations/en";
import styles from "./styles";
import Loader from "../../common/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../../../utils/NavigationStackList";
import { actions } from "../../../stores/actions";


const choice = [strings.Choice.game8Ball, strings.Choice.gameSnooker];

export const Choice = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const isLoading= useSelector((state: any) => state.userData.isLoading);
  const dispatch = useDispatch();

  const handleOnPress = (index: number) => {
    dispatch({ type: actions.START_LOADING });
    navigation.navigate('BookingScreen', { index }); 
     dispatch({ type: actions.STOP_LOADING });
  }

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
                onPress={()=> handleOnPress(index)}
                >
                  <Loader isLoading={isLoading}/>
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
