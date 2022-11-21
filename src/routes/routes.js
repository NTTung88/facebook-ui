import config from '~/config';
//Layouts
import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/layouts/components/Search';
import Watch from '~/pages/Watch';
import Marketplace from '~/pages/Marketplace';
import Group from '~/pages/Group';
import Game from '~/pages/Game';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.watch, component: Watch },
    { path: config.routes.marketplace, component: Marketplace },
    { path: config.routes.group, component: Group },
    { path: config.routes.game, component: Game },

    //test
    { path: config.routes.following, component: Following },
    //profile
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
