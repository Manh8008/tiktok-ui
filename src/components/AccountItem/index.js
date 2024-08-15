import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/6e71cb4085ef0966c648fb4154ab80f2.jpeg?lk3s=a5d48078&nonce=5336&refresh_token=1a96468d53d2b2f9a616afecbc721daf&x-expires=1723708800&x-signature=AXGEQLIjlsRekveUogf8aqmRAoU%3D&shp=a5d48078&shcp=81f88b70"
                className={cx('avatar')}
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyễn Văn A <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
