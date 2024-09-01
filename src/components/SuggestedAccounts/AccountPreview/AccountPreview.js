import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview(props) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/5722432daa5f5033953de931d8b9d311.jpeg?lk3s=a5d48078&nonce=94740&refresh_token=3e3972facdb66fa0bd1eda7df839cf3e&x-expires=1725357600&x-signature=DzEA%2BU6vqP5uUnsLxQ0hrSaXIx4%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <div>
                    <Button className={cx('follow-btn')} primary>
                        Follow
                    </Button>
                </div>
            </header>

            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    <strong>shelly4359</strong>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>shelly</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>1.077K </strong>
                    <span className={cx('label')}>Flolowers </span>
                    <strong className={cx('value')}>1.077K </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
