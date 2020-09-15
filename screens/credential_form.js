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
                initialValues={{name:'', type:'', domain:'', value:''}}
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
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Type'
                            onChangeText={props.handleChange('type')}
                            value={props.values.type}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Domain'
                            onChangeText={props.handleChange('domain')}
                            value={props.values.domain}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Value'
                            onChangeText={props.handleChange('value')}
                            value={props.values.value}
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