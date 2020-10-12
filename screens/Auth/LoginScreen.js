import React, {useState} from 'react';
import { Text, View, KeyboardAvoidingView ,TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {requests} from '../../utils/requests';
import {AuthContext} from '../../utils/authContext';
import DropdownAlert from 'react-native-dropdownalert';

import style from '../../styles/screens/loginScreen';


export default function LoginScreen(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dropDown, setDropDown] = useState('');
    const {state, dispatch} = React.useContext(AuthContext);

    return (
        <View style={style.screen}>
            <View style={style.titleContainer}>
                <Text style={style.title}>SECRET</Text>
                <Text style={style.subTitle}>A Password Manager</Text>
            </View>
            
            
            <KeyboardAvoidingView style={style.form}
            behavior="padding">
                <View style={style.inputContainer}>
                    <TextInput style={style.input}
                        placeholder="Username"
                        placeholderTextColor="white"
                        onChangeText={(val) => setUsername(val)}/>

        
                    <TextInput style={style.input}
                        secureTextEntry={true} 
                        placeholder="Password" 
                        placeholderTextColor="white"
                        onChangeText={(val) => setPassword(val)}/>
        
                </View>
                <View style={style.btnContainer}>
                    <TouchableOpacity style={style.loginBtn}
                        onPress={() => {
                            requests.login(username, password)
                            .then((refreshToken) => {
                                AsyncStorage.setItem('refreshToken', refreshToken);
                                dispatch({type: 'SET_REFRESH_TOKEN', token: refreshToken});
                            })
                            .catch((err) => {
                                dropDown.alertWithType('error', 'Error', err.message)
                                    
                            });
                        }}>
                        <Text style={style.btnText}>LOGIN</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={style.signUpBtn}>
                        <Text style={style.btnText}>Create an account</Text>
                    </TouchableOpacity>
                </View>


            </KeyboardAvoidingView>

            <DropdownAlert ref={ref => setDropDown(ref)} />
        </View>
    );
};





