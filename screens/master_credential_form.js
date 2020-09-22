import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native'
import  global_styles  from '../styles/global_styles'
import { Formik } from 'formik'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-community/async-storage';

const styles = global_styles.css_styles;
export default function CredentialForm(){
    return (
        <View>
            <Formik
                initialValues={{master_credential:null}}
                onSubmit={(values) => {
                    get_jwt_trusted_token(values.master_credential)
                }}
            >
                {(props) => (
                    <View style={styles.centered}>
                        <View>
                            <Text style={styles.header2}>Please Enter Your Master Credential</Text>
                        </View>
                        <TextInput
                            placeholder=''
                            onChangeText={props.handleChange('master_credential')}
                            value={props.values.master_credential}
                            secureTextEntry={true} 
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.login_btn}
                            onPress={() => {
                                props.handleSubmit()
                            }}>
                            <Text style={styles.login_text}>Enter</Text>
                        </TouchableOpacity>
                    </View>
                    
                )}
            </Formik>
        </View>
    )
}

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

function get_jwt_trusted_token(master_credential){
    //get refresh token
    get_value('refresh_token').then( token => {
        var refresh_token = token
        //initialize request params
        var request_params = {
            method: 'POST',
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                refreshToken: refresh_token,
                masterCred: master_credential
            }),
            redirect: 'follow'
        };
        console.log('refresh_token',refresh_token);
        //get jwtTrusted token
        fetch("http://73.66.169.37:8080/auth/refresh", request_params)
            .then(response =>{
                if(response.ok){
                    return response.json();
                }else{
                    throw 'master credential incorrect';
                }
            })
            .then(response =>{
                console.log(response);
                //save value and timestamp of jwt token
                store_value('jwt_trusted', response.jwt);
                store_value('jwt_trusted_timestamp', Date.now().toString());
            })
            .catch(error => console.log('Error:', error));

    });
}