import { html } from '../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';

const loginForDeails = html `
  <p style="color:wheat"><a href="/login" style="color:Tomato">Login</a> to view details.</p>`;

const albumTemplate = (album, user) => html `
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
        ${user ? html `<div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>`
        : loginForDeails}
        
    </div>
</div>`

const catalogTemplate = (allAlbums, user) => html ` 
<section id="catalogPage">
<h1>All Albums</h1>

 ${allAlbums.length ? allAlbums.map(x => albumTemplate(x, user)) : html`<p>No Albums in Catalog!</p>`}

</section>`;

// export async function rendeCatalog (ctx)  {
//     let allAlbums = await albumService.getAll();

//     ctx.render(catalogTemplate(allAlbums));
// }

export const rendeCatalog =(ctx)=>{
    albumService.getAll().then( allAlbums =>{
        ctx.render(catalogTemplate(allAlbums, ctx.user));
    })
}