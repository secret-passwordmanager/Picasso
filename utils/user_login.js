import React, {useState} from 'react';

/*
 * Log the user in and store the refresh token from the response
 *
 * @username: a string representing the user's username
 * @password: a string representing the user's password
 * 
 * Return:
 */
export const login = (username, password, navigation, set_err_msg) => {
    var request_params = {
    method: 'POST',
        headers: {
            //'Accept': "application/json, text/plain, */*",
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({"username": username,"password":password}),
        redirect: 'follow'
    };

    //log user in
    fetch("http://73.66.169.37:8080/auth/login", request_params)
        .then(response =>{
            if(response.ok){
                //clear error message
                set_err_msg('');
                return response.json();
            }else{
                set_err_msg('username or password is incorrect');
                throw 'username or password is incorrect';
            }
        })
        .then(response =>{
            //store refresh token and time stamp asynchronously  
            store_value('refresh_token', response.refreshToken);
            store_value('refresh_token_timestamp', Date.now().toString());
            navigation.navigate('home');
        })
        .catch(error => console.log('Error:', error));
}