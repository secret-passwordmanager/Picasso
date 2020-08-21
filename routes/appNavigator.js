import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import login from "../screens/login";
import signup from "../screens/signup";
import home from "../screens/home";
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  var is_logged_in = false;
  if(is_logged_in){
    //direct user to homepage first
    <Screen name="home" component={home}/>
  }else{
    //direct user to login page first
    return (
      <Navigator headerMode="none">
        <Screen name="login" component={login}/>
        <Screen name="signup" component={signup}/>
        <Screen name="home" component={home}/>
      </Navigator>
    );
  }
};

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);