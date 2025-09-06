import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BookingData} from '../../screens/BookingScreen/types';

interface BookingsCardProps {
  data: BookingData;
}

const BookingsCard: React.FC<BookingsCardProps> = ({data}) => {
  const {fromTime, toTime, game, totalTime, price} = data;
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{game}</Text>
      <Text style={styles.text}>
        <Text style={styles.label}>From: </Text>
        {fromTime}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>To: </Text>
        {toTime}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Total Time: </Text>
        {totalTime}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Price: </Text>₹{price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    width:'95%',
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginVertical: 12,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    marginBottom: 8,
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default BookingsCard;
