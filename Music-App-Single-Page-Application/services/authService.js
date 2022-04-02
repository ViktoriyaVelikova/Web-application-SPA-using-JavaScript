import request from "./request.js";

export const apiKey = "AIzaSyBHnTaEZh2WdcY0F5z-Eky17cmprrbNT0Q";
export const baseUrl = "https://musicappspa-default-rtdb.firebaseio.com";
let endpoints = {
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
};

export default {
    async login(email, password) {
        let data = await request.post(endpoints.login, {
            email,
            password,
        });

        localStorage.setItem("auth", JSON.stringify(data));
        return data;
    },
};