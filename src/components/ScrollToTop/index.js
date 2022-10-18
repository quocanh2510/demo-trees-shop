import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ScrollToTop.module.scss';

const cx = classNames.bind(styles);

function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toogleVisibleButton = () => {
        if (window.scrollY <= 150) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    };

    useEffect(() => {
        window.onscroll = toogleVisibleButton;

        return () => window.removeEventListener('scroll', toogleVisibleButton);
    }, []);

    return (
        <>
            {visible && (
                <button onClick={handleScrollTop} className={cx('scroll-top')}>
                    <FontAwesomeIcon className={cx('scroll-top-icon')} icon={faAnglesUp} />
                </button>
            )}
        </>
    );
}

export default ScrollToTop;
