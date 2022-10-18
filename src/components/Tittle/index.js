import classNames from 'classnames/bind';
import styles from './Tittle.module.scss';

const cx = classNames.bind(styles);

function Tittle({ children }) {
    return <h2 className={cx('wrapper')}>{children}</h2>;
}

export default Tittle;
