import React, {useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Header} from '../../common/Header/Header';
import Loader from '../../common/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../../../stores/actions';
import { styles } from './styles';
import { RootStackParamList } from '../../../utils/NavigationStackList';


export const Carousel = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.userData.isLoading);

  return (
    <View style={styles.container}>
      <Loader isLoading={isLoading} />
      <Header text="Welcome, User" />
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../../assets/background3.jpeg')}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch({type: actions.START_LOADING});
            const timer = setTimeout(() => {
              navigation.navigate('Choice');
              dispatch({type: actions.STOP_LOADING});
              clearTimeout(timer);
            }, 2000);
          }}>
          <Text style={styles.buttonText}>Book a Table</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
