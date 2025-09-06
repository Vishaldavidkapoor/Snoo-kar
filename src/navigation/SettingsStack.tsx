import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../utils/screens';
import Settings from '../components/screens/Settings/Settings';
import YourBookings from '../components/screens/Settings/YourBookings/YourBookings';

const SettingsStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Setting">
      <Stack.Screen name={screens.Setting} component={Settings} />
      <Stack.Screen name={screens.YourBookings} component={YourBookings} />
       {/* <Stack.Screen name={screens.Payments} component={Payments} />
       <Stack.Screen name={screens.User} component={User} />
       <Stack.Screen name={screens.Help} component={Help} /> */}
    </Stack.Navigator>
  );
};

export default SettingsStack;
