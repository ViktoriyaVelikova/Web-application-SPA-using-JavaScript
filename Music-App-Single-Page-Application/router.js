import { html, render } from "https://unpkg.com/lit-html?module";

import layout from "./views/layout.js";
import home from "./views/home.js";
import login from "./views/login.js";
import register from "./views/register.js";
import create from "./views/create.js";
import edit from "./views/edit.js";
import details from "./views/details.js";
import search from "./views/search.js";
import catalog from "./views/catalog.js";
import notFound from "./views/not-found.js";


const routes = [{
        path: "/",
        template: home,
    },
    {
        path: "/login",
        template: login,
    },
    {
        path: "/register",
        template: register,
    },
    {
        path: "/create",
        template: create,
    },
    {
        path: "/edit",
        template: edit,
    },
    {
        path: "/details",
        template: details,
    },
    {
        path: "/search",
        template: search,
    },
    {
        path: "/catalog",
        template: catalog,
    },
    {
        path: "/not-found",
        template: notFound,
    },
];

function navigationHandler(event) {
    if (event.target.tagName == "A") {
        event.preventDefault();

        let url = new URL(event.target.href);

        router(url.pathname);
    }
}

const router = (path) => {
    history.pushState("", {}, path);

    let route = routes.find((x) => x.path == path) || routes.find((x) => x.path == "/not-found");

    render(layout(route.template(), { navigationHandler }), document.getElementById("main-content"));
};

export default router;