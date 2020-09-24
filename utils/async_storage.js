import AsyncStorage from '@react-native-community/async-storage';

/*
 * Get a stored value from asynchronous storage
 * 
 * @key: a string representing the name/key of the stored value
 * 
 * Return: a Promise object
 */
export const get_value = async(key) =>{
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        console.log(e);
    }
}

/*
 * Store a string value with asynchronous storage
 * 
 * @key: a string representing the name/key of the stored value
 * @value: a string representing the item to be stored
 * 
 * Return: a Promise object
 */
export const store_value = async(key, value) =>{
    try {
        return value = await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e);
    }
}