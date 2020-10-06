import * as React from 'react';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext} from './utils/authContext';

import MainNav from "./screens/Main/MainNav";
import MasterCredScreen from './screens/Auth/MasterCredScreen';
import LoginScreen from './screens/Auth/LoginScreen';

const Stack = createStackNavigator();

export default function App() {

    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_REFRESH_TOKEN': 
                    return {
                        ...prevState,
                        userToken: action.token,
                    };
                case 'SET_REFRESH_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                    };
                case 'DELETE_REFRESH_TOKEN':
                    return {
                        ...prevState,
                        userToken: null,
                    };
                case 'SET_JWT':
                    return {
                        ...prevState,
                        jwt: action.jwt
                    };
                case 'DELETE_JWT':
                    return {
                        ...prevState,
                        jwt: null
                    }
            }
        },
        {
            userToken: null,
            jwt: null,
        }
    );
    React.useEffect(() => {

        const autoLogInAsync = async () => { 
            AsyncStorage.getItem('refreshToken')
            .then((refreshToken) => {
                dispatch({ type: 'RESTORE_REFRESH_TOKEN', token: refreshToken });
            })
            .catch((err) => {
                console.log('Error: ' + err.message);
            });
        }

        autoLogInAsync();
    }, []);

    let screen = null;
    if (state.userToken == null) {
        screen = <Stack.Screen name="Login" component={LoginScreen}/>;
    } else if (state.jwt == null) {
        screen = <Stack.Screen name="MasterCred" component={MasterCredScreen}/>;
    } else {
        screen = <Stack.Screen name="MainNav" component={MainNav} />
    }
    return (
        <AuthContext.Provider value={{state, dispatch}}>
            <NavigationContainer>
                <Stack.Navigator>
                    {screen}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}



































/* //import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import login from "./screens/login";
import signup from "./screens/signup";
import home from "./screens/home_navigation";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
          <Screen name="login" component={login}/>
          <Screen name="signup" component={signup}/>
          <Screen name="home" component={home}/>
      </Navigator>
  </NavigationContainer>
  );
}

 */
