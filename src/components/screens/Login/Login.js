import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const auth = getAuth();

  handleLogin = (email,password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Carousel'))
      .catch(error => {
       console.log(error)
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black', padding: 10}}>
      <Text>Email</Text>
      <TextInput
        placeholder="Enter Email"
        onChangeText={setEmail}
        value={email}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Enter Password"
        onChangeText={setPassword}
        value={password}
      />
      {error && (
        <Text style={{color: 'red'}}>
          Wrong username or password. Please try again
        </Text>
      )}
      <TouchableOpacity
        onPress={() => handleLogin(email,password)}
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
