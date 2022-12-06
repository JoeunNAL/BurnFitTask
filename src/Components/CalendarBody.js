import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';

const CalendarBody = ({ daysInMonth }) => {
  return (
    <View style={styles.body}>
      {daysInMonth.map((number, idx) => {
        return (
          <Text key={idx} style={styles.text}>
            {number}
          </Text>
        );
      })}
    </View>
  );
};
export default CalendarBody;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    backgroundColor: 'red',
    margin: 5,
  },
});
