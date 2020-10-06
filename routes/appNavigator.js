import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import login from "../screens/Auth/LoginScreen";
import signup from "../screens/signup";
import home from "../screens/Main/MainNav";

import {AuthContext} from '../../App';

const Stack = createStackNavigator();


export default function AppNavigator() {
  
    const { state, dispatch } = React.useContext(AuthContext);



    <NavigationContainer>
        <Navigator headerMode="none">
            <Screen name="login" component={login}/>
            <Screen name="signup" component={signup}/>
            <Screen name="home" component={home}/>
        </Navigator>
    </NavigationContainer>
};