import classNames from 'classnames/bind';
import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);

function Overlay({ children, onClick, className, right }) {
    const classes = cx('wrapper', { right, [className]: className });
    return (
        <div className={classes} onClick={onClick}>
            {children}
        </div>
    );
}

export default Overlay;
