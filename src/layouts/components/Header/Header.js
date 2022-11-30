import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import images from '~/assets/images';
import Image from '~/components/Image';
import {
    GameActiveIcon,
    GameIcon,
    GroupActiveIcon,
    GroupIcon,
    HomeActiveIcon,
    HomeIcon,
    MarketplaceActiveIcon,
    MarketplaceIcon,
    MenuIcon,
    MessageIcon,
    NotificationIcon,
    WatchActiveIcon,
    WatchIcon,
} from '~/components/Icons';
import config from '~/config';

import styles from './Header.module.scss';
import MenuNav, { MenuNavItem } from './MenuNav';
import Menu from '~/components/Popper/Menu';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Header() {
    const [show, setShow] = useState(false);
    const handleMenu = () => {
        setShow(!show);
    };
    return (
        <header className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('section1')}>
                    {/* logo  */}
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Facebook" />
                    </Link>

                    {/* <Search /> */}
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm trên Facebook" spellCheck={false} />
                    </div>
                </div>

                <div className={cx('section2')}>
                    <MenuNav>
                        <MenuNavItem
                            title="Home"
                            to={config.routes.home}
                            icon={<HomeIcon />}
                            activeIcon={<HomeActiveIcon />}
                        />
                        <MenuNavItem
                            title="Watch"
                            to={config.routes.watch}
                            icon={<WatchIcon />}
                            activeIcon={<WatchActiveIcon />}
                        />
                        <MenuNavItem
                            title="Marketplace"
                            to={config.routes.marketplace}
                            icon={<MarketplaceIcon />}
                            activeIcon={<MarketplaceActiveIcon />}
                        />
                        <MenuNavItem
                            title="Group"
                            to={config.routes.group}
                            icon={<GroupIcon />}
                            activeIcon={<GroupActiveIcon />}
                        />
                        <MenuNavItem
                            title="Game"
                            to={config.routes.game}
                            icon={<GameIcon />}
                            activeIcon={<GameActiveIcon />}
                        />
                    </MenuNav>
                </div>

                <div className={cx('section3')}>
                    <Tippy className={cx('action-tippy')} delay={(0, 200)} content="Menu" placement="bottom">
                        <button className={cx('s3-action-btn')} onClick={handleMenu}>
                            <span className={cx('icon-btn')}>
                                <MenuIcon />
                            </span>
                            {show && <Menu />}
                        </button>
                    </Tippy>

                    <Tippy className={cx('action-tippy')} delay={(0, 200)} content="Messages" placement="bottom">
                        <button className={cx('s3-action-btn')}>
                            <span className={cx('icon-btn')}>
                                <MessageIcon />
                            </span>
                        </button>
                    </Tippy>
                    <Tippy className={cx('action-tippy')} delay={(0, 200)} content="Notification" placement="bottom">
                        <button className={cx('s3-action-btn')}>
                            <span className={cx('icon-btn')}>
                                <NotificationIcon />
                            </span>
                        </button>
                    </Tippy>
                    <Image
                        className={cx('icon-btn')}
                        src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/264828375_3019175918334968_1227467617213764545_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=7a87EUIEp0YAX-IwGoC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAbF9k8ErtZfsCQqyf-09nH5V2QoNFsANOAWK6TOFu3Eg&oe=636F2478"
                        alt="NVA"
                    />
                </div>
            </div>
        </header>
    );
}
export default Header;
