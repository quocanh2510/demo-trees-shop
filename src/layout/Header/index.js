import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Navbar from './Navbar';
import styles from './Header.module.scss';
import PopperWrapper from '~/components/Popper';
import { USER_MENU } from '~/components/Constants';
import LoginForm from './Authentication/LoginForm';
import RegisterForm from './Authentication/RegisterForm';
import Overlay from '~/components/Overlay';
import Cart from './Cart';

const cx = classNames.bind(styles);

let currentUser = true;

const userMenu = (attrs) => (
    <PopperWrapper>
        <div tabIndex="-1" {...attrs}>
            {USER_MENU.map((item, index) => (
                <div className={cx('user-menu-item')} key={index}>
                    {item}
                </div>
            ))}
        </div>
    </PopperWrapper>
);

function HeaderApp() {
    const [visible, setVisible] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [cart, setCart] = useState(false);

    const toogleAnimation = () => {
        if (window.scrollY > 100) {
            setVisible(true);
        } else if (window.scrollY <= 100) {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toogleAnimation);

        return () => window.removeEventListener('scroll', toogleAnimation);
    }, []);

    const classes = cx('wrapper', {
        animation: visible,
    });

    return (
        <>
            <header className={classes}>
                <Navbar />
                <div className={cx('logo')}>
                    <img src="https://longtk26.github.io/Trees-shop/assets/img/Logo/logo.jpg" alt="logo" />
                </div>
                <div className={cx('action')}>
                    <div className={cx('search')}>
                        <input className={cx('search-input')} placeholder="Search propduct..." />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('header-icon')} />
                    </div>
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className={cx('header-icon')}
                        onClick={() => setCart(true)}
                    />

                    {currentUser ? (
                        <>
                            <FontAwesomeIcon icon={faHeart} className={cx('header-icon')} />
                            <Tippy delay={[0, 300]} placement="bottom" interactive render={userMenu}>
                                <img
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6892305417544663046.jpeg?x-expires=1665079200&x-signature=UT58gREYc4P0FQu5QdpKFlcAIpM%3D"
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

            {cart && (
                <Overlay right onClick={() => setCart(false)}>
                    <Cart handleCloseCart={() => setCart(false)} />
                </Overlay>
            )}

            {login && (
                <Overlay onClick={() => setLogin(false)}>
                    <LoginForm HandleCloseForm={() => setLogin(false)} />
                </Overlay>
            )}
            {register && (
                <Overlay onClick={() => setRegister(false)}>
                    <RegisterForm HandleCloseForm={() => setRegister(false)} />
                </Overlay>
            )}
        </>
    );
}

export default HeaderApp;
