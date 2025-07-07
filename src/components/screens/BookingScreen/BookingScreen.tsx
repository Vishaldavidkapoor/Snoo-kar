import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Sound from 'react-native-sound';
import {Header} from '../../common/Header/Header';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../utils/colors';
import TimePicker from '../../common/TimePicker/TImePicker';
import {useDispatch, useSelector} from 'react-redux';
import {updateTableRemaining} from '../../../stores/userActions';
import {screens} from '../../../utils/screens';
import moment from 'moment';
import {styles} from './styles';
import uuid from 'react-native-uuid';
import { db } from '../../../../App';
import { set, ref } from 'firebase/database';

type BookingData = {
  fromTime: string;
  toTime: string;
  bookingID: string;
  paymentID?: string;
  paymentAmount?: number;
}

export const BookingScreen = ({route}) => {
  const requireAudio = require('../../../../assets/break.mp3');
  const navigation = useNavigation();
  let index = parseInt(Object.values(route.params).toString());
  const [fromTime, setFromTime] = useState('00h 00m');
  const [toTime, setToTime] = useState('00h 00m');
  const [showFromTime, setShowFromTime] = useState(false);
  const [showToTime, setShowToTime] = useState(false);
  let bookingData : BookingData;
  const tableRemaining = useSelector(
    (state: any) => state.userData.tableRemaining,
  );
  const dispatch = useDispatch();

  const totalTimeHours = moment(toTime, 'HH:mm').diff(
    moment(fromTime, 'HH:mm'),
    'h',
  );
  const totalTimeMinutes =
    totalTimeHours > 1
      ? (moment(toTime, 'HH:mm').diff(moment(fromTime, 'HH:mm'), 'm') % 60) -
        totalTimeHours
      : moment(toTime, 'HH:mm').diff(moment(fromTime, 'HH:mm'), 'm') % 60;

  const onPress = () => {
    bookingData = {...bookingData, fromTime: fromTime, toTime: toTime, bookingID: uuid.v4().toString(), 
    };

    set(ref(db, `bookings/${bookingData.bookingID}`), bookingData);
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
  
  const totalprice = Math.round(totalTimeHours * 60 + totalTimeMinutes) * 2;

  const renderTimePicker = (
    title: string,
    time: string,
    onPress: () => void,
  ) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.timeLabel}>
        {title}
        <Text style={styles.timeValue}>{time}</Text>
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header text="Book a Table" />
      <Image
        style={styles.image}
        source={
          index === 0
            ? require('../../../../assets/8ball.jpg')
            : require('../../../../assets/snooker.jpg')
        }
      />
      <View style={styles.timePickerContainer}>
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
      <Text style={styles.labelText}>
        Tables remaining:
        <Text style={styles.valueText}> {tableRemaining}</Text>
      </Text>
      {fromTime !== '00h 00m' && toTime !== '00h 00m' && (
        <Text style={[styles.labelText, {color: colors.emerald}]}>
          {'Total time booked: ' +
            totalTimeHours +
            'h ' +
            totalTimeMinutes +
            'min'}
        </Text>
      ) }
      {fromTime !== '00h 00m' && toTime !== '00h 00m' && (
        <Text style={styles.labelText}>
          Price to pay:{' '}
          {totalprice % 10 !== 0
            ? totalprice + (10 - (totalprice % 10))
            : totalprice + ' Rs'}
        </Text>
      )}
      <TouchableOpacity style={styles.bookButton} onPress={onPress}>
        <View style={styles.bookButtonInner}>
          <Text style={styles.bookButtonText}>Book the table</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
