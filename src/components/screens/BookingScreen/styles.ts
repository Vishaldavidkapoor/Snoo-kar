import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: '31%',
    width: '100%',
    top: 10,
  },
  timePickerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: '10%',
    paddingHorizontal: 20,
  },
  timeLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  timeValue: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  labelText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: colors.black,
  },
  valueText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  bookButton: {
    borderColor: 'black',
    borderWidth: 2,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    height: 160,
    width: 160,
    marginTop: 100,
    justifyContent: 'center',
    borderRadius: 80,
    backgroundColor: colors.black,
  },
  bookButtonInner: {
    alignItems: 'center',
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: colors.white,
    zIndex: -1,
  },
  bookButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
    zIndex: 999,
    textAlign: 'center',
  },
});
