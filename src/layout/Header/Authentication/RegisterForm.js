import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Authentication.module.scss';
import ModalWrapper from '~/components/Modal';

const cx = classNames.bind(styles);

function RegisterForm({ handleCloseForm }) {
    const [, setStorage] = useState([]);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = watch('password');

    const submit = (data) => {
        setStorage((prev) => {
            const userStorage = [...prev, data];
            localStorage.setItem('users', JSON.stringify(userStorage));
            return userStorage;
        });

        toast.success('Sign up success! Please login to shopping', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    return (
        <ModalWrapper className={cx('wrapper')}>
            <form className={cx('form')} onSubmit={handleSubmit(submit)}>
                <div className={cx('close-btn')} onClick={handleCloseForm}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <h1 className={cx('title')}>Sign Up</h1>
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
                <div className={cx('form-group')}>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        {...register('confirmPassword', {
                            required: 'This field is required',
                            validate: (value) => value === password || 'The password do not match',
                        })}
                    />
                    {errors.confirmPassword ? <span className={cx('invalid')} /> : <span className={cx('valid')} />}
                    {errors.confirmPassword && (
                        <div className={cx('form-message')}>{errors.confirmPassword.message}</div>
                    )}
                </div>
                <div className={cx('form-check')}>
                    <input type="checkbox" className={cx('check')} id="checked" required />
                    <label htmlFor="checked">I agree with the</label>
                    <a href="/">term of services</a>
                </div>
                <button className={cx('form-submit')}>Register</button>
            </form>
        </ModalWrapper>
    );
}

RegisterForm.propTypes = {
    handleCloseForm: PropTypes.func,
};

export default RegisterForm;
