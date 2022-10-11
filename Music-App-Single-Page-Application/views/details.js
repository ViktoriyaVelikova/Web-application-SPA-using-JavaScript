import { html } from '../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';

const detailsTemplate = (album, id) => html `
<section id="detailsPage">
  <div class="wrapper">
    <div class="albumCover">
    ${console.log(id)}
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
      <div class="actionBtn">
        <a href="/edit/${id}" class="edit">Edit</a>
        <a href="/delete/${id}" class="remove">Delete</a>
      </div>
    </div>
  </div>
</section>`;

export async function renderDetails(ctx) {
    await albumService.getOne(ctx.params.id)
        .then(album => {
            ctx.render(detailsTemplate(album, ctx.params.id));
        })

};