import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Authentication.module.scss';
import ModalWrapper from '~/components/Modal';

const cx = classNames.bind(styles);

function RegisterForm({ HandleCloseForm }) {
    return (
        <ModalWrapper className={cx('wrapper')}>
            <form className={cx('form')}>
                <div className={cx('close-btn')} onClick={HandleCloseForm}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <h1 className={cx('title')}>Sign Up</h1>
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
                <div className={cx('form-group')}>
                    <input required type="password" placeholder="Confirm Password" />
                    <span />
                    <div className={cx('form-message')} />
                </div>
                <div className={cx('form-check')}>
                    <input type="checkbox" className={cx('check')} id="checked" />
                    <label htmlFor="checked">I agree with the</label>
                    <a href="/">term of services</a>
                </div>
                <button className={cx('form-submit')}>Register</button>
            </form>
        </ModalWrapper>
    );
}

export default RegisterForm;
