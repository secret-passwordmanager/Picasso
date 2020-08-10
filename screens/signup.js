import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStacknavigator} from '@react-navigation/stack'
import global_styles from '../styles/global_styles'

const styles = global_styles.css_styles;
export default function signup_screen({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.header2}>Create Your Account</Text>
            <View style={styles.login_field}>
                <TextInput 
                style={styles.input_text}
                placeholder='First Name' 
                placeholderTextColor={global_styles.background_color}/>
            </View>

            <View style={styles.login_field}>
                <TextInput 
                style={styles.input_text} 
                placeholder='Last Name' 
                placeholderTextColor={global_styles.background_color}/>
            </View>

            <View style={styles.login_field}>
                <TextInput 
                style={styles.input_text}
                placeholder='Email' 
                placeholderTextColor={global_styles.background_color}/>
            </View>

            <View style={styles.login_field}>
                <TextInput 
                style={styles.input_text} 
                placeholder='Username' 
                placeholderTextColor={global_styles.background_color}/>
            </View>

            <View style={styles.login_field}>
                <TextInput 
                style={styles.input_text}
                secureTextEntry={true} 
                placeholder='Password' 
                placeholderTextColor={global_styles.background_color}/>
            </View>

            <TouchableOpacity style={styles.login_btn}>
                <Text style={styles.login_text}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};
