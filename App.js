import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <HomeIcon name="home" size={size} color={color} />;
            } else if (route.name === 'Calendar') {
              return <CalendarIcon name="calendar" size={size} color={color} />;
            } else if (route.name === 'Library') {
              return <DumbbellIcon name="dumbbell" size={size} color={color} />;
            } else if (route.name === 'MyPage') {
              return <UserIcon name="user" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="HOME" component={Home} />
        <Tab.Screen name="CALENDAR" component={Calendar} />
        <Tab.Screen name="LIBRARY" component={Library} />
        <Tab.Screen name="MY PAGE" component={MyPage} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
