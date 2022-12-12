import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';
import style from './Notification.module.scss';

const cx = classNames.bind(style);

function Notification() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('ss1')}>
                <p className={cx('title')}>Thông báo</p>
                <i className={cx('threedot')}></i>
            </div>
            <div className={cx('ss2')}>
                <Button className={cx('btn')}>Tất cả</Button>
                <Button className={cx('btn')}>Chưa đọc</Button>
            </div>
            <div className={cx('ss3')}>
                <p className={cx('title-ss3')}>Trước đó</p>
                <p className={cx('link-ss3')}>Xem tất cả</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            {/* item data */}
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            <div className={cx('ss4')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('content')}>Trang bạn thích,Tập chơi đàn ...,đã đổi tên thành Học đàn Guitar FA.</p>
                <p className={cx('time')}>1 ngày trước</p>
            </div>
            {/* itemdata */}
        </div>
    );
}

export default Notification;
