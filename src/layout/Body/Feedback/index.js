import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import classNames from 'classnames/bind';

import Tittle from '~/components/Tittle';
import styles from './Feedback.module.scss';
import { CUSTOMERS, BRAND } from '~/components/Constants';

const cx = classNames.bind(styles);

function Feedback() {
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
                <Tittle>What Our Customers Says ?</Tittle>
                <div className={cx('icon')}>
                    <img src="https://htmldemo.net/lukani/lukani/assets/img/about/testimonials-icon.png" alt="" />
                </div>
                <div className={cx('testimonial')}>
                    <FontAwesomeIcon className={cx('prev-btn')} onClick={handlePrev} icon={faChevronLeft} />
                    <p className={cx('content')}>
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
                <div className={cx('brand')}>
                    {BRAND.map((item, index) => (
                        <div key={index} className={cx('brand-item')}>
                            <img src={item} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feedback;
