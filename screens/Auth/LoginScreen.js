import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import global_styles from '../../styles/global_styles'
import AsyncStorage from '@react-native-community/async-storage';
import {requests} from '../../utils/requests';
import {AuthContext} from '../../utils/authContext';

const styles = global_styles.css_styles;
export default function LoginScreen(){
    const [username, set_username] = useState('');
    const [password, set_password] = useState('');
    const [error_message, set_err_msg] = useState('');

    const {state, dispatch} = React.useContext(AuthContext);
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

            <Text style={{color:'red'}}>{error_message}</Text>
            <TouchableOpacity style={styles.login_btn}
                onPress={() => {
                    requests.login(username, password)
                    .then((refreshToken) => {
                        AsyncStorage.setItem('refreshToken', refreshToken);
                        dispatch({type: 'SET_REFRESH_TOKEN', token: refreshToken});
                    })
                    .catch((err) => {
                        console.log('Error: Couldn\'t log in');
                        //TODO: Show a popup or something
                    });
                    
                }}>
                <Text style={styles.login_text}>LOGIN</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text style={styles.login_text}>Create an account</Text>
            </TouchableOpacity>
        </View>
    );
};





