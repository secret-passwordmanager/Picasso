import {StyleSheet} from 'react-native';


export const colors = {
    accent: '#5e35b1',
    primary: '',
    bg: 'black',
    contentBg: '#121212',
    contentBg2: '#263238'
}

export const global = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        backgroundColor: colors.bg
    },
    btn: {
        backgroundColor: colors.contentBg,
      
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        justifyContent: 'center',

    },
    textInput: {
        color: 'white',
        fontSize: 20,
        borderWidth: 0,
        borderBottomColor: 'white',
        borderBottomWidth: .3
    },
    navBar: {

    },
    text: {
        color: 'white',
    },
});