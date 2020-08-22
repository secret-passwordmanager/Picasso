import React, {useState} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import global_styles from '../styles/global_styles'
import requests from "./requests";
import credentials from "./credentials"
import settings from "./settings"

const styles = global_styles.css_styles;
const Tab = createMaterialBottomTabNavigator();

export default function tabs() {
    return (
      <Tab.Navigator
        initialRouteName="Password Requests"
        backBehavior = 'history'
        shifting = 'true'
        labeled = 'false'
        activeColor = 'white'
        inactiveColor = {global_styles.background_color}
        barStyle={{ backgroundColor: global_styles.main_color}}
      >
        <Tab.Screen
          name="Password Requests"
          component={requests}
          options={{
            tabBarLabel: '',
            tabBarColor: styles.main_color,
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Credentials"
          component={credentials}
          options={{
            tabBarLabel: '',
            tabBarColor: styles.main_color,
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="lock" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={settings}
          options={{
            tabBarLabel: '',
            tabBarColor: styles.main_color,
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="settings" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }