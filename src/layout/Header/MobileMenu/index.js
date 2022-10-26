import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faClose, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

import styles from './MobileMenu.module.scss';
import ModalWrapper from '~/components/Modal';
import { BLOG_SUBNAV, HOME_SUBNAV, PAGES_SUBNAV, SHOP_SUBNAV } from '~/components/Constants';

const cx = classNames.bind(styles);

function MobileMenu({ handleCloseMenu }) {
    return (
        <ModalWrapper className={cx('wrapper')}>
            <div className={cx('close-btn')} onClick={handleCloseMenu}>
                <FontAwesomeIcon icon={faClose} />
            </div>
            <div className={cx('menu-list')}>
                <div className={cx('menu-item-wrap')}>
                    <div className={cx('menu-item', 'home-item')}>
                        Home <FontAwesomeIcon icon={faAngleDown} className={cx('menu-icon')} />
                    </div>
                    <div className={cx('sub-menu-list', 'home-sub-list')}>
                        {HOME_SUBNAV.map((item, index) => (
                            <div key={index} className={cx('sub-menu-item')}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('menu-item-wrap')}>
                    <div className={cx('menu-item', 'shop-item')}>
                        Shop <FontAwesomeIcon icon={faAngleDown} className={cx('menu-icon')} />
                    </div>
                    <div className={cx('sub-menu-list', 'shop-sub-list')}>
                        {SHOP_SUBNAV.map((item, index) => (
                            <div key={index} className={cx('sub-menu-item')}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('menu-item-wrap')}>
                    <div className={cx('menu-item', 'blog-item')}>
                        Blog <FontAwesomeIcon icon={faAngleDown} className={cx('menu-icon')} />
                    </div>
                    <div className={cx('sub-menu-list', 'blog-sub-list')}>
                        {BLOG_SUBNAV.map((item, index) => (
                            <div key={index} className={cx('sub-menu-item')}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('menu-item-wrap')}>
                    <div className={cx('menu-item', 'page-item')}>
                        Pages <FontAwesomeIcon icon={faAngleDown} className={cx('menu-icon')} />
                    </div>
                    <div className={cx('sub-menu-list', 'page-sub-list')}>
                        {PAGES_SUBNAV.map((item, index) => (
                            <div key={index} className={cx('sub-menu-item')}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('menu-item')}>My Account</div>
                <div className={cx('menu-item')}>About Us</div>
                <div className={cx('menu-item')}>Contact Us</div>
            </div>
            <a href="/" className={cx('email')}>
                <FontAwesomeIcon icon={faEnvelope} /> demo@example.com
            </a>
            <ul className={cx('social-list')}>
                <li className={cx('social-item')}>
                    <a href="/" className={cx('social-icon', 'facebook')}>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </li>
                <li className={cx('social-item')}>
                    <a href="/" className={cx('social-icon', 'twitter')}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li className={cx('social-item')}>
                    <a href="/" className={cx('social-icon', 'pinterest')}>
                        <FontAwesomeIcon icon={faPinterestP} />
                    </a>
                </li>
                <li className={cx('social-item')}>
                    <a href="/" className={cx('social-icon', 'google')}>
                        <FontAwesomeIcon icon={faGooglePlusG} />
                    </a>
                </li>
                <li className={cx('social-item')}>
                    <a href="/" className={cx('social-icon', 'linkedin')}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
            </ul>
        </ModalWrapper>
    );
}

MobileMenu.propTypes = {
    handleCloseMenu: PropTypes.func,
};

export default MobileMenu;
