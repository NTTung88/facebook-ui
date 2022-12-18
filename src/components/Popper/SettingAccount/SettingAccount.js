import Image from '~/components/Image';
import classNames from 'classnames/bind';
import style from './SettingAccount.module.scss';

const cx = classNames.bind(style);

function SettingAccount() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('ss1')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('nameAccount')}>Nguyễn Tùng</p>
                <hr className={cx('hr')}></hr>
                <p className={cx('link-profile')}>Xem tất cả trang cá nhân</p>
            </div>
            {/* icon setting */}
            <div className={cx('ss2')}>
                <div className={cx('icon')}>
                    <i className={cx('icon-setting')}></i>
                </div>

                <p className={cx('title-setting')}>Cài đặt & quyền riên tư</p>
                <i className={cx('icon-next')}></i>
            </div>
            {/* support */}
            <div className={cx('ss2')}>
                <div className={cx('icon')}>
                    <i className={cx('icon-support')}></i>
                </div>

                <p className={cx('title-setting')}>Trợ giúp & hỗ trợ</p>
                <i className={cx('icon-next')}></i>
            </div>
            {/* screen */}
            <div className={cx('ss2')}>
                <div className={cx('icon')}>
                    <i className={cx('icon-screen')}></i>
                </div>

                <p className={cx('title-setting')}>Màn hình & trợ năng</p>
                <i className={cx('icon-next')}></i>
            </div>
            {/* Notification */}
            <div className={cx('ss2')}>
                <div className={cx('icon')}>
                    <i className={cx('icon-noti')}></i>
                </div>

                <p className={cx('title-setting')}>Đóng góp ý kiến</p>
            </div>
            {/* logout */}
            <div className={cx('ss2')}>
                <div className={cx('icon')}>
                    <i className={cx('icon-logout')}></i>
                </div>

                <p className={cx('title-setting')}>Đăng xuất</p>
            </div>
        </div>
    );
}

export default SettingAccount;
