import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import PopperWrapper from '~/components/Popper';
import LoginForm from './Authentication/LoginForm';
import RegisterForm from './Authentication/RegisterForm';
import Overlay from '~/components/Overlay';
import Cart from './Cart';
import MobileMenu from './MobileMenu';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function HeaderApp({ backgroundWhite }) {
    const [currentUser, setCurrentUser] = useState(() => {
        const userStorage = JSON.parse(localStorage.getItem('currentUser'));
        return userStorage ?? false;
    });
    const [visible, setVisible] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [cart, setCart] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const toogleAnimation = () => {
        if (window.scrollY > 100) {
            setVisible(true);
        } else if (window.scrollY <= 100) {
            setVisible(false);
        }
    };

    const handleLogin = () => {
        setCurrentUser(true);
        localStorage.setItem('currentUser', JSON.stringify(true));
    };

    const handleLogout = () => {
        setCurrentUser(false);
        localStorage.setItem('currentUser', JSON.stringify(false));
        alert('Are you sure you want to logout?');
    };

    useEffect(() => {
        window.addEventListener('scroll', toogleAnimation);

        return () => window.removeEventListener('scroll', toogleAnimation);
    }, []);

    const classes = cx('wrapper', {
        animation: visible,
        backgroundWhite: backgroundWhite,
    });

    return (
        <>
            <header className={classes}>
                <nav className={cx('navbar', 'hide-on-mobile-tablet')}>
                    <MenuItem to="/" title="Home" />
                    <MenuItem to="/blog" title="Blog" />
                    <MenuItem to="/about" title="About" />
                    <MenuItem to="/contact" title="Contact" />
                </nav>
                <div className={cx('menu-icon', 'hide-on-pc')} onClick={() => setMobileMenu(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <Link to="/" className={cx('logo')}>
                    <img src="https://longtk26.github.io/Trees-shop/assets/img/Logo/logo.jpg" alt="logo" />
                </Link>
                <div className={cx('action')}>
                    <div className={cx('search', 'hide-on-mobile')}>
                        <input className={cx('search-input')} placeholder="Search anything..." />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('header-icon')} />
                    </div>

                    {currentUser ? (
                        <>
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className={cx('header-icon')}
                                onClick={() => setCart(true)}
                            />
                            <Tippy
                                delay={[0, 300]}
                                placement="bottom"
                                interactive
                                render={(attrs) => (
                                    <PopperWrapper>
                                        <div tabIndex="-1" {...attrs}>
                                            <div className={cx('user-menu-item')}>My Account</div>
                                            <div className={cx('user-menu-item')}>Shopping Cart</div>
                                            <div className={cx('user-menu-item')}>Wishlist</div>
                                            <a href="/" className={cx('user-menu-item')} onClick={handleLogout}>
                                                Logout
                                            </a>
                                        </div>
                                    </PopperWrapper>
                                )}
                            >
                                <img
                                    src="https://banner2.cleanpng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg"
                                    alt="avatar"
                                    className={cx('avatar')}
                                />
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <div className={cx('authentication')}>
                                <span className={cx('login')} onClick={() => setLogin(true)}>
                                    Login
                                </span>
                                <span className={cx('register')} onClick={() => setRegister(true)}>
                                    Register
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </header>

            {mobileMenu && (
                <Overlay left onClick={() => setMobileMenu(false)}>
                    <MobileMenu handleCloseMenu={() => setMobileMenu(false)} />
                </Overlay>
            )}

            {cart && (
                <Overlay right onClick={() => setCart(false)}>
                    <Cart handleCloseCart={() => setCart(false)} />
                </Overlay>
            )}

            {login && (
                <Overlay onClick={() => setLogin(false)}>
                    <LoginForm handleCloseForm={() => setLogin(false)} handleUser={handleLogin} />
                </Overlay>
            )}
            {register && (
                <Overlay onClick={() => setRegister(false)}>
                    <RegisterForm handleCloseForm={() => setRegister(false)} />
                </Overlay>
            )}
        </>
    );
}

export default HeaderApp;
