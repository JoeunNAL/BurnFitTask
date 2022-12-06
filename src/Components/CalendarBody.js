import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

const CalendarBody = ({ daysInMonth }) => {
  const [pickIndex, setPickIndex] = useState();
  const firstDayThisMonth = daysInMonth.indexOf(1);
  let firstDayNextMonth = daysInMonth.lastIndexOf(1);

  if (firstDayNextMonth === firstDayThisMonth) {
    firstDayNextMonth = -1;
  }

  const pressDayHandler = idx => {
    setPickIndex(idx);
  };

  useEffect(() => {
    setPickIndex();
  }, [daysInMonth]);

  return (
    <View>
      <FlatList
        columnWrapperStyle={styles.calendarRows}
        keyExtractor={(item, index) => `${index}keystring`}
        numColumns={7}
        data={daysInMonth}
        renderItem={({ item, index }) => {
          const dayCSS = [
            styles.thisMonth,
            index < firstDayThisMonth ||
            (index >= firstDayNextMonth && firstDayNextMonth !== -1)
              ? styles.otherMonth
              : null,
            index === pickIndex ? styles.circle : null,
          ];

          return (
            <Pressable
              onPress={e => {
                return pressDayHandler(index);
              }}
            >
              <Text style={dayCSS}>{item}</Text>
            </Pressable>
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
    marginBottom: 7,
    marginTop: 7,
  },
  thisMonth: {
    paddingTop: 4,
    width: 30,
    height: 30,
    textAlign: 'center',
    fontSize: 16,
  },
  otherMonth: {
    color: 'lightgray',
  },
  circle: {
    borderWidth: 1,
    borderRadius: 30 / 2,
    borderColor: 'blue',
    fontWeight: '700',
  },
});
