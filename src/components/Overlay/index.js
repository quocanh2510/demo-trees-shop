import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);

function Overlay({ children, onClick, className, right, left }) {
    const classes = cx('wrapper', { right, left, [className]: className });
    return (
        <div className={classes} onClick={onClick}>
            {children}
        </div>
    );
}

Overlay.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    right: PropTypes.bool,
    left: PropTypes.bool,
};

export default Overlay;
