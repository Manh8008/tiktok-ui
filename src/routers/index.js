import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
const publicRouters = [
    {
        path: routesConfig.home,
        component: Home,
    },

    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },

    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },

    {
        path: routesConfig.upload,
        component: Search,
        layout: null,
    },
];

const privateRouters = [];

export { publicRouters, privateRouters };
