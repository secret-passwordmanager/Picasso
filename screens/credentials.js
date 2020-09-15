import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStacknavigator} from '@react-navigation/stack'
import global_styles from '../styles/global_styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CredentialForm from './credential_form'

const styles = global_styles.css_styles;


export default function credentials_screen({navigation}){
    const [modal_open, set_modal_open] = useState(false);
    return(
        <View style={styles.container}>
            <Text style={styles.login_text}>Credentials</Text>
            <Modal visible={modal_open} animationType='slide'>
                <View style={styles.close_form}>
                    <MaterialCommunityIcons
                        name='close-circle'
                        color={global_styles.alt_color}
                        size={30}
                        onPress={() => set_modal_open(false)}
                    />
                </View>
                <View style={styles.form_container}>
                    <CredentialForm/>
                </View>
            </Modal>
            <MaterialCommunityIcons
                name='plus-circle'
                color={global_styles.alt_color}
                size={30}
                onPress={() => set_modal_open(true)}
            />
        </View>  
    );
};