import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native'
import global_styles from '../styles/global_styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CredentialForm from './credential_form'
import MasterCredentialForm from './master_credential_form'
import {get_value} from '../utils/async_storage.js'
const styles = global_styles.css_styles;


export default function credentials_screen({navigation}){
    const [cred_modal_open, set_cred_modal_open] = useState(false);
    const [master_cred_modal_open, set_master_cred_modal_open] = useState(false);
    const [credentials, set_credentials] = useState([]);
    // get all credentials asyncronously so they can displayed to the user
    get_credentials(set_credentials);
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
                    <MasterCredentialForm set_master_cred_modal_open={set_master_cred_modal_open}/>
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

/*
 * Updates the displayed credentials with the ones stored 
 * asynchronously
 * 
 * @set_credentials: setter method which changes the array of user
 * credentials
 * 
 * Return: Nothing is returned
 */
function get_credentials(set_credentials){
    get_value('credentials').then(credentials =>{
        //credentials are stored in async storage as a JSON string
        set_credentials(JSON.parse(credentials))
    });
    return
}
/*
 * Send POST request to create a new credential and then save the
 * new credential client side so that the user can see it
 * 
 * @credential_info: an object storing the fields associated with
 * a credential (name, type, domain, value)
 * @set_credentials: setter function used to update the array which
 * contains the user's stored credentials
 * 
 * Return: Nothing is returned 
 */
function create_credential(new_credential, set_credentials){
    get_value('jwt_trusted').then(jwt_trusted => {
        var request_header = new Headers();
        request_header.append("Authorization", "Bearer " +  jwt_trusted);
        request_header.append("Content-Type", "application/json");

        var request_params = {
            method: 'POST',
            headers: request_header,
            body: JSON.stringify(new_credential),
            redirect: 'follow'
        };

        fetch("http://73.66.169.37:8080/credential/new", request_params)
            .then(response => {
                //credential created successfully
                if(response.ok){
                    // add the new credential to the array of current credentials
                    set_credentials( (current_credentials) => {
                        return [new_credential, ...current_credentials]
                    });
                }else{
                    throw 'credential could not be created'
                }
            })
            .catch(error => console.log('error', error));
    });
}

/*
 * Check if jwtTrusted token is expired
 *
 * @timestamp: The timestamp of the jwtTrusted token (number of
 * miliseconds after 1970 when the token was created)
 * 
 * Return: true if the jwtTrusted token is expired, false
 * if it isn't expired
 */
function jwt_trusted_expired(timestamp){
    var token_lifetime = 10; //numerical value in seconds
    var seconds_elapsed =  Math.ceil((Date.now() - timestamp) / 1000)
    if(seconds_elapsed > token_lifetime)
        return true
    return false
}

/*
 * Opens the Add New Credentials modal. The user will first be asked to 
 * enter his or her master credential if the jwtTrusted token is expired
 * 
 * @set_cred_modal_open: function which is used to change the state that
 * determines whether or not the new credential modal is open
 * @set_master_cred_modal_open: function which is used to change the 
 * state that determines whether or not the master credential modal is 
 * open
 * 
 * Return: Nothing is returned
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