import React, {useState} from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
export default function Credential(props) {

  //  console.log(credential.domain);

    const [domain, setDomain] = useState(props.credential.domain);
    const [hint, setHint] = useState(props.credential.hint);
    const [id, setId] = useState(props.credential.id);
    const [type, setType] = useState(typeToText(props.credential.type));

    function typeToText(numType) {
        switch (numType) {
            case 0:
                return 'Password';
            case 1:
                return 'Credit Card';
            case 2:
                return 'Username';
            case 3:
                return 'Email';
            default:
                return 'Error';
        }
    };

    return(
        <View style={styles.container}>
            <Text style ={styles.props}>{domain}</Text>
            <Text style={styles.props}>{hint}</Text>
            <Text style={styles.props}>{type}</Text>
            <View style={styles.btnContainer}>
                <Button title="Info"/>
            </View>
        
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        borderRadius: 15,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#102027',
        
    },
    btnContainer: {

    },
    props : {
        fontSize: 24,
        color: 'white',
    }

});