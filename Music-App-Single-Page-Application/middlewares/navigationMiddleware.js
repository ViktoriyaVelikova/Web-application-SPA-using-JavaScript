import { html, render } from "https://unpkg.com/lit-html?module";

const navElement = document.getElementById('box');

import { renderNavigation } from '../views/header.js'

export function navigationMiddleware(ctx, next) {


    render(renderNavigation(ctx), navElement)

    next();
}