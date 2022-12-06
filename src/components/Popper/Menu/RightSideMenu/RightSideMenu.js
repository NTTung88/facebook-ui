import classNames from 'classnames/bind';

import styles from './RightSideMenu.module.scss';

const cx = classNames.bind(styles);
function RightSideMenu() {
    const menuItem = [
        {
            title: 'Đăng',
            place: [
                {
                    bgImage: 'icon1',
                    bgPosition: '0px -526px',
                    bfSide: '26px 1670px',
                },
            ],
        },
        {
            title: 'Tin',
            place: [
                {
                    bgImage: 'icon2',
                    bgPosition: '0px -674px',
                    bfSide: '38px 768px',
                },
            ],
        },
        {
            title: 'Phòng họp mặt',
            place: [
                {
                    bgImage: 'icon1',
                    bgPosition: '0px -196px',
                    bfSide: '26px 1670px',
                },
            ],
            setHr: <hr className={cx('setHr')} />,
        },
        {
            title: 'Trang',
            place: [
                {
                    bgImage: 'icon1',
                    bgPosition: '0px -174px',
                    bfSide: '26px 1670px',
                },
            ],
        },
        {
            title: 'Quảng cáo',
            place: [
                {
                    bgImage: 'icon1',
                    bgPosition: '0px -944px',
                    bfSide: '26px 1670px',
                },
            ],
        },
        {
            title: 'Nhóm',
            place: [
                {
                    bgImage: 'icon2',
                    bgPosition: '0px -256px',
                    bfSide: '38px 768px',
                },
            ],
        },
        {
            title: 'Sự kiện',
            place: [
                {
                    bgImage: 'icon1',
                    bgPosition: '0px -284px',
                    bfSide: '26px 1670px',
                },
            ],
        },
        {
            title: 'Bài niêm yết trên Marketplace',
            place: [
                {
                    bgImage: 'icon2',
                    bgPosition: '0px -652px',
                    bfSide: '38px 768px',
                },
            ],
        },
    ];

    return (
        <div className={cx('right-content')}>
            {/* search */}
            <p className={cx('label')}>Tạo</p>

            {menuItem.map((menu, index) => (
                <div key={index}>
                    <button className={cx('btn-action')}>
                        <div>
                            <div className={cx('bg-icon')}>
                                {menu.place.map((pl, index) => (
                                    <i
                                        key={index}
                                        className={cx(pl.bgImage, 'icon')}
                                        style={{
                                            backgroundSize: pl.bfSide,
                                            backgroundPosition: pl.bgPosition,
                                        }}
                                    ></i>
                                ))}
                            </div>
                            <p className={cx('title')}>{menu.title}</p>
                            {}
                        </div>
                    </button>
                    {menu.setHr}
                </div>
            ))}
        </div>
    );
}

export default RightSideMenu;
