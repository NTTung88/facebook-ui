import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './HomeSideBar.module.scss';
import ItemSideBar from './ItemSideBar';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);
function HomeSideBar() {
    const sideBarItem = [
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png',
            title: 'Sự kiện',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png',
            title: 'Bạn bè',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png',
            title: 'Nhóm',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/DOal__ng_AH.png',
            title: 'Bảng tin',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png',
            title: 'Yêu thích',
        },
    ];
    const sideBarItemNext = [
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png',
            title: 'Sự kiện',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png',
            title: 'Bạn bè',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png',
            title: 'Nhóm',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/DOal__ng_AH.png',
            title: 'Bảng tin',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png',
            title: 'Yêu thích',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png',
            title: 'Gần đây nhất',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png',
            title: 'Trang',
        },

        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/eVgQ0NIygAW.png',
            title: 'Video chơi game',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png',
            title: 'Chơi game',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png',
            title: 'Watch',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GmeV2VDbZTi.png',
            title: 'Video trực tiếp',
        },

        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png',
            title: 'Facebook Pay',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png',
            title: 'Marketplace',
        },

        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/WcCzeboYevF.png',
            title: 'Hoạt động quản cáo gần đây',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png',
            title: 'Kỷ niệm',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png',
            title: 'Đã lưu',
        },

        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/qR88GIDM38e.png',
            title: 'Trình quản lý quảng cáo',
        },

        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/9LIH24rbn9J.png',
            title: 'Hiến máu',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png',
            title: 'Trung tâm khoa học khí hậu',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/eChFgZ345zp.png',
            title: 'Ứng phó khẩn cấp',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/GyZZ7Jrr5OV.png',
            title: 'Sức khỏe cảm xúc',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png',
            title: 'Chiến dịch gây quỹ',
        },

        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/HBcx-giUZ2Y.png',
            title: 'Messenger nhí',
        },
        {
            imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/NEy9qHuIKLg.png',
            title: 'Vật phẩm kỹ thuật số',
        },
    ];

    const [data, setData] = useState(sideBarItem);
    const [title, setTitle] = useState('Xem thêm');
    const [img, setImg] = useState('https://cdn-icons-png.flaticon.com/512/25/25623.png');
    const handleShowMore = () => {
        if (title === 'Xem thêm') {
            setData(sideBarItemNext);
            setTitle('Ẩn bớt');
            setImg('https://cdn-icons-png.flaticon.com/512/54/54817.png');
        } else {
            setData(sideBarItem);
            setTitle('Xem thêm');
            setImg('https://cdn-icons-png.flaticon.com/512/25/25623.png');
        }
    };

    return (
        <aside className={cx('wrapper')}>
            {/* <h2>Sidebar</h2> */}
            <div className={cx('account')}>
                <Image
                    className={cx('icon-account')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('accountName')}>Nguyễn Tùng</p>
            </div>

            <ItemSideBar data={data} />
            <Button className={cx('btnShowMore')} onClick={handleShowMore}>
                <Image className={cx('iconShowMore')} src={img} alt="angle" />
                <p className={cx('titleShowMore')}>{title}</p>
            </Button>
            <hr className={cx('setHr')} />
            <p className={cx('titleShortcut')}>Lối tắt của bạn</p>
            {/* button for your shortcut */}
            <div>
                <Button className={cx('btnShortcut')}>
                    <Image
                        className={cx('iconShortcut')}
                        src="https://www.bu.edu/met/files/2020/09/csit-sa-hero-1200x400.jpg"
                        alt="IT"
                    />
                    <p className={cx('contentShortcut')}>IT Pro 2023</p>
                </Button>
            </div>
            <div>
                <Button className={cx('btnShortcut')}>
                    <Image
                        className={cx('iconShortcut')}
                        src="https://www.bu.edu/met/files/2020/09/csit-sa-hero-1200x400.jpg"
                        alt="IT"
                    />
                    <p className={cx('contentShortcut')}>IT Pro 2023</p>
                </Button>
            </div>
            <div>
                <Button className={cx('btnShortcut')}>
                    <Image
                        className={cx('iconShortcut')}
                        src="https://www.bu.edu/met/files/2020/09/csit-sa-hero-1200x400.jpg"
                        alt="IT"
                    />
                    <p className={cx('contentShortcut')}>IT Pro 2023</p>
                </Button>
            </div>
            <div>
                <Button className={cx('btnShortcut')}>
                    <Image
                        className={cx('iconShortcut')}
                        src="https://www.bu.edu/met/files/2020/09/csit-sa-hero-1200x400.jpg"
                        alt="IT"
                    />
                    <p className={cx('contentShortcut')}>IT Pro 2023</p>
                </Button>
            </div>
            <div>
                <Button className={cx('btnShortcut')}>
                    <Image
                        className={cx('iconShortcut')}
                        src="https://www.bu.edu/met/files/2020/09/csit-sa-hero-1200x400.jpg"
                        alt="IT"
                    />
                    <p className={cx('contentShortcut')}>IT Pro 2023</p>
                </Button>
            </div>
            <div>
                <Button className={cx('btnShortcut')}>
                    <Image
                        className={cx('iconShortcut')}
                        src="https://www.bu.edu/met/files/2020/09/csit-sa-hero-1200x400.jpg"
                        alt="IT"
                    />
                    <p className={cx('contentShortcut')}>IT Pro 2023</p>
                </Button>
            </div>
            <div>
                <Button className={cx('btnShortcut')}>
                    <Image
                        className={cx('iconShortcut')}
                        src="https://www.bu.edu/met/files/2020/09/csit-sa-hero-1200x400.jpg"
                        alt="IT"
                    />
                    <p className={cx('contentShortcut')}>IT Pro 2023</p>
                </Button>
            </div>
            <div>
                <Button className={cx('btnShortcut')}>
                    <Image
                        className={cx('iconShortcut')}
                        src="https://www.bu.edu/met/files/2020/09/csit-sa-hero-1200x400.jpg"
                        alt="IT"
                    />
                    <p className={cx('contentShortcut')}>IT Pro 2023</p>
                </Button>
            </div>
            <div>
                <Button className={cx('btnShortcut')}>
                    <Image
                        className={cx('iconShortcut')}
                        src="https://www.bu.edu/met/files/2020/09/csit-sa-hero-1200x400.jpg"
                        alt="IT"
                    />
                    <p className={cx('contentShortcut')}>IT Pro 2023</p>
                </Button>
            </div>
        </aside>
    );
}
export default HomeSideBar;
