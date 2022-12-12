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
import { useEffect, useRef, useState } from 'react';
import Message from '~/components/Popper/Message';
import Notification from '~/components/Popper/Notification';
const cx = classNames.bind(styles);

function Header() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(false);
    const [notification, setNotification] = useState(false);

    const refDrop = useRef(null);
    const refDropMess = useRef(null);
    const refDropNotification = useRef(null);

    useEffect(() => {
        function checkOutSide(e) {
            if (refDrop.current && !refDrop.current.contains(e.target)) {
                setShow(false);
            }
        }
        document.addEventListener('click', checkOutSide);
        return () => {
            document.removeEventListener('click', checkOutSide);
        };
    }, []);

    useEffect(() => {
        function checkOutSide(e) {
            if (refDropMess.current && !refDropMess.current.contains(e.target)) {
                setMessage(false);
            }
        }
        document.addEventListener('click', checkOutSide);
        return () => {
            document.removeEventListener('click', checkOutSide);
        };
    }, []);

    useEffect(() => {
        function checkOutSide(e) {
            if (refDropNotification.current && !refDropNotification.current.contains(e.target)) {
                setNotification(false);
            }
        }
        document.addEventListener('click', checkOutSide);
        return () => {
            document.removeEventListener('click', checkOutSide);
        };
    }, []);

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
                    <div className={cx('action-tippy')} delay={(0, 200)} content="Menu" placement="bottom">
                        <div className={cx('s3-action-btn')} onClick={() => setShow(!show)} ref={refDrop}>
                            <span className={cx('icon-btn')}>
                                <MenuIcon />
                            </span>
                            {show && <Menu />}
                        </div>
                    </div>

                    <Tippy className={cx('action-tippy')} delay={(0, 200)} content="Messages" placement="bottom">
                        <div className={cx('s3-action-btn')} onClick={() => setMessage(!message)} ref={refDropMess}>
                            <span className={cx('icon-btn')}>
                                <MessageIcon />
                            </span>
                            {message && <Message />}
                        </div>
                    </Tippy>

                    <Tippy className={cx('action-tippy')} delay={(0, 200)} content="Notification" placement="bottom">
                        <div
                            className={cx('s3-action-btn')}
                            onClick={() => setNotification(!notification)}
                            ref={refDropNotification}
                        >
                            <span className={cx('icon-btn')}>
                                <NotificationIcon />
                            </span>
                            {notification && <Notification />}
                        </div>
                    </Tippy>
                    <Image
                        className={cx('icon-btn')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </div>
            </div>
        </header>
    );
}
export default Header;
