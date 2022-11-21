import classNames from 'classnames/bind';
import styles from './LoadingPage.module.scss';

const cx = classNames.bind(styles);

function LoadingPage() {
    return (
        <div className={cx('loading-page')}>
            <div className={cx('loading-wrap')}>
                <div className={cx('loading-card')}>
                    <div className={cx('ball')} />
                    <div className={cx('loading-board', 'board1')}></div>
                    <div className={cx('loading-board', 'board2')}></div>
                    <div className={cx('loading-board', 'board3')}></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;
