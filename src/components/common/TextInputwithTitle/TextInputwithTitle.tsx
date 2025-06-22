import React from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';
import styles from './styles';

interface TextInputWithTitleProps extends TextInputProps {
  title: string;
}

const TextInputWithTitle: React.FC<TextInputWithTitleProps> = ({
  title,
  style,
  ...textInputProps
}) => (
  <>
    <Text style={styles.title}>{title}</Text>
    <TextInput style={[styles.input, style]} {...textInputProps} />
  </>
);

export default TextInputWithTitle;
