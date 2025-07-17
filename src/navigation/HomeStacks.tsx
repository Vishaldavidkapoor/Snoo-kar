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

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Carousel">
      <Stack.Screen name={screens.BookingScreen} component={BookingScreen} />
      <Stack.Screen name={screens.Login} component={Login} />
      <Stack.Screen name={screens.Register} component={Register} />
      <Stack.Screen name={screens.Carousel} component={Carousel} />
      <Stack.Screen name={screens.Choice} component={Choice} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name={screens.Success} component={Success} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Settings" component={Settings} />
      {/* <Stack.Screen name={screens.MapViewLocation} component={MapViewLocation} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
