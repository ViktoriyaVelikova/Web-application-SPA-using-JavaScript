import { html } from '../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js'

const registerTemplate = (onRegisterinSubmit) => html `
<section id="registerPage">
<form @submit=${onRegisterinSubmit}>
    <fieldset>
        <legend>Register</legend>

        <label for="email" class="vhide">Email</label>
        <input id="email" class="email" name="email" type="text" placeholder="Email">

        <label for="password" class="vhide">Password</label>
        <input id="password" class="password" name="password" type="password" placeholder="Password">

        <label for="conf-pass" class="vhide">Confirm Password:</label>
        <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

        <button type="submit" class="register">Register</button>

        <p class="field">
            <span>If you already have profile click <a href="/login">here</a></span>
        </p>
    </fieldset>
</form>
</section>`;

export function renderRegister(ctx) {
    const onRegisterinSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');
        let passwordConfirm = formData.get('conf-pass');

        authService.register(email, password)
            .then(() => {
                ctx.page.redirect('/');
            });
    };

    ctx.render(registerTemplate(onRegisterinSubmit));
};