import React from 'react'
import {Text, View, TextInput, TouchableOpacity, Modal } from 'react-native'
import  global_styles  from '../../styles/global_styles'
import { Formik } from 'formik'
import {get_value, store_value} from '../../utils/async_storage.js'

import {AuthContext} from '../../App';
import {requests} from '../../utils/requests';
import AsyncStorage from '@react-native-community/async-storage'

const styles = global_styles.css_styles;


export default function MasterCredScreen(){

    const { state, dispatch } = React.useContext(AuthContext);

    return (
        <View>
            <Formik
                initialValues={{master_credential:null}}
                onSubmit={(values) => {
                    requests.refreshJwt(values.master_credential)
                    .then((jwtTrusted) => {
                        AsyncStorage.setItem('jwt', jwtTrusted);
                        dispatch({type: 'SET_JWT', jwt: jwtTrusted});
                    })
                    .catch((err) => {
                        console.log('Error: ' + err.message);
                    });
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
