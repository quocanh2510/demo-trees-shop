import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Authentication.module.scss';
import ModalWrapper from '~/components/Modal';

const cx = classNames.bind(styles);

function LoginForm({ handleCloseForm, handleUser }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submit = (data) => {
        const userStorage = JSON.parse(localStorage.getItem('users')) ?? [];
        userStorage.forEach((item) => {
            if (item.username === data.username && item.password === data.password) {
                handleCloseForm();
                handleUser();

                toast.success('Login success!', {
                    position: 'bottom-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            } else if (item.username !== data.username) {
                toast.error('Your Username or Password do not match, Try again!', {
                    position: 'bottom-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
        });
    };

    return (
        <ModalWrapper className={cx('wrapper')}>
            <form className={cx('form')} onSubmit={handleSubmit(submit)}>
                <div className={cx('close-btn')} onClick={handleCloseForm}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <h1 className={cx('title')}>Welcome back !</h1>
                <div className={cx('form-logo')}>
                    <img src="https://longtk26.github.io/Trees-shop/assets/img/Logo/logo.jpg" alt="" />
                </div>
                <div className={cx('form-group')}>
                    <input
                        type="text"
                        placeholder="Username"
                        {...register('username', { required: 'This field is required' })}
                    />
                    {errors.username ? <span className={cx('invalid')} /> : <span className={cx('valid')} />}
                    {errors.username && <div className={cx('form-message')}>{errors.username.message}</div>}
                </div>
                <div className={cx('form-group')}>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register('password', {
                            required: 'This field is required',
                            minLength: { value: 6, message: 'Minimum required length is 6' },
                            maxLength: { value: 20, message: 'Maximum required length is 20' },
                        })}
                    />
                    {errors.password ? <span className={cx('invalid')} /> : <span className={cx('valid')} />}
                    {errors.password && <div className={cx('form-message')}>{errors.password.message}</div>}
                </div>
                <div className={cx('form-footer')}>
                    <div className={cx('form-check')}>
                        <input type="checkbox" className={cx('check')} id="checked" required />
                        <label htmlFor="checked">Remember me</label>
                    </div>
                    <a href="/" className={cx('form-link')}>
                        Forgot password?
                    </a>
                </div>
                <button className={cx('form-submit')}>Login</button>
            </form>
        </ModalWrapper>
    );
}

LoginForm.propTypes = {
    handleCloseForm: PropTypes.func,
    handleUser: PropTypes.func,
};

export default LoginForm;
