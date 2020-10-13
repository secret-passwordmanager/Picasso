import React, {Component, useState, useEffect, useContext} from 'react'
import { Text, View, StatusBar } from 'react-native';
import {requests} from '../../utils/requests';
import {AuthContext} from '../../utils/authContext';
import DropdownAlert from 'react-native-dropdownalert';
import Credential from '../../components/credential';
import style from '../../styles/screens/credentialsScreen';

export default function CredentialsScreen(){
    const {state, dispatch} = useContext(AuthContext);
    const [creds, setCreds] = useState([]);
    const [dropDown, setDropDown] = useState('');

    useEffect(() => {
        requests.getCredentials(state.jwt)
        .then((credentials) => {

            let credList = [];
            credentials.forEach((cred) => {
         

                credList.push(<Credential credential={cred} key={cred.id}></Credential>)
            });
            setCreds(credList);
         
        })
        .catch((err) => {
            dropDown.alertWithType('error', 'Error', err.message);
        });
    }, []);

    return(
        <View style= {style.screen}>
            <StatusBar backgroundColor="blue"></StatusBar>
            {creds}
            <DropdownAlert ref={ref => setDropDown(ref)} />
        </View>  
    );
};
