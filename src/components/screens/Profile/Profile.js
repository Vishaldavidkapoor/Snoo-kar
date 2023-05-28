import React from "react";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import Header from "../../common/Header/Header";

export default Profile = () => {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  const options = ["Bookings", "Payments","Wallet", "Address", "Support"];

  return (
    <View style={{ flex: 1 }}>
      <Header text="Profile" />
      <Image
        style={{ height: 170, width: 170, left: screenWidth * 0.27, top:10 }}
        source={require("../../../../assets/user.png")}
      />
      
      <View style={{ flexDirection: "column", alignItems: "center", top: 20 }}>
      <TouchableOpacity>
          <Text>Change Picture</Text>
      </TouchableOpacity>
        <Text>abc@king.com</Text>
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>ABC KING</Text>
      </View>
      {options.map((item) => {
        return (
          <View
          key={item}
            style={{
              backgroundColor: "#dfe0d7",
              height: 50,
              marginTop: 3,
              top:25,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity >
              <Text style={{left:10,fontSize:20, fontWeight:'bold'}}>{item}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
