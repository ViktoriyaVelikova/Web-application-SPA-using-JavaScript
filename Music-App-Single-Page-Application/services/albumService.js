import * as api from './api.js';
import * as request from './requester.js';


export async function getAll() {
    const allAlbums = await request.get(api.urlBuilder('albums'));
    let res = Object.keys(allAlbums).map(key => ({ _id: key, ...allAlbums[key] }))
    return res
}

export const createAlbum = (musicData, email) => {
    let res = request.post(api.urlBuilder('albums'), {...musicData, email });
    return res;
}

export const editAlbum = (id, musicData) => {
    let resource = `albums/${id}`
    let res = request.put(api.urlBuilder(resource), musicData);
    return res;
}

export async function getOne(id) {
    let res = await request.get(api.details(id));
    return res;
}
export const deleteAlbum = (id) => {
    let resource = `albums/${id}`
    let res = request.del(api.urlBuilder(resource));
    return res;
}