import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Modal({ children, className }) {
    return (
        <div className={cx('wrapper', className)} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Modal;
