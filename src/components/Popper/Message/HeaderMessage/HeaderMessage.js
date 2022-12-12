/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';

import style from './HeaderMessage.module.scss';

const cx = classNames.bind(style);

function HeaderMessage() {
    return (
        <div className={cx('wrapper')}>
            <a className={cx('label')}>Chat</a>

            <div className={cx('btn-icon', 'i1')}>
                <i className={cx('setting')}></i>
            </div>

            <div className={cx('btn-icon', 'i2')}>
                <i className={cx('zoom')}></i>
            </div>

            <div className={cx('btn-icon', 'i3')}>
                <i className={cx('meeting')}></i>
            </div>

            <div className={cx('btn-icon', 'i4')}>
                <i className={cx('new-mess')}></i>
            </div>
        </div>
    );
}

export default HeaderMessage;
