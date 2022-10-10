import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
import { renderMiddleware } from "./middlewares/renderMiddleware.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

import page from "../node_modules/page/page.mjs";

import { renderLogin } from './views/login.js'
import { renderRegister } from './views/register.js'
import { renderLogout } from './views/logout.js'
import { renderHome } from './views/home.js'
import { rendeCatalog } from './views/catalog.js'
import { renderCreate } from './views/create.js'

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page("/", renderHome);
page("/login", renderLogin);
page("/register", renderRegister);
page("/logout", renderLogout);
page("/catalog", rendeCatalog);

page("/create", renderCreate);
// page("/details/:id", details);
// page("/edit/:id", edit);
// page("/search", search);
// page("/not-found", notFound);

page.start();