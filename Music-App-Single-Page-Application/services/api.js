export const apiKey = "AIzaSyBHnTaEZh2WdcY0F5z-Eky17cmprrbNT0Q";

let endpoints = {
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
};

export const login = `${ endpoints.login }`;
export const register = `${ endpoints.register }`;