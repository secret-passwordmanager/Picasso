import React from 'react';
import { Text, View } from 'react-native';
import global_styles from '../../styles/global_styles'

const styles = global_styles.css_styles;

export default function settings_screen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.login_text}>Settings Screen</Text>
        </View>
    );
};