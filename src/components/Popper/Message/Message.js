import classNames from 'classnames/bind';
import HeaderMessage from './HeaderMessage';
import style from './Message.module.scss';

const cx = classNames.bind(style);

function Message() {
    return (
        <div className={cx('wrapper')}>
            <HeaderMessage />
            <input className={cx('search')} placeholder="Tìm kiếm trên Facebook" spellCheck={false} />
        </div>
    );
}

export default Message;
