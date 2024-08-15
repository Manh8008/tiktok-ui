import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRouters = [
    {
        path: '/',
        component: Home,
    },

    {
        path: '/following',
        component: Following,
    },

    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

const privateRouters = [];

export { publicRouters, privateRouters };
