import React, {useState} from 'react'
import { Text, View } from 'react-native'
import global_styles from '../../styles/global_styles'

const styles = global_styles.css_styles;

export default function CredentialsScreen({navigation}){
    const [cred_modal_open, set_cred_modal_open] = useState(false);
    const [master_cred_modal_open, set_master_cred_modal_open] = useState(false);
    return(
        <View style={styles.container}>
            <Text style={styles.login_text}>Credentials</Text>
        </View>  
    );
};
