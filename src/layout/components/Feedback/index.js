import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import classNames from 'classnames/bind';

import Title from '~/components/Title';
import styles from './Feedback.module.scss';
import { CUSTOMERS } from '~/fakeAPI';

const cx = classNames.bind(styles);

function Feedback({ smallTitle, xSmallTitle, padding0 }) {
    const [count, setCount] = useState(0);

    const handlePrev = () => {
        if (count <= 0) {
            setCount(CUSTOMERS.length - 1);
        } else {
            setCount((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (count >= CUSTOMERS.length - 1) {
            setCount(0);
        } else {
            setCount((prev) => prev + 1);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Title className={cx({ smallTitle: smallTitle, xSmallTitle: xSmallTitle })}>
                    What Our Customers Says ?
                </Title>
                <div className={cx('icon')}>
                    <img src="https://htmldemo.net/lukani/lukani/assets/img/about/testimonials-icon.png" alt="" />
                </div>
                <div className={cx('testimonial')}>
                    <FontAwesomeIcon className={cx('prev-btn')} onClick={handlePrev} icon={faChevronLeft} />
                    <p className={cx('content', { padding0: padding0 })}>
                        {CUSTOMERS[count].feedback}
                        <br />
                        {CUSTOMERS[count].thanks}
                    </p>
                    <div className={cx('author')}>
                        <img className={cx('author-image')} src={CUSTOMERS[count].image} alt="" />
                        <div className={cx('author-name')}>
                            <span>{CUSTOMERS[count].name}</span>
                            <span className={cx('separate')}>/</span>
                            <span>{CUSTOMERS[count].position}</span>
                        </div>
                    </div>
                    <FontAwesomeIcon className={cx('next-btn')} onClick={handleNext} icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}

export default Feedback;
