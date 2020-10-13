import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RequestsScreen from "./RequestsScreen";
import CredentialsScreen from "./CredentialsScreen";
import SettingsScreen from "./SettingsScreen";
import {colors} from '../../styles/global';
const Tab = createMaterialBottomTabNavigator();

export default function tabs() {
    return (
      <Tab.Navigator
        initialRouteName="Password Requests"
        backBehavior = 'history'
        shifting = 'true'
        labeled = 'false'
        activeColor = 'white'
       /*  inactiveColor = {global_styles.background_color} */
        barStyle={{ backgroundColor: colors.contentBg}}
      >
        <Tab.Screen
          name="Password Requests"
          component={RequestsScreen}
          options={{
            tabBarLabel: '',
           /*  tabBarColor: styles.main_color, */
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Credentials"
          component={CredentialsScreen}
          options={{
            tabBarLabel: '',
            tabBarColor: colors.contentBg,
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="lock" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: '',
           /*  tabBarColor: styles.main_color, */
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="settings" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }