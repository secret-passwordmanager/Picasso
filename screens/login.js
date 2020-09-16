import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import global_styles from '../styles/global_styles'
import AsyncStorage from '@react-native-community/async-storage';

const styles = global_styles.css_styles;
export default function login_screen({navigation}){
    const [username, set_username] = useState('');
    const [password, set_password] = useState('');
    const [error_message, set_err_msg] = useState('');
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
            <Text style={{color:'red'}}>{error_message}</Text>
            <TouchableOpacity style={styles.login_btn}
                onPress={() => {
                    login(username, password, navigation, set_err_msg);
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

const get_value = async(key) =>{
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        console.log(e);
    }
}

const store_value = async(key, value) =>{
    try {
        return value = await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e);
    }
}

function login(username, password, navigation, set_err_msg){
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
        .then(response =>{
            if(response.ok){
                set_err_msg('');
                return response.json();
            }else{
                set_err_msg('username or password is incorrect');
                throw 'username or password is incorrect';
            }
        })
        //.then(response => response.json())
        .then(response =>{
            console.log(response);
            store_value('refresh_token', response.refreshToken);
            store_value('refresh_token_timestamp', Date.now().toString());
            navigation.navigate('home');
            /*
            get_value('refresh_token_timestamp').then( token => {
                console.log('async stored value:', token);
            });
            */
        })
        .catch(error => console.log('Error:', error));
}


