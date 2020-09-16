import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStacknavigator} from '@react-navigation/stack'
import global_styles from '../styles/global_styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CredentialForm from './credential_form'
import MasterCredentialForm from './master_credential_form'
import AsyncStorage from '@react-native-community/async-storage';

const styles = global_styles.css_styles;


export default function credentials_screen({navigation}){
    const [cred_modal_open, set_cred_modal_open] = useState(false);
    const [master_cred_modal_open, set_master_cred_modal_open] = useState(false);
    return(
        <View style={styles.container}>
            <Text style={styles.login_text}>Credentials</Text>
            <Modal visible={cred_modal_open} animationType='slide'>
                <View style={styles.close_form}>
                    <MaterialCommunityIcons
                        name='close-circle'
                        color={global_styles.alt_color}
                        size={30}
                        onPress={() => set_cred_modal_open(false)}
                    />
                </View>
                <View style={styles.form_container}>
                    <CredentialForm/>
                </View>
            </Modal>
            <Modal visible={master_cred_modal_open} animationType='slide'>
                <View style={styles.close_form}>
                    <MaterialCommunityIcons
                        name='close-circle'
                        color={global_styles.alt_color}
                        size={30}
                        onPress={() => set_master_cred_modal_open(false)}
                    />
                </View>
                <View style={styles.form_container}>
                    <MasterCredentialForm/>
                </View>
            </Modal>
            <MaterialCommunityIcons
                name='plus-circle'
                color={global_styles.alt_color}
                size={30}
                onPress={() => {
                    open_cred_modal(set_cred_modal_open, set_master_cred_modal_open)
                }}
            />
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

/*
 * Check if jwtTrusted token is expired
 */
function jwt_trusted_expired(timestamp){
    var token_lifetime = 300; //numerical value in seconds
    var seconds_elapsed =  Math.ceil((Date.now() - timestamp) / 1000)
    if(seconds_elapsed > token_lifetime)
        return true
    return false
}

/*
 * Opens the Add New Credentials modal. The user will be asked to enter
 * his or her master credential if the jwtTrusted token has an expired
 */
function open_cred_modal(set_cred_modal_open, set_master_cred_modal_open){
    get_value('jwt_trusted_timestamp').then( timestamp => {
        //check if jwtTrusted token is still valid
        if(timestamp && !jwt_trusted_expired(parseInt(timestamp))){
            set_cred_modal_open(true);
        }else{
            set_master_cred_modal_open(true);
        }

    });
}