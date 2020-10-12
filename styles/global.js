import {StyleSheet} from 'react-native';


export const colors = {
    accent: '#5e35b1',
    primary: '',
    bg: '#121212',
    contentBg: '#263238'
}

export const global = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        backgroundColor: colors.bg
    },
    btn: {
        backgroundColor: colors.accent,
      
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
        borderRadius: 10,
    },
    navBar: {

    },
    text: {
        color: 'white',
    },
    shadow: {
        backgroundColor: colors.contentBg,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .25,
        shadowRadius: 3.84,
        elevation: 10,
        zIndex: 5,
        borderRadius: 20,
    }
});