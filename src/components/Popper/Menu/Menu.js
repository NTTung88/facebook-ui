/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

import LeftSideMenu from './LeftSideMenu/LeftSideMenu';
import RightSideMenu from './RightSideMenu/RightSideMenu';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <aside className={cx('menu')} onMouseLeave={false}>
            <div className={cx('header-menu')}>
                <p>Menu</p>
            </div>

            <LeftSideMenu />
            <RightSideMenu />
        </aside>
    );
}

export default Menu;
