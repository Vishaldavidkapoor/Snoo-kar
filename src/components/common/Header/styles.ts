import {StyleSheet} from 'react-native';
import { COLORS } from '../../../styles/colors';
import { typography } from '../../../styles/typography';

const styles = StyleSheet.create({
  container: {
    height: '7%',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontSize: 20, fontWeight: 'bold', color: COLORS.black, fontFamily: typography.latoBold},
  backIcon: { height: 20, width: 20, left: 10,},
});

export default styles;
