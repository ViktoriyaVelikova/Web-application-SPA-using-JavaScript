import { render } from "../node_modules/lit-html/lit-html.js";

const navElement = document.getElementById('header-nav');

import { renderNavigation } from '../views/header.js'

export function navigationMiddleware(ctx, next) {


    render(renderNavigation(ctx), navElement)

    next();
}