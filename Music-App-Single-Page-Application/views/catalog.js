import { html } from '../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';

const userDetailsBtn = html `
  <div class="btn-group">
      <a href="/details" id="details">Details</a>
    </div>`;

const loginForDeails = html `
  <p style="color:wheat"><a href="/login" style="color:Tomato">Login</a> to view details.</p>`;

const albumTemplate = (album) => html `
<div class="card-box">
    <img src="${album.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">${album.name}</p>
            <p class="artist">${album.artist}</p>
            <p class="genre">${album.genre}</p>
            <p class="price">${album.price}</p>
            <p class="date">${album.releaseDate}</p>
        </div>
        <div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>
    </div>
</div>`

const catalogTemplate = (allAlbums) => html ` 
<section id="catalogPage">
<h1>All Albums</h1>

 ${allAlbums.length ? allAlbums.map(albumTemplate) : html`<p>No Albums in Catalog!</p>`}

</section>`;

export async function rendeCatalog (ctx)  {
    let allAlbums = await albumService.getAll();

    ctx.render(catalogTemplate(allAlbums));
}