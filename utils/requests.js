import AsyncStorage from "@react-native-community/async-storage";
import Services from '../config/services.json';

export const requests = {

    login: async(username, password) => {
        return fetch(Services.baseUrl + Services.auth.loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                'username': username,
                'password': password
            }),
            redirect: 'follow'
        })
        .then((resp) => {
            if (resp.ok) {
               return resp.json();
            }
        })
        .then((respJson) => {
            if (typeof respJson == 'object') {
                return respJson.refreshToken;
            } else {
                throw new Error('Invalid username or password');
            }
        });
    },

    refreshJwt: async(masterCred) => {
        return AsyncStorage.getItem('refreshToken').then(refreshToken => {

            /* Check if user has a refresh token */
            if (refreshToken == null) {
                console.error('No Refresh Token');
                throw new Error('User does not have a refreshToken');
            }

            /* Make request to get new jwt */
            return fetch(Services.baseUrl + Services.auth.refreshUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    'refreshToken': refreshToken,
                    'masterCred': masterCred
                }),
                redirect: 'follow'
            })
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('Invalid Master Credential')
                }
            })
            .then((respJson) => {
                if (typeof respJson == 'object') {
                   
                    return respJson.jwt;
                } else {
                    throw new Error('Invalid Master Credential');
                }
            });
        });
    },

    getCredentials: async(jwt) => {
        return fetch(Services.baseUrl + Services.cred.getUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + jwt
            },
            redirect: 'follow'
        })
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error('Could not get credentials')
            }
        })
        .then((respJson) => {
            if (typeof respJson == 'object') {
                return respJson;
            } else {
                throw new Error('Could not get credentials');
            }
        });
    }


}