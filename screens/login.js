import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const main_color = '#2663ad';
const background_color = '#1e1e1e'; 
const alt_color = '#5e5e5e'; 

const login_screen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>SECRET</Text>
            {/*<StatusBar style="auto" />*/}
            <View style={styles.login_field}>
                <TextInput 
                style={styles.input_text} 
                placeholder='Username' 
                placeholderTextColor={background_color}/>
            </View>
            <View style={styles.login_field}>
                <TextInput 
                style={styles.input_text}
                secureTextEntry={true} 
                placeholder='Password' 
                placeholderTextColor={background_color}/>
            </View>

            {/*<TouchableOpacity >
                <Text style={styles.login_text}>Forgot Password?</Text>
            </TouchableOpacity>*/}

            <TouchableOpacity style={styles.login_btn}>
                <Text style={styles.login_text}>LOGIN</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text style={styles.login_text}>Create an account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: background_color
  },
  header:{
    fontWeight:'bold',
    fontSize: 50,
    color: main_color,
    marginBottom:40
  },
  login_field:{
    justifyContent: 'center',
    backgroundColor: alt_color,
    borderRadius: 25,
    width: '80%',
    height: 50,
    marginBottom: 20,
    padding: 15
  },
  input_text:{
    height:50,
  },
  login_btn:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: main_color,
    borderRadius: 22,
    width: '80%',
    height: 50,
    marginTop: 30,
    marginBottom: 15,
    padding: 15
  },
  login_text:{
    fontSize: 15,
    color: 'white'
  }
});

export default login_screen;