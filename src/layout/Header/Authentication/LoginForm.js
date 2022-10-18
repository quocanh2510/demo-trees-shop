import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Authentication.module.scss';
import ModalWrapper from '~/components/Modal';

const cx = classNames.bind(styles);

function LoginForm({ HandleCloseForm }) {
    return (
        <ModalWrapper className={cx('wrapper')}>
            <form className={cx('form')}>
                <div className={cx('close-btn')} onClick={HandleCloseForm}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <h1 className={cx('title')}>Welcome back !</h1>
                <div className={cx('form-logo')}>
                    <img src="https://longtk26.github.io/Trees-shop/assets/img/Logo/logo.jpg" alt="" />
                </div>
                <div className={cx('form-group')}>
                    <input required type="text" placeholder="Username" />
                    <span />
                    <div className={cx('form-message')} />
                </div>
                <div className={cx('form-group')}>
                    <input required type="password" placeholder="Password" />
                    <span />
                    <div className={cx('form-message')} />
                </div>
                <button className={cx('form-submit')}>Login</button>
            </form>
        </ModalWrapper>
    );
}

export default LoginForm;
