import { html, nothing } from '../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';

const detailsTemplate = (album, id, creator) => html `
<section id="detailsPage">
  <div class="wrapper">
    <div class="albumCover">
      <img src="${album.imgUrl}" />
    </div>
    <div class="albumInfo">
      <div class="albumText">
        <h1>Name: ${album.name}</h1>
        <h3>Artist: ${album.artist}</h3>
        <h4>Genre: ${album.genre}</h4>
        <h4>Price: ${album.price}</h4>
        <h4>Date: ${album.releaseDate}</h4>
        <p>
        ${album.description}
        </p>
      </div>

      <!-- Only for registered user and creator of the album-->
      ${creator 
        ? html `<div class="actionBtn">
        <a href="/edit/${id}" class="edit">Edit</a>
        <a href="/delete/${id}" class="remove">Delete</a>
      </div>`
      : nothing}
      
    </div>
  </div>
</section>`;

export const renderDetails = (ctx) => {
    albumService.getOne(ctx.params.id)
        .then(album => {
          let creator = ctx.user.email == album.email;
            ctx.render(detailsTemplate(album, ctx.params.id, creator));
        })
}