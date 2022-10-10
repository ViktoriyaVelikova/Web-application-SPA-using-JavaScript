import * as authService from '../services/authService.js'

export const renderLogout = (ctx) => {
    authService.logout();
    ctx.page.redirect('/');
};