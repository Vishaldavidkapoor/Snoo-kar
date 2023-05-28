import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Register = ({navigation}) => {

const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [error,setError]=useState(false);
const auth = getAuth();
const [user,setUser]= useState();

handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Carousel')) // if success then navigate to Main Page
      .catch(error => console.log('eror',error)); // error will catch here

      console.log('handleSignUp'); // just show in console
      // add in firebase coding to save user profile into database

  };

  return (
    <View style={{flex:1, backgroundColor:"black", padding:10}}>
      <Text>Email</Text>
      <TextInput placeholder='Enter Email' onChangeText={setEmail} value={email}/>
      <Text>Password</Text>
      <TextInput placeholder='Enter Password' onChangeText={setPassword} value={password}/>
      {error && <Text style={{color:'red'}}>Wrong username or password. Please try again</Text>}
      <TouchableOpacity onPress={()=>handleSignUp()}  style={{borderWidth:1, borderColor:'grey', borderRadius:5,alignItems:'center', justifyContent:'center'}}>
    
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register