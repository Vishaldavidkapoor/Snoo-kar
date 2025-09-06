import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../utils/screens';
import {BookingScreen} from '../components/screens/BookingScreen/BookingScreen';
import Login from '../components/screens/Login/Login';
import Register from '../components/screens/Register/Register';
import {Carousel} from '../components/screens/Carousel/Carousel';
import {Choice} from '../components/screens/Choice/Choice';
import Profile from '../components/screens/Profile/Profile';
import {Success} from '../components/screens/Success/Success';
import Food from '../components/screens/Food/Food';
import Settings from '../components/screens/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {loginAction} from '../stores/userActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {actions} from '../stores/actions';
import { getDatabase, onValue, ref } from 'firebase/database';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const db = getDatabase();

 const tableRef = ref(db, 'tables');

useEffect(() => {
  const unsubscribe = onValue(tableRef, (snapshot) => {
    const data = snapshot.val();
    // Update your state with the new data
 dispatch({
        type: actions.SET_TABLES,
        payload: data.tableRemaining,
      });
  });

  return () => {
    // Always clean up the listener
    unsubscribe();
  };
}, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isLoggedIn ? screens.Choice : screens.Login}>
      <Stack.Screen name={screens.BookingScreen} component={BookingScreen} />
      <Stack.Screen name={screens.Login} component={Login} />
      <Stack.Screen name={screens.Register} component={Register} />
      <Stack.Screen name={screens.Carousel} component={Carousel} />
      <Stack.Screen name={screens.Choice} component={Choice} />
      <Stack.Screen name={screens.Success} component={Success} />
      <Stack.Screen name={screens.Setting} component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeStack;
