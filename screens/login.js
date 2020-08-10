import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import global_styles from '../styles/global_styles'

const styles = global_styles.css_styles;
export default function login_screen({navigation}){
    return (
        <View style={styles.container}>
            {/*<StatusBar style="auto" />*/}
            <Text style={styles.header}>SECRET</Text>
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

            {/*<TouchableOpacity >
                <Text style={styles.login_text}>Forgot Password?</Text>
            </TouchableOpacity>*/}

            <TouchableOpacity style={styles.login_btn}>
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

