import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookingScreen from "../../screens/BookingScreen/BookingScreen.tsx";
import Profile from "../../screens/Profile/Profile";
import Success from "../../screens/Success/Success";
import Food from "../../screens/Food/Food";
import Settings from "../../screens/Settings/Settings";
import Carousel from "../../screens/Carousel/Carousel";
import Choice from "../../screens/Choice/Choice";

const Tab = createBottomTabNavigator();

export default BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Carousel}
        options={{
          tabBarIcon: () => (
            <View
              style={{ flexDirection: "column", alignItems: "center" }}
              onPress={() => navigation.navigate("Profile")}
            >
              <Image
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 7,
                  backgroundColor: "black",
                }}
                source={require("../../../../assets/navIcons/house.png")}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Book a Table" component={Choice} options={{
        tabBarIcon: () => (
          <View
            style={{ flexDirection: "column", alignItems: "center" }}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 7,
                backgroundColor: "black",
              }}
              source={require("../../../../assets/navIcons/8.png")}
            />
          </View>
        ),
      }} />
      <Tab.Screen name="Food" component={Food} options={{
        tabBarIcon: () => (
          <View
            style={{ flexDirection: "column", alignItems: "center" }}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 7,
                backgroundColor: "black",
              }}
              source={require("../../../../assets/navIcons/popcorn.png")}
            />
          </View>
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: () => (
          <View
            style={{ flexDirection: "column", alignItems: "center" }}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 7,
                backgroundColor: "black",
              }}
              source={require("../../../../assets/navIcons/pro.png")}
            />
          </View>
        ),
      }} />

      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarIcon: () => (
          <View
            style={{ flexDirection: "column", alignItems: "center" }}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 7,
                backgroundColor: "black",
              }}
              source={require("../../../../assets/navIcons/set.png")}
            />
          </View>
        ),
      }} />
    </Tab.Navigator>
  );
};

// export default BottomNav = ({ navigation }) => {
//   const [active, setActive] = useState(0);
//   return (
//     <View
//       style={{
//         height: 60,
//         backgroundColor: "black",
//         flexDirection: "row",
//         justifyContent: "space-around",
//       }}
//     >
//         <Button onPress={() => navigation.navigate('Profile')} title="Press"/>
//       {navOptions.map((item, index) => {
//         return (
//           <TouchableOpacity
//             key={index}
//             style={{ flexDirection: "column", alignItems: "center",  }}
//             onPress={() => navigation.navigate('Profile')}
//           >
//             <Image
//               style={{
//                 height: 30,
//                 width: 30,
//                 borderRadius: 7,
//                 backgroundColor: index == active ? "grey" : "black",
//               }}
//               source={
//                 index == 0
//                   ? require("../../../assets/navIcons/house.png")
//                   : index == 1
//                   ? require("../../../assets/navIcons/8.png")
//                   : index == 2
//                   ? require("../../../assets/navIcons/popcorn.png")
//                   : index == 3
//                   ? require("../../../assets/navIcons/pro.png")
//                   : require("../../../assets/navIcons/set.png")
//               }
//             />
//             <Text style={{ color: "white" }}>{item}</Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };
