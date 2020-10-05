import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStacknavigator} from '@react-navigation/stack';
import global_styles from '../styles/global_styles';
import Socket from '../utils/socket_io';

const styles = global_styles.css_styles;

export default function requests_screen({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={
                    () => {
                        new Socket().connect();
                    }
                }
            >
        <Text>Connect</Text>
            </TouchableOpacity>
        </View>
    );
};