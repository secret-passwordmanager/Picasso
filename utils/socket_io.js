
import config from '../config/services.json';
import Publisher from './publisher';
import {get_value} from './async_storage';
import io from 'socket.io-client';



export default class Socket extends Publisher {

    #socket = null; 

    constructor() {

        /* Singleton Design Pattern */
        if (Socket._instance) {
            return Socket._instance;
        }
        super([
            'connectionSuccess',
            'connectionFail',
            'disconnectionSuccess',
            'disconnectionFail'
        ]);
        Socket._instance = this;
    }

    connect() {
        if (this.#socket != null) {
            return new Error('Socket is not null. May be connected already');
        }

        get_value('jwt_trusted')
            .then((jwtTrusted) => {
                if (jwtTrusted == undefined) {
                    return new Error('no jwtTrusted token found');
                }
                
                this.#socket = io.connect(config.baseUrl + config.swap.trustedUrl, {
                    query: {
                        'jwt': jwtTrusted
                    }
                });
                this.#socket.on('connection', (error) => {
                    console.log('connected')
                });
                 this.#socket.on('error', (error) => {
                    console.log('problem')
                });
                super.notify('connectionSuccess');
            })
            .catch((err) => {
                console.log(err.message);
                super.notify('connectionFail');
            });
    }

}