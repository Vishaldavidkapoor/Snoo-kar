import React, {Component} from 'react';
import {StyleSheet, Modal, View} from 'react-native';
import {LoaderProps} from './type';
import LottieView from 'lottie-react-native';

const Loader = ({isLoading = true}) => {
  return (
    <Modal transparent={true} animationType="none" visible={isLoading}>
      <View style={styles.modalBackground}>
        <View style={styles.loaderContainer}>
          <LottieView
            style={styles.lottie}
            source={require('../../../../assets/Loader.json')}
            speed={3}
            autoPlay
            loop
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent backdrop
  },
  loaderContainer: {
    height: 320,
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    height: 320,
    width: 320,
    transform: [{rotateZ: '90deg'}],
  },
});
export default Loader;
