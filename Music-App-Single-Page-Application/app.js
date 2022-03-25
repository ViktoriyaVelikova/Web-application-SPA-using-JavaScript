 import { html, render } from 'https://unpkg.com/lit-html?module';

 import layout from './views/layout.js';
 import home from './views/home.js';

 render(layout(home()), document.getElementById('box'));