import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import global_styles from '../styles/global_styles'

const styles = global_styles.css_styles;
export default function login_screen({navigation}){
    const [username, set_username] = useState('');
    const [password, set_password] = useState('');
    return (
        <View style={styles.container}>
            {/*<StatusBar style="auto" />*/}
            <Text style={styles.header}>SECRET</Text>
            <View style={styles.login_field}>
                <TextInput 
                style={styles.input_text} 
                placeholder='Username' 
                placeholderTextColor={global_styles.background_color}
                onChangeText={(val) => set_username(val)}/>
            </View>
            <View style={styles.login_field}>
                <TextInput 
                style={styles.input_text}
                secureTextEntry={true} 
                placeholder='Password' 
                placeholderTextColor={global_styles.background_color}
                onChangeText={(val) => set_password(val)}/>
            </View>

            {/*<TouchableOpacity >
                <Text style={styles.login_text}>Forgot Password?</Text>
            </TouchableOpacity>*/}

            <TouchableOpacity style={styles.login_btn}
                onPress={() => {
                    login(username, password, navigation);
                    //navigation.navigate('home')
                }}>
                <Text style={styles.login_text}>LOGIN</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('signup')
                }>
                <Text style={styles.login_text}>Create an account</Text>
            </TouchableOpacity>
        </View>
    );
};

function login(username, password, navigation){
    var request_params = {
    method: 'POST',
        headers: {
            //'Accept': "application/json, text/plain, */*",
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({"username": username,"password":password}),
        redirect: 'follow'
    };

    fetch("http://73.66.169.37:8080/auth/login", request_params)
    .then(response => response.json())
    .then(response =>{
        //console.log(response);
        if('error' in response)
            console.log(response['error']);
        else
            console.log('refresh token:', response['refreshToken']);
             
    })
    .catch(error => console.log('error', error));
}


