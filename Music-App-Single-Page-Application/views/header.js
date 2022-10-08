import { html } from "https://unpkg.com/lit-html?module";

const guestNavigation = html `
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>`;

const userNavigation = html `
<li><a href="/create">Create Album</a></li>
<li><a href="/logout">Logout</a></li>`;

const navigationTemplate = () => html `
<header >
    <nav>
      <img src="./images/headphones.png" />
      <a href="/">Home</a>
      <ul>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/search">Search</a></li>

      </ul>
    </nav>
  </header>`;

export const renderNavigation = (ctx) => {
    return navigationTemplate();
}