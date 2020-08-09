import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import login from "../screens/login";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  var is_logged_in = false;
  if(is_logged_in){
    //direct user to homepage
  }else{
    //direct user to login page
    return (
      <Navigator headerMode="none">
        <Screen name="login" component={login} />
      </Navigator>
    );
  }
};

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);