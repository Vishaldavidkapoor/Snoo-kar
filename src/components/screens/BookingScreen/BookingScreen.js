import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
} from 'react-native';
import Sound from 'react-native-sound';
import { Header } from '../../common/Header/Header';

export default BookingScreen = ({navigation, route}) => {
  const requireAudio = require('../../../../assets/break.mp3');
  let index = route.params;
  index = parseInt(Object.values(index).toString());

  const onPress = () => {
    const s = new Sound(requireAudio, e => {
      if (e) {
        console.log('Error in SOUND', e);
        return;
      }
      s.play(() => s.release());
    });

    navigation.navigate('Success');
  };
  return (
    <View style={{flex: 1,}}>
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
          paddingHorizontal:20,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>From Time:</Text>

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>To Time: </Text>
      </View>
      <Text style={{fontSize: 20, fontWeight: 'bold',paddingHorizontal:20,}}>
        Tables remaining :
      </Text>
      <TouchableOpacity
        style={{
          marginHorizontal: '20%',
          borderColor: 'black',
          marginVertical: '10%',
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
