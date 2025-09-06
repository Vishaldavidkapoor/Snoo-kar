import React from 'react';
import {Modal, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {LoaderProps} from './type';
import {styles} from './styles';

const Loader = ({isLoading}: LoaderProps) => {
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

export default Loader;
