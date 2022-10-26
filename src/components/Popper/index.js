import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function PopperWrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

PopperWrapper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default PopperWrapper;
