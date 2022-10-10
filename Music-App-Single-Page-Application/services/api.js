import { getData } from './authService.js';
export const apiKey = "AIzaSyBHnTaEZh2WdcY0F5z-Eky17cmprrbNT0Q";

let endpoints = {
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    baseUrl: `https://musicappspa-default-rtdb.firebaseio.com`,
};

export const login = `${ endpoints.login }`;
export const register = `${ endpoints.register }`;

export const urlBuilder = (resource) => {
    return `${endpoints.baseUrl}/${resource}.json?auth=${getData().idToken}`
}