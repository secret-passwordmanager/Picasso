import React, {useState, useEffect, useContext} from 'react';
import global_styles from '../styles/global_styles';
import { Text, View } from 'react-native';
const styles = global_styles.css_styles;
export default function Credential(props) {

  //  console.log(credential.domain);

    const [domain, setDomain] = useState(props.credential.domain);
    const [hint, setHint] = useState(props.credential.hint);
    const [id, setId] = useState(props.credential.id);
    const [type, setType] = useState(props.credential.type);

    return(
        <View>
            <Text style={styles.login_text}>{domain}</Text>
            <Text style={styles.login_text}>{hint}</Text>
            <Text style={styles.login_text}>{id}</Text>
            <Text style={styles.login_text}>{type}</Text>
        </View>


    );
}