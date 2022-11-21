import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <Tippy delay={(0, 200)} className={cx('action-tippy')} content={title} placement="bottom">
            <button className={cx('action-btn')}>
                <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
                    <span className={cx('icon')}>{icon}</span>
                    <span className={cx('active-icon')}>{activeIcon}</span>
                </NavLink>
            </button>
        </Tippy>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};
export default MenuItem;
