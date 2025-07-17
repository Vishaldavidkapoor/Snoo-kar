import React from 'react';
import {View, FlatList} from 'react-native';
import {Header} from '../../common/Header/Header';
import ListCard from '../../common/ListCard/ListCard';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../utils/screens';
import {useDispatch} from 'react-redux';
import {loginOutAction} from '../../../stores/userActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ListData {
  name: string;
  onPress: () => void;
}

const Settings = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = [
    {
      name: 'Your Bookings',
      onPress: () => {
        navigation.navigate('YourBookings');
      },
    },
    {name: 'Payments', onPress: () => {}},
    {name: 'User', onPress: () => {}},
    {name: 'Help', onPress: () => {}},
    {
      name: 'Logout',
      onPress: async () => {
        dispatch(loginOutAction());
        AsyncStorage.setItem('isLoggedIn', String(false));
        navigation.navigate(screens.Login);
      },
    },
  ];

  const renderItem = ({item}: {item: ListData}) => {
    return <ListCard title={item.name} onPress={item.onPress} />;
  };

  return (
    <View style={{flex: 1}}>
      <Header text="Settings" />
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default Settings;
