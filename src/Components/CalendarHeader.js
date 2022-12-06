import React from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';

const CalendarHeader = ({ monthString, year, changeMonthState }) => {
  const stringDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={() => changeMonthState('left')}>
          <ArrowIcon
            name="left"
            size={styles.arrowIcon.size}
            color={styles.arrowIcon.color}
          />
        </Pressable>
        <View style={styles.containercalenderTitle}>
          <Text style={styles.calenderTitle}>{`${monthString} ${year}`}</Text>
        </View>
        <Pressable onPress={() => changeMonthState('right')}>
          <ArrowIcon
            name="right"
            size={styles.arrowIcon.size}
            color={styles.arrowIcon.color}
          />
        </Pressable>
      </View>
      <View style={styles.daysOfWeek}>
        {stringDays.map((day, idx) => {
          const textStyle =
            styles[
              idx === 0
                ? 'holiday'
                : idx === stringDays.length - 1
                ? 'saturday'
                : 'commonday'
            ];
          return (
            <Text key={idx} style={textStyle}>
              {day}
            </Text>
          );
        })}
      </View>
    </>
  );
};
export default CalendarHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 30,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowIcon: { color: '#54b7ec', size: 15 },
  containercalenderTitle: {
    flexDirection: 'row',
    marginVertical: 3,
    marginHorizontal: 3,
  },
  calenderTitle: {
    fontSize: 18,
    fontWeight: '600',
    justifyContent: 'center',
  },
  daysOfWeek: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commonday: {
    width: 30,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    color: 'lightgray',
  },
  holiday: {
    width: 30,
    textAlign: 'center',
    fontSize: 13,
    color: 'red',
  },
  saturday: {
    width: 30,
    textAlign: 'center',
    fontSize: 13,
    color: '#54b7ec',
  },
});
