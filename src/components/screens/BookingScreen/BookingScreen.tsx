import React, {useEffect, useReducer, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Sound from 'react-native-sound';
import {Header} from '../../common/Header/Header';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../utils/colors';
import TimePicker from '../../common/TimePicker/TImePicker';
import {useDispatch, useSelector} from 'react-redux';
import {updateTableRemaining} from '../../../stores/userActions';
import {screens} from '../../../utils/screens';
import moment, {min} from 'moment';

export const BookingScreen = ({route}) => {
  const requireAudio = require('../../../../assets/break.mp3');
  const navigation = useNavigation();
  let index = route.params;
  const [fromTime, setFromTime] = useState('00h 00m');
  const [toTime, setToTime] = useState('00h 00m');
  const [showFromTime, setShowFromTime] = useState(false);
  const [showToTime, setShowToTime] = useState(false);
  const tableRemaining = useSelector(
    (state: any) => state.userData.tableRemaining,
  );
  index = parseInt(Object.values(index).toString());
  const dispatch = useDispatch();
  const totalTimeHours = moment(toTime, 'HH:mm').diff(
    moment(fromTime, 'HH:mm'),
    'h',
  );
  const totalTimeMinutes = moment(toTime, 'HH:mm').diff(
    moment(fromTime, 'HH:mm'),
    'm',
  );

  const isTimeSet = toTime && fromTime;

  const onPress = () => {
    const s = new Sound(requireAudio, e => {
      if (e) {
        console.log('Error in SOUND', e);
        return;
      }
      s.play(() => s.release());
    });
    navigation.navigate(screens.Success as never);
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
      {isTimeSet && tableRemaining > 0 ? (
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingHorizontal: 20,
            color: colors.emerald,
          }}>
          {'Total time booked: ' +
            totalTimeHours +
            'h ' +
            totalTimeMinutes +
            'min'}
        </Text>
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingHorizontal: 20,
            color: colors.red,
          }}>
          Please select time and check table availability
        </Text>
      )}
      {!isNaN(totalTimeMinutes) && (
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingHorizontal: 20,
            color: colors.black,
          }}>
          Price to pay: {Math.ceil(totalTimeMinutes % 10) * 10 + ' Rs'}
        </Text>
      )}
      <TouchableOpacity
        style={{
          borderColor: 'black',
          borderWidth: 2,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 10,
          height: 160,
          width: 160,
          marginTop: 100,
          justifyContent: 'center',
          borderRadius: 80,
          backgroundColor: colors.black,
        }}
        onPress={() => onPress()}>
        <View
          style={{
            alignItems: 'center',
            height: 80,
            width: 80,
            borderRadius: 40,
            justifyContent: 'center',
            backgroundColor: colors.white,
            zIndex: -1,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: colors.black,
              zIndex: 999,
              textAlign: 'center',
            }}>
            Book the table
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
