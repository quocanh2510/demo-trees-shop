import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import Swal from 'sweetalert2';

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
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Logout!', 'See you later', 'success');
                setCurrentUser(false);
                localStorage.setItem('currentUser', JSON.stringify(false));
            }
        });
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
                                            <div className={cx('user-menu-item')} onClick={handleLogout}>
                                                Logout
                                            </div>
                                        </div>
                                    </PopperWrapper>
                                )}
                            >
                                <div className={cx('avatar')}>
                                    <FontAwesomeIcon icon={faUser} className={cx('header-icon')} />
                                </div>
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
