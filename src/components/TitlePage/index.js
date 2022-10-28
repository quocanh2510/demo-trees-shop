import classNames from 'classnames/bind';
import styles from './TitlePage.module.scss';

const cx = classNames.bind(styles);

function TittlePage({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default TittlePage;
