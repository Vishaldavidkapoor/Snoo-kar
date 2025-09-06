import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';

export const Success = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Carousel'), 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{ height: '40%', width: '70%' }}
        source={require('../../../../assets/tick.gif')}
      />
      <Text style={{ color: 'green', fontSize: 20, fontWeight: 'bold' }}>
        Booking Succesful
      </Text>
    </View>
  );
};
