import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';
import style from './HomeSideBar.module.scss';

const cx = classNames.bind(style);
function ItemSideBar({ data }) {
    return data.map((menu, index) => (
        <div key={index}>
            <Button key={index} className={cx('btn-action')}>
                <Image className={cx('icon-image')} src={menu.imgSrc} alt={menu.title} />
                <p className={cx('title')}>{menu.title}</p>
            </Button>
        </div>
    ));
}

export default ItemSideBar;
