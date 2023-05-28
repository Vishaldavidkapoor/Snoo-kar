import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-elements';

export default Header = ({navigation, text}) => {
  return (
    <>
      <View
        style={{
          height: '7%',
          backgroundColor: '#0C365A',
          justifyContent:'center',
          alignItems:'center'
        }}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Success')}>
          <Image
            style={{width: 30, height: 30, margin: 5}}
            source={require('../../../assets/back.png')}
          />
        </TouchableOpacity> */}
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          {text}
        </Text>
      </View>
    </>
  );
};
