import {StyleSheet} from 'react-native';
import {global, colors} from '../global';


export default StyleSheet.create({

    screen: {
        ...global.screen,
        justifyContent: 'center',
        alignItems: 'stretch',
        fontSize: 50
    },
    titleContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        ...global.text,
        fontSize: 40,
    },
    subTitle: {
        ...global.text,
    },
    form: {
        flex: 2,
        justifyContent: 'space-around'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    input: {
        ...global.textInput,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },  
    loginBtn: {
        ...global.btn,
        width: 160,
        backgroundColor: colors.accent
    },
    signUpBtn: {
        ...global.btn,
        width: 160,
    },  
    btnText: {
        ...global.btnText,
    }
});


