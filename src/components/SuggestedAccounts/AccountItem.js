import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5722432daa5f5033953de931d8b9d311.jpeg?lk3s=a5d48078&nonce=8639&refresh_token=bec6be7d85ec7d48f5a83f4f08a7e8fe&x-expires=1725289200&x-signature=ywfRUdO3rFezhbusUUlBc67ahUY%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />

            <div className={cx('item-info')}>
                <h4 className={cx('nickname')}>
                    <strong>shelly4359</strong>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>shelly</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
