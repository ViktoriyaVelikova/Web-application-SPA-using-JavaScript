import * as api from './api.js';
import * as request from './requester.js';


export async function getAll() {
    const allAlbums = await request.get(api.urlBuilder('albums'));
    console.log(allAlbums);
    let res = Object.keys(allAlbums).map(key => ({ _id: key, ...allAlbums[key] }))
    console.log(res);

    return res
}

export const createAlbum = (musicData) => {
    let res = request.post(api.urlBuilder('albums'), musicData);
    return res;
}