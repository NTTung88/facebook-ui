import classNames from 'classnames/bind';
import ButtonItem from './MenuItem/ButtonItem';
import styles from './LeftSideMenu.module.scss';

const cx = classNames.bind(styles);

function LeftSideMenu() {
    return (
        <div className={cx('left-content')}>
            {/* search */}

            <input className={cx('search')} placeholder="Tìm kiếm trên Facebook" spellCheck={false} />

            <ButtonItem />
        </div>
    );
}

export default LeftSideMenu;
