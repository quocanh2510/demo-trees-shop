import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children, className }) {
    return (
        <div className={cx('wrapper', className)} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    );
}

export default Modal;
