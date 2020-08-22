import React, {useState} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import global_styles from '../styles/global_styles'
import requests from "./requests";

const styles = global_styles.css_styles;
const Tab = createMaterialBottomTabNavigator();

export default function tabs() {
    return (
      <Tab.Navigator
        initialRouteName="Password Requests"
        backBehavior = 'history'
        shifting = 'true'
        labeled = 'false'
        activeColor = {global_styles.main_color}
        inactiveColor = {global_styles.background_color}
        barStyle={{ backgroundColor: global_styles.main_color}}
      >
        <Tab.Screen
          name="Password Requests"
          component={requests}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: styles.main_color,
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={'white'} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }