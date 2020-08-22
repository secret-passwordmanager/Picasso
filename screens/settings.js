import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStacknavigator} from '@react-navigation/stack'
import global_styles from '../styles/global_styles'

const styles = global_styles.css_styles;

export default function settings_screen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.login_text}>Settings Screen</Text>
        </View>
    );
};