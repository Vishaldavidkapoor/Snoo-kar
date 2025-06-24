import {Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import React, {useState} from 'react';
import {View} from 'react-native';
import {colors} from '../../../utils/colors';

type TimePickerProps = {
  showTime: boolean;
  setShowTime: (show: boolean) => void;
  setTime: (time: string) => void;
};

const TimePicker: React.FC<TimePickerProps> = ({
  showTime,
  setShowTime,
  setTime,
}) => {
  return (
    <View>
      <DatePicker
        modal
        open={showTime}
        minuteInterval={30}
        date={new Date()}
        mode="time"
        onConfirm={(date: Date) => {
          setShowTime(false);
          setTime(
            date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
          );
        }}
        onCancel={() => {
          setShowTime(false);
        }}
      />
    </View>
  );
};

export default TimePicker;
