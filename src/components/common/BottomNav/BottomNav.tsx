import React, { useEffect, useState } from 'react';
import {Settings, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import HomeStack from '../../../navigation/HomeStacks';
import {Choice} from '../../screens/Choice/Choice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SettingsStack from '../../../navigation/SettingsStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

export const BottomNav = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: focussed => (
            <TouchableOpacity
              style={{flexDirection: 'column', alignItems: 'center'}}
              onPress={() => navigation.navigate('Home')}>
              <MaterialIcons
                name="home"
                size={22}
                color={focussed.focused ? '#158964' : 'black'}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Book a Table"
        component={Choice}
        options={{
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: focussed => (
            <TouchableOpacity
              style={{flexDirection: 'column', alignItems: 'center'}}
              onPress={() => navigation.navigate('Choice')}>
              <MaterialIcons
                name="book-online"
                size={22}
                color={focussed.focused ? '#158964' : 'black'}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: focussed => (
            <TouchableOpacity
              style={{flexDirection: 'column', alignItems: 'center'}}
              onPress={() => navigation.navigate('Settings')}>
              <MaterialIcons
                name="settings"
                size={22}
                color={focussed.focused ? '#158964' : 'black'}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
