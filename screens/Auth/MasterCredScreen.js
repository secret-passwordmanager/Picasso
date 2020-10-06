import React from 'react'
import {Text, View, TextInput, TouchableOpacity } from 'react-native'
import  global_styles  from '../../styles/global_styles'
import { Formik } from 'formik'

import {AuthContext} from '../../utils/authContext';
import {requests} from '../../utils/requests';


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
