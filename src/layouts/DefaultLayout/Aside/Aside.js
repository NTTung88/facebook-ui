import classNames from 'classnames/bind';
import styles from './Aside.module.scss';

const cx = classNames.bind(styles);
function Aside() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Aside</h2>
        </aside>
    );
}
export default Aside;
