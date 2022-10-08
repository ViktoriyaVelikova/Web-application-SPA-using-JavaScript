import page from "../node_modules/page/page.mjs";

import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";

//  import layout from "./views/layout.js";
import home from "./views/home.js";
import login from "./views/login.js";
import register from "./views/register.js";
import create from "./views/create.js";
import edit from "./views/edit.js";
import details from "./views/details.js";
import search from "./views/search.js";
import catalog from "./views/catalog.js";
import notFound from "./views/not-found.js";

page(navigationMiddleware);

page("/", home);
page("/register", register);
page("/login", login);
//  page('/logout', logoutPage);
//  page('/layout', layout)
page("/create", create);
page("/catalog", catalog);
page("/details/:id", details);
page("/edit/:id", edit);
page("/search", search);
page("/not-found", notFound);

page.start();