import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {TouchableOpacity, Text, View, ImageBackground} from 'react-native';
import Header from '../../common/Header/Header';
import BottomNav from '../../common/BottomNav/BottomNav';

export default Carousel = ({navigation}) => {
  // const images = [
  //   'https://source.unsplash.com/1024x768/?nature',
  //   'https://source.unsplash.com/1024x768/?water',
  //   'https://source.unsplash.com/1024x768/?girl',
  //   'https://source.unsplash.com/1024x768/?tree',
  // ];
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Header text="Welcome, King" />
      {/* <SliderBox images={images}  /> */}
      <ImageBackground
        style={{height: '100%', width: '100%', bottom: 5}}
        source={require('../../../../assets/background2.jpg')}
        >
        <TouchableOpacity
          style={{top: 20, alignItems: 'center', justifyContent: 'center'}}
          onPress={() => navigation.navigate('Choice')}>
          <Text
            style={{
              fontSize: 50,
              marginTop: 160,
              fontWeight: 'bold',
              color: 'white',
              textDecorationLine:'underline'
            }}>
            Book a Table
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
