import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//  Local Imports
import ProfileScreen from './Profile/ProfileScreen';
import SketchPadScreen from './SketchPad/SketchPadScreen';
import TimeLineScreen from './Timeline/TimeLineScreen';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: '#fefefe',
          style: {
            backgroundColor: '#000',
          },
        }}>
        <Tabs.Screen
          name="Home"
          component={TimeLineScreen}
          // options={{
          //   tabBarIcon: ({ size, color }) => (
          //     <Image
          //       style={{ tintColor: color, height: size, width: size }}
          //       source={require('cryptoTracker2/src/assets/bank.png')}
          //     />
          //   ),
          // }}
        />
        <Tabs.Screen
          name="Image"
          component={SketchPadScreen}
          // options={{
          //   tabBarIcon: ({ size, color }) => (
          //     <Image
          //       style={{ tintColor: color, height: size, width: size }}
          //       source={require('cryptoTracker2/src/assets/bank.png')}
          //     />
          //   ),
          // }}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileScreen}
          // options={{
          //   tabBarIcon: ({ size, color }) => (
          //     <Image
          //       style={{ tintColor: color, height: size, width: size }}
          //       source={require('cryptoTracker2/src/assets/bank.png')}
          //     />
          //   ),
          // }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
