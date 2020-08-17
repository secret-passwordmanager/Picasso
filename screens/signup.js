import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStacknavigator} from '@react-navigation/stack'
import global_styles from '../styles/global_styles'

const styles = global_styles.css_styles;
export default function signup_screen({navigation}){
    const [first_name, set_first_name] = useState('');
    const [last_name, set_last_name] = useState('');
    const [email, set_email] = useState('');
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
                placeholder='Email' 
                placeholderTextColor={global_styles.background_color}
                onChangeText={(val) => set_email(val)}/>
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

            <TouchableOpacity style={styles.login_btn}
                onPress={() =>
                    {/*register_user(first_name, last_name, email, username, password)*/}
                }>
                <Text style={styles.login_text}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

//Send POST request to create new user
function register_user(first_name, last_name, email, username, password){
    fetch('http://localhost:8000/user/new', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password,
            firstName: first_name,
            lastName: last_name,
            email: email
        })
    })
    .then((response) =>{
        console.log('response', response);
    })
    .catch( error =>{
        console.error(error);
    });
}
