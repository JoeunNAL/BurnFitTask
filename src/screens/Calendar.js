import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import CalendarBody from '../Components/CalendarBody';
import CalendarHeader from '../Components/CalendarHeader';

const Calendar = () => {
  const date = new Date();
  const thisYear = date.getFullYear();
  const thisMonth = date.getMonth() + 1; // 0~11 +1

  const [month, setMonth] = useState(thisMonth);
  const [year, setYear] = useState(thisYear);
  const [daysInMonth, setDaysInMonth] = useState([]);
  const monthString = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(Date.UTC(thisYear, month - 1));

  const changeMonthState = direction => {
    if (direction === 'left') {
      if (month - 1 === 0) {
        setYear(year - 1);
        setMonth(12);
      } else {
        setMonth(month - 1);
      }
    }
    if (direction === 'right') {
      if (month + 1 === 13) {
        setYear(year + 1);
        setMonth(1);
      } else {
        setMonth(month + 1);
      }
    }
  };

  useEffect(() => {
    setDaysInMonth(changeDaysInMonthHandler(month, year));
  }, [month, year]);

  return (
    <>
      <CalendarHeader
        monthString={monthString}
        year={year}
        daysInMonth={daysInMonth}
        setMonth={setMonth}
        changeMonthState={changeMonthState}
      />
      <CalendarBody daysInMonth={daysInMonth} />
    </>
  );
};
export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const ckeckLeapYear = year => {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
};

const changeDaysInMonthHandler = (month, year) => {
  const calendarDaysList = [];
  const totalDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (ckeckLeapYear(year)) {
    totalDaysInMonth[1] = 29;
  }

  const firstDayOfWeek = new Date(year, month - 1).getDay();
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDaysList.push(totalDaysInMonth[month - 2] - firstDayOfWeek + 1 + i);
  }

  for (let i = 1; i <= totalDaysInMonth[month - 1]; i++) {
    calendarDaysList.push(i);
  }

  if (calendarDaysList.length % 7 !== 0) {
    const emptySpaceForNextMonth = 7 - (calendarDaysList.length % 7);
    for (let i = 1; i <= emptySpaceForNextMonth; i++) {
      calendarDaysList.push(i);
    }
  }

  return calendarDaysList;
};
