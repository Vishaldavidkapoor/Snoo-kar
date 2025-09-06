import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {Provider} from 'react-redux';
import {store} from './src/stores/store';
import {getDatabase} from 'firebase/database';
import {BottomNav} from './src/components/common/BottomNav/BottomNav';

const firebaseConfig = {
  apiKey: 'AIzaSyCeObXAZZFEOezjV2NLcudkOQ4B0TCIlq0',
  authDomain: 'snoo-kar.firebaseapp.com',
  projectId: 'snoo-kar',
  databaseURL:
    'https://snoo-kar-default-rtdb.asia-southeast1.firebasedatabase.app',
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


export const db = getDatabase(app);

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <BottomNav />
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
