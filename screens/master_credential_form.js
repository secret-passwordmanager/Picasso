import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native'
import  global_styles  from '../styles/global_styles'
import { Formik } from 'formik'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = global_styles.css_styles;
export default function CredentialForm(){
    return (
        <View>
            <Formik
                initialValues={{master_credential:null}}
                onSubmit={(values) => {
                    console.log(values);
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