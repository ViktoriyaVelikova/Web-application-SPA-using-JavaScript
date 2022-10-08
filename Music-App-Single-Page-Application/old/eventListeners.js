import authService from "./services/authService.js";
import musicService from "./services/musicService.js";
import router from "./router.js";

export const onLoginSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    authService.login(email, password)
    router('/');
}
export const onRegisterinSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    authService.register(email, password)
    router('/');
}

export const onCreateSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    let name = formData.get('name');
    let imgUrl = formData.get('imgUrl');
    let price = formData.get('price');
    let releaseDate = formData.get('releaseDate');
    let artist = formData.get('artist');
    let genre = formData.get('genre');
    let description = formData.get('description');

    musicService.create({
        name,
        imgUrl,
        price,
        releaseDate,
        artist,
        genre,
        description
    }).then(router('/'));
}