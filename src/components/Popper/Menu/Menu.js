/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import Image from '~/components/Image';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('menu')}>
            <div className={cx('header-menu')}>
                <p>Menu</p>
            </div>

            <div className={cx('left-content')}>
                {/* search */}

                <input className={cx('search')} placeholder="Tìm kiếm trên Facebook" spellCheck={false} />

                <a className={cx('label')}>Xã hội</a>

                <button className={cx('btn-action')}>
                    <Image
                        className={cx('icon-image')}
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png"
                        alt="event"
                    />

                    <span className={cx('title')}>Sự kiện</span>
                    <span className={cx('content')}>
                        Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây
                    </span>
                </button>

                <button className={cx('btn-action')}>
                    <Image
                        className={cx('icon-image')}
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png"
                        alt="event"
                    />

                    <span className={cx('title')}>Sự kiện</span>
                    <span className={cx('content')}>
                        Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây
                    </span>
                </button>

                <button className={cx('btn-action')}>
                    <Image
                        className={cx('icon-image')}
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png"
                        alt="event"
                    />

                    <span className={cx('title')}>Sự kiện</span>
                    <span className={cx('content')}>
                        Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây
                    </span>
                </button>

                <button className={cx('btn-action')}>
                    <Image
                        className={cx('icon-image')}
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png"
                        alt="event"
                    />

                    <span className={cx('title')}>Sự kiện</span>
                    <span className={cx('content')}>
                        Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây
                    </span>
                </button>

                <button className={cx('btn-action')}>
                    <Image
                        className={cx('icon-image')}
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png"
                        alt="event"
                    />

                    <span className={cx('title')}>Sự kiện</span>
                    <span className={cx('content')}>
                        Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây
                    </span>
                </button>
                <button className={cx('btn-action')}>
                    <Image
                        className={cx('icon-image')}
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png"
                        alt="event"
                    />

                    <span className={cx('title')}>Sự kiện</span>
                    <span className={cx('content')}>
                        Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây
                    </span>
                </button>
            </div>
            <div className={cx('right-content')}>
                {/* search */}
                <p>Tạo</p>
            </div>
        </div>
    );
}

export default Menu;
