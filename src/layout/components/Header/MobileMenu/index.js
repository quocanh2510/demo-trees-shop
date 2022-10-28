import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

import styles from './MobileMenu.module.scss';
import ModalWrapper from '~/components/Modal';

const cx = classNames.bind(styles);

function MobileMenu({ handleCloseMenu }) {
    return (
        <ModalWrapper className={cx('wrapper')}>
            <div className={cx('close-btn')} onClick={handleCloseMenu}>
                <FontAwesomeIcon icon={faClose} />
            </div>
            <div className={cx('menu-list')}>
                <Link to="/" className={cx('menu-item')}>
                    Home
                </Link>
                <Link to="/blog" className={cx('menu-item')}>
                    Blog
                </Link>
                <Link to="/about" className={cx('menu-item')}>
                    About Us
                </Link>
                <Link to="/contact" className={cx('menu-item')}>
                    Contact Us
                </Link>
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
