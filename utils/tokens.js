import {get_value} from './async_storage.js'
/*
 * Check if jwtTrusted token is expired
 *
 * Return: true if the jwtTrusted token is expired, false
 * if it isn't expired
 */
export const jwt_trusted_expired = () => {
    // get the timestamp of the jwtTrusted token
    get_value('jwt_trusted_timestamp').then( timestamp => {
        //check if jwtTrusted token is still valid
        var token_lifetime = 10; //numerical value in seconds
        var seconds_elapsed =  Math.ceil((Date.now() - timestamp) / 1000)
        if(seconds_elapsed > token_lifetime)
            return true
        return false
    });
    
}