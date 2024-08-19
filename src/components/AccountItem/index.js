import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8ffc91fc9e00a23492c185af03f2301b.jpeg?lk3s=30310797&nonce=81265&refresh_token=92f2966e3efef9a3763bc2b7d30df49b&x-expires=1724079600&x-signature=eoDCpQIPuRgzL2oRqbmq%2FnQb%2Bvs%3D&shp=30310797&shcp=-"
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
