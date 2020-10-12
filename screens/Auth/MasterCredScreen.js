import React, {useState} from 'react'
import {Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import DropdownAlert from 'react-native-dropdownalert';
import {AuthContext} from '../../utils/authContext';
import {requests} from '../../utils/requests';

import style from '../../styles/screens/masterCredSceen';

export default function MasterCredScreen(){
    
    const { state, dispatch } = React.useContext(AuthContext);
    const [dropDown, setDropDown] = useState('');

    return (
        <View style={style.container}>
            <Formik style={style.test}
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
                        <View>
                            <Text>Please Enter Your Master Credential</Text>
                        </View>
                        <TextInput
                            placeholder=''
                            onChangeText={props.handleChange('master_credential')}
                            value={props.values.master_credential}
                            secureTextEntry={true} 
                        />
                        <TouchableOpacity
                            onPress={() => {
                                props.handleSubmit()
                            }}>
                            <Text>Enter</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            <DropdownAlert ref={ref => setDropDown(ref)} />
        </View>
    )
}
