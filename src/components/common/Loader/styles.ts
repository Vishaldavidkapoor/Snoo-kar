import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
