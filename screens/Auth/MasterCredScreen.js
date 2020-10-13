import React, {useState} from 'react'
import {Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import DropdownAlert from 'react-native-dropdownalert';
import {AuthContext} from '../../utils/authContext';
import {requests} from '../../utils/requests';

import style from '../../styles/screens/masterCredSceen';

export default function MasterCredScreen(){
    
    const { state, dispatch } = React.useContext(AuthContext);
    const [dropDown, setDropDown] = useState('');

    return (
        <KeyboardAvoidingView style={style.screen}behavior='padding'>
            <Text style={style.title}>
                Please Enter Your Master Credential
            </Text>
            <View style={style.form}
                >
          
                <Formik
                    initialValues={{master_credential:null}}
                    onSubmit={(values) => {
                        requests.refreshJwt(values.master_credential)
                        .then((jwtTrusted) => {
                            dispatch({type: 'SET_JWT', jwt: jwtTrusted});
                        })
                        .catch((err) => {
                            dropDown.alertWithType('error', 'Error', err.message)
                                
                        });
                    }}
                >
                    {(props) => (
                        <View>
                            
                    
                            <TextInput style={style.textInput}
                                placeholder=''
                                onChangeText={props.handleChange('master_credential')}
                                value={props.values.master_credential}
                                secureTextEntry={true} 
                            />
                            <TouchableOpacity style={style.btn}
                                onPress={() => {
                                    props.handleSubmit()
                                }}>
                                <Text style={style.btnText}>Enter</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
            
            <DropdownAlert ref={ref => setDropDown(ref)} />
        </KeyboardAvoidingView>
    )
}
