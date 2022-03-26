import { html } from "https://unpkg.com/lit-html?module";

export default ({ navigationHandler }) => html `<header @click=${navigationHandler}>
    <nav>
      <img src="./images/headphones.png" />
      <a href="/">Home</a>
      <ul>
        <!--All user-->
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/search">Search</a></li>
        <!--Only guest-->
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <!--Only user-->
        <li><a href="/create">Create Album</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  </header>`;