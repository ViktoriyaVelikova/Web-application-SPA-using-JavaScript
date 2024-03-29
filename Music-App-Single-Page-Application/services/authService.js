import * as api from './api.js';
import * as request from './requester.js';

const USER_KEY = 'user';

export const login = (email, password) => {
    return request.post(api.login, { email, password })
        .then(user => {
            saveUser(user);
            return user
        });
};

export const logout = () => {
    localStorage.setItem(USER_KEY, '');
}
export const register = (email, password) => {
    return request.post(api.register, { email, password })
        .then(user => {
            saveUser(user);
            return user
        });
};

function saveUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUser() {

    try {
        let user = localStorage.getItem(USER_KEY)

        if (user) {
            return JSON.parse(user);
        }
    } catch (error) {
        return undefined;
    }
}

export function getData() {
    try {
        let data = JSON.parse(localStorage.getItem(USER_KEY));

        return {
            isAuthenticated: Boolean(data.idToken),
            email: data.email,
            idToken: data.idToken
        };
    } catch (error) {
        return {
            isAuthenticated: false,
            email: ''
        };
    }
}