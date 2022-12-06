import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';

const CalendarHeader = ({ monthString, year, changeMonthState }) => {
  const stringDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={() => changeMonthState('left')}>
          <ArrowIcon name="left" size="20" color="blue" />
        </Pressable>
        <View style={styles.containerText}>
          <Text>
            {monthString}
            {year}
          </Text>
        </View>
        <Pressable onPress={() => changeMonthState('right')}>
          <ArrowIcon name="right" size="20" color="blue" />
        </Pressable>
      </View>
      <View style={styles.days}>
        {stringDays.map((day, idx) => (
          <Text key={idx}>{day}</Text>
        ))}
      </View>
    </>
  );
};
export default CalendarHeader;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerText: {
    // fontWeight: 'bold',
    // backgroundColor: 'red',
  },
  days: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'powderblue',
  },
});
