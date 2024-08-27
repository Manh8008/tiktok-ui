import { HeaderOnly } from '~/Layout';
import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
const publicRouters = [
    {
        path: config.routes.home,
        component: Home,
    },

    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },

    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },

    {
        path: config.routes.upload,
        component: Search,
        layout: null,
    },
];

const privateRouters = [];

export { publicRouters, privateRouters };
