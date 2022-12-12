import classNames from 'classnames/bind';

import Button from '~/components/Button';
import Image from '~/components/Image';
import HeaderMessage from './HeaderMessage';
import style from './Message.module.scss';

const cx = classNames.bind(style);

function Message() {
    return (
        <div className={cx('wrapper')}>
            <HeaderMessage />
            <input className={cx('search')} placeholder="Tìm kiếm trên Facebook" spellCheck={false} />
            <div>
                <Button className={cx('btn')}>Hộp thư</Button>
                <Button className={cx('btn')}>Cộng đồng</Button>
            </div>

            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
            {/* --------- */}
            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
            <div className={cx('account-message')}>
                <Image
                    className={cx('icon-btn')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                    alt="NVA"
                />
                <p className={cx('title')}>Quốc Bảo</p>
                <p className={cx('content')}>Code react js tới đâu rồi.</p>
                <p className={cx('time')}>8 phút</p>
                <i className={cx('icon-mini')}>
                    <Image
                        className={cx('icon-mess')}
                        src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/314506606_3266812486904642_2696533368744929355_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sev-EUtxwrUAX9H9BAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAZPjOs4jqnnQS5GYTdciqS2XGMdJgt68E_00-VcjMO1Q&oe=639BCE6E"
                        alt="NVA"
                    />
                </i>
            </div>
        </div>
    );
}

export default Message;
