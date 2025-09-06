import { StyleSheet } from "react-native";
import { typography } from "../../../styles/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    bottom: 5,
  },
  button: {
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 50,
    marginTop: 160,
    fontWeight: 'bold',
    color: 'white',
    textDecorationLine: 'underline',
    fontFamily: typography.latoBold,
  },
});
