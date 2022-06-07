import { View, Text, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import alarm from '../screens/alarm';
import WorldClock from '../screens/worldClock';
import StopWatch from '../screens/stopWatch';
import Timer from '../screens/timer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images } from '../assets/image/images';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        title: '',
        tabBarStyle: {
          height: 95,
          paddingVertical: 7,
          borderTopEndRadius: 20,
          borderTopLeftRadius: 20,
          borderTopWidth: 0,
          right: 0,
          left: 0,
          backgroundColor: '#212A35'
        },
      }}>
      <Tab.Screen
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={{ marginTop: 16 }}>
              <Image
                source={focused ? Images.orangeClock : Images.greyClock}
                resizeMode={"contain"}
                style={{ width: 28, height: 28 }}
              />
            </View>
          ),
        }}
        name="alarm"
        component={alarm}
      />
      <Tab.Screen
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={{ marginTop: 16 }}>
              <Image
                source={focused ? Images.orangeWorld : Images.greyWorld}
                resizeMode={"contain"}
                style={{ width: 28, height: 28 }}
              />
            </View>
          ),
        }}
        name="worldClock"
        component={WorldClock}
      />
      <Tab.Screen
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={{ marginTop: 16 }}>
              <Image
                source={focused ? Images.orangeStopWatch : Images.greyStopWatch}
                resizeMode={"contain"}
                style={{ width: 28, height: 28 }}
              />
            </View>
          ),
        }}
        name="stopWatch"
        component={StopWatch}
      />
      <Tab.Screen
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={{ marginTop: 16 }}>
              <Image
                source={focused ? Images.orangeTimer : Images.greyTimer}
                resizeMode={"contain"}
                style={{ width: 28, height: 28 }}
              />
            </View>
          ),
        }}
        name="Timer"
        component={Timer}
      />
    </Tab.Navigator>
  );
}
