import {StyleSheet} from 'react-native';

/* Export an object containing the 3 main colors of the app,
 * as well as all of the CSS styles in the form of a native
 * react stylesheet object
 */
const main_color= '#2663ad';
const background_color= '#1e1e1e'; 
const alt_color= '#5e5e5e';

export default {
    main_color: main_color,
    alt_color: alt_color,
    background_color: background_color, 
    css_styles: StyleSheet.create({
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
    })
};
