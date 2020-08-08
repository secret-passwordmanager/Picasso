import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SECRET</Text>
      {/*<StatusBar style="auto" />*/}
      <View style={styles.login_field}>
        <TextInput 
          style={styles.input_text} 
          placeholder='Username' 
          placeholderTextColor='#1e1e1e'/>
      </View>
      <View style={styles.login_field}>
        <TextInput 
          style={styles.input_text}
          secureTextEntry={true} 
          placeholder='Password' 
          placeholderTextColor='#1e1e1e'/>
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
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e1e1e'
  },
  header:{
    fontWeight:'bold',
    fontSize: 50,
    color:'#2663ad',
    //color:'#828282',
    marginBottom:40
  },
  login_field:{
    justifyContent: 'center',
    backgroundColor:'#5e5e5e',
    borderRadius: 22,
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
    backgroundColor:'#2663ad',
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
