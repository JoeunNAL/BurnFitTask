import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeIcon from 'react-native-vector-icons/Entypo';
import CalendarIcon from 'react-native-vector-icons/AntDesign';
import DumbbellIcon from 'react-native-vector-icons/FontAwesome5';
import UserIcon from 'react-native-vector-icons/SimpleLineIcons';

import Home from './src/screens/Home';
import Calendar from './src/screens/Calendar';
import Library from './src/screens/Library';
import MyPage from './src/screens/MyPage';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="HOME"
          component={Home}
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: ({ color, size }) => (
              <HomeIcon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="CALENDAR"
          component={Calendar}
          options={{
            tabBarLabel: 'CALENDAR',
            tabBarIcon: ({ color, size }) => (
              <CalendarIcon name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="LIBRARY"
          component={Library}
          options={{
            tabBarLabel: 'LIBRARY',
            tabBarIcon: ({ color, size }) => (
              <DumbbellIcon name="dumbbell" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="MY PAGE"
          component={MyPage}
          options={{
            tabBarLabel: 'MY PAGE',
            tabBarIcon: ({ color, size }) => (
              <UserIcon name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
