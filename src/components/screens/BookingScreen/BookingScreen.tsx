import React, {useEffect, useReducer, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Sound from 'react-native-sound';
import {Header} from '../../common/Header/Header';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../utils/colors';
import TimePicker from '../../common/TimePicker/TImePicker';
import {useDispatch, useSelector} from 'react-redux';
import {updateTableRemaining} from '../../../stores/userActions';

export const BookingScreen = ({route}) => {
  const requireAudio = require('../../../../assets/break.mp3');
  const navigation = useNavigation();
  let index = route.params;
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [showFromTime, setShowFromTime] = useState(false);
  const [showToTime, setShowToTime] = useState(false);
  const tableRemaining = useSelector(state => state.userData.tableRemaining);
  index = parseInt(Object.values(index).toString());
  const dispatch = useDispatch();

  const onPress = () => {
    const s = new Sound(requireAudio, e => {
      if (e) {
        console.log('Error in SOUND', e);
        return;
      }
      s.play(() => s.release());
    });
    navigation.navigate('Success');
    setTimeout(() => {
    dispatch(updateTableRemaining(tableRemaining - 1));
    }, 500);
  };

  useEffect(() => {
    console.log('object', toTime, ':', fromTime);
  }, [toTime, fromTime]);

  const renderTimePicker = (
    title: string,
    time: string,
    onPress: () => void,
  ) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.black}}>
          {title}
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingHorizontal: 20,
            }}>
            {time}
          </Text>{' '}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header text="Book a Table" />
      <Image
        style={{height: '31%', width: '100%', top: 10}}
        source={
          index == 0
            ? require('../../../../assets/8ball.jpg')
            : require('../../../../assets/snooker.jpg')
        }
      />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-around',
          paddingVertical: '10%',
          paddingHorizontal: 20,
        }}>
        {renderTimePicker('From Time: ', fromTime, () =>
          setShowFromTime(!showFromTime),
        )}

        {showFromTime && (
          <TimePicker
            key={'fromTime'}
            showTime={showFromTime}
            setShowTime={setShowFromTime}
            setTime={setFromTime}
          />
        )}
        {renderTimePicker('To Time: ', toTime, () =>
          setShowToTime(!showToTime),
        )}
        {showToTime && (
          <TimePicker
            key={'toTime'}
            showTime={showToTime}
            setShowTime={setShowToTime}
            setTime={setToTime}
          />
        )}
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          paddingHorizontal: 20,
          color: colors.black,
        }}>
        Tables remaining :{' '}
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20}}>
          {tableRemaining}{' '}
        </Text>
      </Text>
      <TouchableOpacity
        style={{
          borderColor: 'black',
          borderWidth: 2,
          width: '50%',
          alignItems: 'center',
        }}
        onPress={() => onPress()}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Book the table</Text>
      </TouchableOpacity>
    </View>
  );
};
