import React, {Component, useState, useEffect, useContext} from 'react'
import { Text, View } from 'react-native';
import {requests} from '../../utils/requests';
import {AuthContext} from '../../utils/authContext';
import DropdownAlert from 'react-native-dropdownalert';
import Credential from '../../components/credential';


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


/*     useEffect(() => {
        let credList = [];
        creds.forEach((cred) => {
            credList.push(<Credential credential={cred}></Credential>)
        });

    }, [creds]); */


    return(
        <View style={styles.container}>
            {creds}
            <DropdownAlert ref={ref => setDropDown(ref)} />
        </View>  
    );
};
