import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Header} from '../../common/Header/Header';
import {useNavigation} from '@react-navigation/native';
import SoundPlayer from 'react-native-sound-player';
import {COLORS} from '../../../styles/colors';
import TimePicker from '../../common/TimePicker/TImePicker';
import {useDispatch, useSelector} from 'react-redux';
import {updateTableRemaining} from '../../../stores/userActions';
import {screens} from '../../../utils/screens';
import moment from 'moment';
import {styles} from './styles';
import uuid from 'react-native-uuid';
import {db} from '../../../../App';
import {set, ref, get} from 'firebase/database';
import {BookingData} from './types';
import {actions} from '../../../stores/actions';
import Button from '../../common/Button/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const BookingScreen = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let bookingData: BookingData;
  let index = parseInt(Object.values(route.params).toString());
  const [fromTime, setFromTime] = useState('00h 00m');
  const [toTime, setToTime] = useState('00h 00m');
  const [showFromTime, setShowFromTime] = useState(false);
  const [showToTime, setShowToTime] = useState(false);
  const tableRemaining = useSelector(
    (state: any) => state.userData.tableRemaining,
  );
  const totalTimeHours = moment(toTime, 'HH:mm').diff(
    moment(fromTime, 'HH:mm'),
    'h',
  );
  const totalTimeMinutes =
    totalTimeHours > 1
      ? totalTimeHours - (totalTimeHours % 60)
      : moment(toTime, 'HH:mm').diff(moment(fromTime, 'HH:mm'), 'm') % 60;
  useEffect(() => {
    fetchRemainingTablesCount();
  }, []);

  const fetchRemainingTablesCount = async () => {
    const tableRef = ref(db, 'tables');
    const snapshot = await get(tableRef);
    if (snapshot.exists()) {
      const tables = snapshot.val();
      // console.log('Tables fetched:', tables);
      dispatch({
        type: actions.SET_TABLES,
        payload: tables.tableRemaining,
      });
    } else {
      console.log('No tables found');
    }
  };

  const handleOnPressBooking = async () => {
    try {
      dispatch({type: actions.START_LOADING});
      bookingData = {
        ...bookingData,
        fromTime: fromTime,
        toTime: toTime,
        bookingDate: new Date(),
        bookingID: uuid.v4().toString(),
      };

      await set(ref(db, `bookings/${bookingData.bookingID}`), bookingData);
      await set(ref(db, 'tables/tableRemaining'), tableRemaining - 1);
      SoundPlayer.playAsset(require('../../../../assets/break.mp3'));
      navigation.navigate(screens.Success as never);
      setTimeout(() => {
        dispatch(updateTableRemaining(tableRemaining - 1));
      }, 500);
    } catch (error) {
      console.error('Error booking table:', error);
    } finally {
      dispatch({type: actions.STOP_LOADING});
    }
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
        <Text style={[styles.labelText, {color: COLORS.emerald}]}>
          {'Total time booked: ' +
            totalTimeHours +
            'h ' +
            totalTimeMinutes +
            'min'}
        </Text>
      )}
      {fromTime !== '00h 00m' && toTime !== '00h 00m' && (
        <Text style={styles.labelText}>
          Price to pay:{' '}
          {totalprice % 10 !== 0
            ? totalprice + (10 - (totalprice % 10))
            : totalprice + ' Rs'}
        </Text>
      )}
      <Button
      style={{marginVertical: 20}}
        title="Book the table"
        backgroundColor="#03dac5"
        icon={<MaterialIcons name="book-online" size={20} color="white" />}
        onPress={() => {
          bookingData = {
            game: index === 0 ? '8 Ball' : 'Snooker',
            fromTime: fromTime,
            toTime: toTime,
            totalTime: totalTimeHours + 'h ' + totalTimeMinutes + 'm',
            price:
              totalprice % 10 !== 0
                ? totalprice + (10 - (totalprice % 10))
                : totalprice,
            bookingID: uuid.v4().toString(),
          };
          handleOnPressBooking();
        }}
        disabled={
          tableRemaining <= 0 || fromTime === '00h 00m' || toTime === '00h 00m'
        }
      />
      {/* <TouchableOpacity
        style={styles.bookButton}
        onPress={handleOnPressBooking}>
        <View style={styles.bookButtonInner}>
          <Text style={styles.bookButtonText}>Book the table</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};
