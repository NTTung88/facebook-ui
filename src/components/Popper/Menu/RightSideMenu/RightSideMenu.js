import classNames from 'classnames/bind';

import styles from './RightSideMenu.module.scss';

const cx = classNames.bind(styles);
function RightSideMenu() {
    return (
        <div className={cx('right-content')}>
            {/* search */}
            <p>Tạo</p>

            <button className={cx('btn-action')}>
                <img className={cx('icon')} src="" alt="" />
                <span className={cx('title')}>Title</span>
            </button>
        </div>
    );
}

export default RightSideMenu;
