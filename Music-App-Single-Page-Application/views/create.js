import { html } from '../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';

const createTemplate = (onCreateSubmit) => html ` <section class="createPage">
<form @submit=${onCreateSubmit}>
    <fieldset>
        <legend>Add Album</legend>

        <div class="container">
            <label for="name" class="vhide">Album name</label>
            <input id="name" name="name" class="name" type="text" placeholder="Album name">

            <label for="imgUrl" class="vhide">Image Url</label>
            <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

            <label for="price" class="vhide">Price</label>
            <input id="price" name="price" class="price" type="text" placeholder="Price">

            <label for="releaseDate" class="vhide">Release date</label>
            <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

            <label for="artist" class="vhide">Artist</label>
            <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

            <label for="genre" class="vhide">Genre</label>
            <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

            <label for="description" class="vhide">Description</label>
            <textarea name="description" class="description" placeholder="Description"></textarea>

            <button class="add-album" type="submit">Add New Album</button>
        </div>
    </fieldset>
</form>
</section>`;

export function renderCreate(ctx) {
    const onCreateSubmit = (e) => {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.currentTarget));

        if (Object.keys(formData).some(key => !formData[key])) {
            alert('All fields are required.')
            return
        }

        albumService.createAlbum(formData, ctx.user.email)
            .then(() => {
                ctx.page.redirect('/');
            });
    };

    ctx.render(createTemplate(onCreateSubmit));
};