import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default Success = ({navigation}) => {
  useEffect(() => setTimeout(() => navigation.navigate('Carousel'), 3000));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{height: '40%', width: '70%'}}
        source={require('../../../../assets/tick.gif')}
      />
      <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold'}}>
        Booking Succesful
      </Text>
    </View>
  );
};
