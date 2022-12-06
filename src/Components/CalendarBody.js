import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CalendarBody = ({ daysInMonth }) => {
  const firstDayThisMonth = daysInMonth.indexOf(1);
  let firstDayNextMonth = daysInMonth.lastIndexOf(1);

  if (firstDayNextMonth === firstDayThisMonth) {
    firstDayNextMonth = -1;
  }

  return (
    <View>
      <FlatList
        columnWrapperStyle={styles.calendarRows}
        keyExtractor={(item, index) => `${index}keystring`}
        numColumns={7}
        data={daysInMonth}
        renderItem={({ item, index }) => {
          const dayCSS =
            styles[
              index < firstDayThisMonth ||
              (index >= firstDayNextMonth && firstDayNextMonth !== -1)
                ? 'otherMonth'
                : 'thisMonth'
            ];
          return (
            <Text style={dayCSS}>
              {item}
            </Text>
          );
        }}
      />
      {/* {daysInMonth.map((number, index) => {
        const dayCSS =
          styles[
            index < firstDayThisMonth ||
            (index >= firstDayNextMonth && firstDayNextMonth !== -1)
              ? 'otherMonth'
              : 'thisMonth'
          ];

        return (
          <Text
            key={index}
            style={dayCSS}
          >
            {number}
          </Text>
        );
      })} */}
    </View>
  );
};
export default CalendarBody;

const styles = StyleSheet.create({
  calendarRows: {
    justifyContent: 'space-between',
    marginBottom: 5,
    marginTop: 10,
  },
  thisMonth: {
    // borderWidth: 1,
    width: 28,
    textAlign: 'center',
    fontSize: 16,
  },
  otherMonth: {
    // borderWidth: 1,
    color: 'lightgray',
    width: 28,
    fontSize: 16,
    textAlign: 'center',
  },
});
