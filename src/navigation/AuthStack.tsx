import Login from '../components/screens/Login/Login';
import {screens} from '../utils/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Carousel} from '../components/screens/Carousel/Carousel';

export const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={screens.Login}>
      <Stack.Screen name={screens.Login} component={Login} />
      <Stack.Screen name={screens.Carousel} component={Carousel} />
    </Stack.Navigator>
  );
};
