/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';

import Button from '~/components/Button';

import Image from '~/components/Image';

import styles from './ButtonItem.module.scss';

const cx = classNames.bind(styles);
function MenuItem() {
    const menuItem = [
        {
            topic: 'Xã hội',
            children: [
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png',
                    title: 'Sự kiện',
                    content: 'Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png',
                    title: 'Bạn bè',
                    content: 'Tìm kiếm bạn bè hoặc những người bạn có thể biết',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png',
                    title: 'Nhóm',
                    content: 'Kết nối với những người cùng chung sở thích.',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/DOal__ng_AH.png',
                    title: 'Bảng tin',
                    content: 'Xem bài viết phù hợp của những người và trang bạn theo dõi.',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png',
                    title: 'Yêu thích',
                    content: 'View posts by Favorites',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png',
                    title: 'Gần đây nhất',
                    content: 'Xem bài viết gần đây nhất từ bạn bè,nhóm,Trang và hơn thế nữa.',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png',
                    title: 'Trang',
                    content: 'Khám phá và kết nối với các doanh nghiệp trên Facebook.',
                },
            ],
            foot: <hr />,
        },
        {
            topic: 'Giải trí',
            children: [
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/eVgQ0NIygAW.png',
                    title: 'Video chơi game',
                    content: 'Xem,kết nối với những game và người phát trực tiếp mà bạn yêu thích.',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png',
                    title: 'Chơi game',
                    content: 'Chơi game bạn yêu thích.',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png',
                    title: 'What',
                    content: 'Đích đến của video phù hợp với sở thích và quan hệ kết nối của bạn.',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GmeV2VDbZTi.png',
                    title: 'Video trực tiếp',
                    content: 'Xem video trực tiếp phổ biến từ khắp thế giới',
                },
            ],
        },
        {
            topic: 'Mua sắm',
            children: [
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png',
                    title: 'Facebook Pay',
                    content: 'Một cách dễ dàng, bảo mật để thanh toán trên các ứng dụng bạn đang dùng',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png',
                    title: 'Marketplace',
                    content: 'Mua bán trong cộng đồng của bạn',
                },
            ],
            foot: <hr />,
        },
        {
            topic: 'Cá nhân',
            children: [
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/WcCzeboYevF.png',
                    title: 'Hoạt động quản cáo gần đây',
                    content: 'Xem toàn bộ quản cáo mà bạn đã tương tác trên Facebook',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png',
                    title: 'Kỷ niệm',
                    content: 'Lướt xem ảnh ,video và bài viết cũ của bạn trên Facebook',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png',
                    title: 'Đã lưu',
                    content: 'Tìm bài viết, ảnh và video mà bạn đã lưu để xem sau',
                },
            ],
            foot: <hr />,
        },
        {
            topic: 'Chuyên nghiệp',
            children: [
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/qR88GIDM38e.png',
                    title: 'Trình quản lý quảng cáo',
                    content: 'Tạo, quản lý và theo dõi hiệu quả quảng cáo.',
                },
            ],
            foot: <hr />,
        },
        {
            topic: 'Nguồn lực cho cộng đồng',
            children: [
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/9LIH24rbn9J.png',
                    title: 'Hiến máu',
                    content: 'Cập nhật thông tin về hoạt động hiến máu ở gần bạn.',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png',
                    title: 'Trung tâm khoa học khí hậu',
                    content: 'Tìm hiểu về vấn đề biến đổi khí hậu và tác động của hiện tượng này.',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/eChFgZ345zp.png',
                    title: 'Ứng phó khẩn cấp',
                    content: 'Tìm thông tin mới nhất về các cuộc khủng hoảng đang diễn ra trên thế giới.',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/GyZZ7Jrr5OV.png',
                    title: 'Sức khỏe cảm xúc',
                    content: '',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png',
                    title: 'Chiến dịch gây quỹ',
                    content: 'Quyên góp và gây quỹ cho tổ chức phi lợi nhuận và mục đích cá nhân.',
                },
            ],
            foot: <hr />,
        },
        {
            topic: 'Sản phẩm khác của Meta',
            children: [
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/HBcx-giUZ2Y.png',
                    title: 'Messenger nhí',
                    content: 'Cho phép bé nhắn tin với bạn thân và gia đình.',
                },
                {
                    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/NEy9qHuIKLg.png',
                    title: 'Vật phẩm kỹ thuật số',
                    content: 'Truy cập nhanh vào vật phẩm của bạn trên Facebook.',
                },
            ],
        },
    ];

    return menuItem.map((menu, index) => (
        <div key={index}>
            <p className={cx('label')}>{menu.topic}</p>
            {menu.children.map((item, index) => (
                <div key={index}>
                    <Button key={index} className={cx('btn-action')}>
                        <Image className={cx('icon-image')} src={item.imgSrc} alt={item.title} />
                        <p className={cx('title')}>{item.title}</p>
                        <p className={cx('content')}>{item.content}</p>
                    </Button>
                </div>
            ))}
            {menu.foot}
        </div>
    ));
}

export default MenuItem;
