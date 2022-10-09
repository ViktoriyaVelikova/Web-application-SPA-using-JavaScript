import { html } from '../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js'

const loginTemplate = (onLoginSubmit) => html `
<section id="loginPage">
<form @submit=${onLoginSubmit}>
    <fieldset>
        <legend>Login</legend>

        <label for="email" class="vhide">Email</label>
        <input id="email" class="email" name="email" type="text" placeholder="Email">

        <label for="password" class="vhide">Password</label>
        <input id="password" class="password" name="password" type="password" placeholder="Password">

        <button type="submit" class="login">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </fieldset>
</form>
</section>`;

export function renderLogin(ctx) {
    const onLoginSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then(() => {
                ctx.page.redirect('/');
            });
    };

    ctx.render(loginTemplate(onLoginSubmit));
};