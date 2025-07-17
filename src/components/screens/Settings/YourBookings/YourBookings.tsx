import React, {useState, useEffect} from 'react';
import {get, ref} from 'firebase/database';

import {Text, View, StyleSheet, FlatList} from 'react-native';
import {db} from '../../../../../App';
import {BookingData} from '../../BookingScreen/types';
import {useDispatch} from 'react-redux';
import {actions} from '../../../../stores/actions';
import BookingsCard from '../../../common/BookingsCard/BookingsCard';
import {Header} from '../../../common/Header/Header';
import {COLORS} from '../../../../styles/colors';
import NoDataView from '../../../common/NoDataView/NoDataView';

const YourBookings = () => {
  const tableRef = ref(db, 'bookings/');
  const [bookingData, setBookingData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    try {
      dispatch({type: actions.START_LOADING});
      const snapshot = await get(tableRef);
      if (snapshot) {
        setBookingData(snapshot.val());
      }
      const data = Object.values(snapshot.val());
      setBookingData(JSON.parse(JSON.stringify(data)));
    } catch (err) {
      console.log('error occured', err);
    } finally {
      dispatch({type: actions.STOP_LOADING});
    }
  };

  const renderItem = ({item}: {item: BookingData}) => {
    return <BookingsCard data={item} />;
  };

  return (
    <View style={styles.container}>
      <Header text="Your Bookings" />
      {bookingData?.length > 0 ? 
      <FlatList
        data={bookingData}
        ListHeaderComponent={
          <Text
            style={{
              paddingHorizontal: 15,
              paddingTop: 10,
              fontSize: 18,
              color: COLORS.black,
            }}>
            Total Bookings : {bookingData.length}
          </Text>
        }
        renderItem={renderItem}
      /> :
      <NoDataView  message={'No bookings yet'}/>
      }
    </View>
  );
};

export default YourBookings;

const styles = StyleSheet.create({
  container: {flex: 1},
});
