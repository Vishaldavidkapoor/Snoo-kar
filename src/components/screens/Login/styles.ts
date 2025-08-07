import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    top: 10,
    width: '80%',
    borderColor: 'grey',
    backgroundColor: '#3bb143',
    borderRadius: 999,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
