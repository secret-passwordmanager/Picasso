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
                initialValues={{Hint:null, Type:null, Domain:null, Value:null, MasterCred:null}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(props) => (
                    <View style={styles.centered}>
                        <View>
                            <Text style={styles.header2}>New Credential</Text>
                        </View>
                        <TextInput
                            placeholder='Name'
                            onChangeText={props.handleChange('Hint')}
                            value={props.values.Hint}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Type'
                            onChangeText={props.handleChange('Type')}
                            value={props.values.Type}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Domain'
                            onChangeText={props.handleChange('Domain')}
                            value={props.values.Domain}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Value'
                            onChangeText={props.handleChange('Value')}
                            value={props.values.Value}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Master Credential'
                            onChangeText={props.handleChange('MasterCred')}
                            value={props.values.MasterCred}
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.login_btn}
                            onPress={() => {
                                props.handleSubmit()
                            }}>
                            <Text style={styles.login_text}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    
                )}
            </Formik>
        </View>
    )
}