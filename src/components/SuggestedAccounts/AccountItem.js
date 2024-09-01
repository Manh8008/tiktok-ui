import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
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
            </Tippy>
        </div>
    );
}

export default AccountItem;
