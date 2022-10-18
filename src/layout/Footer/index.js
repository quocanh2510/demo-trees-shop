import { faFacebookF, faGoogle, faGooglePlusG, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function FooterApp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('footer-top')}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-2')}>
                            <div className={cx('widget')}>
                                <h3>OPENING TIME</h3>
                                <ul className={cx('menu')}>
                                    <li className={cx('menu-item')}>Mon - Fri: 8AM - 10PM</li>
                                    <li className={cx('menu-item')}>Sat: 9AM-8PM</li>
                                    <li className={cx('menu-item')}>Suns: 14hPM-18hPM</li>
                                </ul>
                                <p className={cx('note')}>We Work All The Holidays !</p>
                            </div>
                        </div>
                        <div className={cx('col-lg-2')}>
                            <div className={cx('widget')}>
                                <h3>INFORMATION</h3>
                                <ul className={cx('menu')}>
                                    <li className={cx('menu-item')}>
                                        <a href="/">About Us</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Checkout</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Contact</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Frequently Questions</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Wishlist</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('col-lg-4')}>
                            <div className={cx('widget', 'center')}>
                                <img
                                    className={cx('footer-logo')}
                                    src="https://longtk26.github.io/Trees-shop/assets/img/Logo/logo.jpg"
                                    alt=""
                                />
                                <ul className={cx('menu', 'center')}>
                                    <li className={cx('menu-item', 'center')}>
                                        <a href="/">Payment</a>
                                    </li>
                                    <li className={cx('menu-item', 'center')}>
                                        <a href="/">Affiliates</a>
                                    </li>
                                    <li className={cx('menu-item', 'center')}>
                                        <a href="/"> Contact</a>
                                    </li>
                                    <li className={cx('menu-item', 'center')}>
                                        <a href="/">Internet</a>
                                    </li>
                                </ul>
                                <div className={cx('footer-social')}>
                                    <a className={cx('footer-social-item')} href="/facebook">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a className={cx('footer-social-item')} href="/twitter">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a className={cx('footer-social-item')} href="/google">
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </a>
                                    <a className={cx('footer-social-item')} href="/youtube">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </div>
                                <div className={cx('app-download')}>
                                    <a href="/AppStore">
                                        <img
                                            src="https://htmldemo.net/lukani/lukani/assets/img/icon/icon-app.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <a href="/GooglePlay">
                                        <img
                                            src="https://htmldemo.net/lukani/lukani/assets/img/icon/icon1-app.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-2')}>
                            <div className={cx('widget')}>
                                <h3>MY ACCOUNT</h3>
                                <ul className={cx('menu')}>
                                    <li className={cx('menu-item')}>
                                        <a href="/">My Account</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Contact</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Shopping cart</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Checkout</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Shop</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Order History</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('col-lg-2')}>
                            <div className={cx('widget')}>
                                <h3>CUSTOMER SERVICE</h3>
                                <ul className={cx('menu')}>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Contact Us</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Terms of use</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Privacy Policy</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Site Map</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">My Account</a>
                                    </li>
                                    <li className={cx('menu-item')}>
                                        <a href="/">Returns</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <div className={cx('container')}>
                    <div className={cx('footer-bottom-inner')}>
                        <div className={cx('coppyright')}>
                            <span className={cx('coppyright-text')}>
                                © 2021 <a href="/">Lukani</a>. Made With{' '}
                                <FontAwesomeIcon icon={faHeart} className={cx('coppyright-icon')} /> By{' '}
                                <a href="/">HasThemes</a>
                            </span>
                        </div>
                        <div className={cx('payment')}>
                            <img src="https://htmldemo.net/lukani/lukani/assets/img/icon/payment.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterApp;
