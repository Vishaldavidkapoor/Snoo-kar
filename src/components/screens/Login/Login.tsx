import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {loginAction} from '../../../stores/userActions';
import {useDispatch} from 'react-redux';
import {Image} from 'react-native-elements';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import TextInputWithTitle from '../../common/TextInputwithTitle/TextInputwithTitle';
import strings from '../../../utils/translations/en';
import {COLORS} from '../../../styles/colors';
import {screens} from '../../../utils/screens';
import {setItem} from '../../../utils/Storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (email: string, password: string) => {
    isNewUser
      ? await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => navigation.navigate(screens.Carousel))
          .catch(error => {
            setError(true);
            console.log(error);
          })
      : await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => navigation.navigate(screens.Carousel))
          .catch(error => {
            setError(true);
            console.log(error);
          });
    await setItem('isLoggedIn', String(true));
    dispatch(loginAction());
  };

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
      }}>
      <Image
        style={{height: 250, width: 250, marginTop: 70}}
        source={require('../../../../assets/logo.jpg')}
      />
      <Text style={{fontSize: 38, fontWeight: '500', color: COLORS.black}}>
        Snoo-Kar
      </Text>
      <View style={{width: '100%', flex: 2 / 3}}>
        <TextInputWithTitle
          title="Email"
          placeholderTextColor={'grey'}
          placeholder="Enter Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInputWithTitle
          title="Password"
          placeholderTextColor={'grey'}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      {error && (
        <Text style={{color: 'red'}}>
          Wrong username or password. Please try again
        </Text>
      )}
      <TouchableOpacity
        onPress={() => handleLogin(email, password)}
        style={styles.button}>
        <Text style={{fontSize: 16, color: 'black'}}>
          {isNewUser ? 'Register' : 'Login'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsNewUser(!isNewUser)}>
        <Text style={{fontSize: 16, color: 'blue', paddingVertical: 15}}>
          {!isNewUser
            ? strings.auth.aNewUser.concat(' ', strings.auth.register)
            : strings.auth.returnToLogin}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;
