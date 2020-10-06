import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStacknavigator} from '@react-navigation/stack'
import global_styles from '../styles/global_styles'
import AsyncStorage from '@react-native-community/async-storage';

const styles = global_styles.css_styles;
export default function signup_screen({navigation}){
    const [first_name, set_first_name] = useState('');
    const [last_name, set_last_name] = useState('');
    const [master_cred, set_master_cred] = useState('');
    const [username, set_username] = useState('');
    const [password, set_password] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.header2}>Create Your Account</Text>
            <View style={styles.login_field}>
                <TextInput 
                style={styles.input_text}
                placeholder='First Name' 
                placeholderTextColor={global_styles.background_color}
                onChangeText={(val) => set_first_name(val)}/>
            </View>

            <View style={styles.login_field}>
                <TextInput 
                style={styles.input_text} 
                placeholder='Last Name' 
                placeholderTextColor={global_styles.background_color}
                onChangeText={(val) => set_last_name(val)}/>
            </View>

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

            <View style={styles.login_field}>
                <TextInput 
                style={styles.input_text}
                placeholder='Master Credential' 
                placeholderTextColor={global_styles.background_color}
                onChangeText={(val) => set_master_cred(val)}/>
            </View>

            <TouchableOpacity style={styles.login_btn}
                onPress={() => {
                    register_user(first_name, last_name, master_cred, username, password, navigation)
                }}>
                <Text style={styles.login_text}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const store_token = async(key, value) =>{
    try {
        return value = await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e);
    }
}

function login(username, password, navigation){
    var request_params = {
    method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({"username": username,"password":password}),
        redirect: 'follow'
    };

    fetch("http://73.66.169.37:8080/auth/login", request_params)
        .then(response => response.json())
        .then(response =>{
            if('error' in response){
                console.log(response['error']);
            }else{
                store_token('refresh_token', response.refreshToken);
                navigation.navigate('home');
            }
                
                
        })
        .catch(error => console.log('error', error));
}

//Send POST request to create new user
function register_user(first_name, last_name, master_cred, username, password, navigation){
    var request_params = {
        method: 'POST',
        headers: {
            'Accept': "application/json, text/plain, */*",
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            username: username,
            password: password,
            FirstName: first_name,
            LastName: last_name,
            MasterCred: master_cred
        }),
        redirect: 'follow'
    };
    fetch('http://73.66.169.37:8080/user/new', request_params)
        .then((response) =>{
            if(response.status != 200){
                console.log('errors detected');
            }else{
                login(username, password, navigation);
            }
        })
        .catch( error =>{
            console.error(error);
        });
}
