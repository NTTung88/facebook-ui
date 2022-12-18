import classNames from 'classnames/bind';
import HomeSideBar from '~/layouts/components/SideBar/HomeSideBar';
import Aside from '~/layouts/DefaultLayout/Aside';
import style from './Home.module.scss';

const cx = classNames.bind(style);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <HomeSideBar />
                <div className={cx('content')}>
                    <h2 style={{ height: 2000 }}>Home pages</h2>
                </div>
                <Aside />
            </div>
        </div>
    );
}
export default Home;
