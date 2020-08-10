import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import login from "../screens/login";
import signup from "../screens/signup";
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  var is_logged_in = false;
  if(is_logged_in){
    //direct user to homepage first
  }else{
    //direct user to login page first
    return (
      <Navigator headerMode="none">
        <Screen name="login" component={login}/>
        <Screen name="signup" component={signup}/>
      </Navigator>
    );
  }
};

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);