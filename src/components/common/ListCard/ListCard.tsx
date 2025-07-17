import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  GestureResponderEvent,
} from 'react-native';
import {COLORS} from '../../../styles/colors';

interface ListCardProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
  children?: React.ReactNode;
}

const ListCard: React.FC<ListCardProps> = ({
  title,
  onPress,
  style,
  children,
}) => (
  <TouchableOpacity
    style={[styles.card, style]}
    onPress={onPress}
    activeOpacity={0.8}>
    <View>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});

export default ListCard;
