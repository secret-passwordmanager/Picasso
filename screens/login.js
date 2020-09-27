import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import global_styles from '../styles/global_styles'
import AsyncStorage from '@react-native-community/async-storage';
import {login} from '../utils/user_login.js'

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





