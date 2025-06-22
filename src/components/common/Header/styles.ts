import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    height: '7%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontSize: 20, fontWeight: 'bold', color: colors.black},
  backIcon: {margin: 5, height: 30, width: 30},
});

export default styles;
