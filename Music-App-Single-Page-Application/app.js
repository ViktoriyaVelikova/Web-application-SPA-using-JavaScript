 import { html, render } from 'https://unpkg.com/lit-html?module';

 import layout from './views/layout.js';
 import home from './views/home.js';
 import login from './views/login.js';
 import register from './views/register.js';
 import create from './views/create.js';
 import edit from './views/edit.js';
 import details from './views/details.js';
 import search from './views/search.js';
 import catalog from './views/catalog.js';

 const routes = [{
     path: '/',
     template: home
 }, {
     path: '/login',
     template: login
 }, {
     path: '/register',
     template: register
 }, {
     path: '/create',
     template: create
 }, {
     path: '/edit',
     template: edit
 }, {
     path: '/details',
     template: details
 }, {
     path: '/search',
     template: search
 }, {
     path: '/catalog',
     template: catalog
 }];

 const router = (path) => {
     let route = routes.find(x => x.path == path);

     render(layout(route.template()), document.getElementById('box'));
 }

 router(location.pathname);