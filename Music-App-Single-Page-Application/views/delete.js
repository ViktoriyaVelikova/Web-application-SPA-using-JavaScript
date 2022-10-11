import * as albumService from '../services/albumService.js'

export const renderDelete = (ctx) => {
    albumService.deleteAlbum(ctx.params.id);
    ctx.page.redirect('/catalog');
};