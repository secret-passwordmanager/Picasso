import {StyleSheet} from 'react-native';
import {global, colors} from '../global';

export default StyleSheet.create({

    screen: {
        ...global.screen,
        alignItems: 'stretch',
        justifyContent: 'space-around',
    },
    title: {
        ...global.text,

        fontSize: 30,
        alignSelf: 'center',
        textAlign: 'center',
     
    },
    form: {
 
        padding: 40
    },
    textInput: {
        ...global.textInput
    },
    btn: {
        ...global.btn,
        margin: 20,
        backgroundColor: colors.accent
    },
    btnText: {
        ...global.btnText
    }
});