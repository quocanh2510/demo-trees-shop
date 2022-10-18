import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './Slide.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import classNames from 'classnames/bind';
import { SLIDE_IMG } from '~/components/Constants';

const cx = classNames.bind(styles);

function Slide() {
    return (
        <Carousel
            className={cx('wrapper')}
            variant="dark"
            prevIcon={
                <span>
                    <FontAwesomeIcon className={cx('prev-btn')} icon={faChevronLeft} />
                </span>
            }
            nextIcon={
                <span>
                    <FontAwesomeIcon className={cx('next-btn')} icon={faChevronRight} />
                </span>
            }
            fade
        >
            {SLIDE_IMG.map((item, index) => (
                <Carousel.Item key={index}>
                    <img className={cx('d-block', 'w-100', 'image')} src={item.image} alt="" />
                    <Carousel.Caption className={cx('content')}>
                        <div className={cx('header')}>
                            <p>AMAZING</p>
                            <p>FROM Lukani</p>
                        </div>
                        <div className={cx('body')}>
                            <p>{item.headerContent}</p>
                            <p>{item.bodyContent}</p>
                        </div>
                        <div className={cx('discount')}>Discount 20% Off For Lukani Members</div>
                        <button className={cx('footer-btn')}>DISCOVER NOW</button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slide;
