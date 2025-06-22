import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Carousel from './src/components/screens/Carousel/Carousel';
import BookingScreen from './src/components/screens/BookingScreen/BookingScreen';
import Profile from './src/components/screens/Profile/Profile';
import Success from './src/components/screens/Success/Success';
import Choice from './src/components/screens/Choice/Choice';
import Food from './src/components/screens/Food/Food';
import Settings from './src/components/screens/Settings/Settings';
import Login from './src/components/screens/Login/Login';
import Register from './src/components/screens/Register/Register';
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {Provider} from 'react-redux';
import {store} from './src/stores/store';
import { Header } from './src/components/common/Header/Header';

const firebaseConfig = {
  apiKey: 'AIzaSyCeObXAZZFEOezjV2NLcudkOQ4B0TCIlq0',
  authDomain: 'snoo-kar.firebaseapp.com',
  projectId: 'snoo-kar',
  storageBucket: 'snoo-kar.appspot.com',
  messagingSenderId: '172145554760',
  appId: '1:172145554760:web:efbe4d8496a0da037c6f7d',
  measurementId: 'G-G98HE8HNJ0',
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Carousel">
            <Stack.Screen name="Book a Table" component={BookingScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Carousel" component={Carousel} />
            <Stack.Screen name="Choice" component={Choice} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Success" component={Success} />
            <Stack.Screen name="Food" component={Food} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C365A',
  },
});
