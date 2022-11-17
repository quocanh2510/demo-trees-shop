import classNames from 'classnames/bind';

import styles from './About.module.scss';
import MainLayout from '~/layout/MainLayout';
import Brand from '~/layout/components/Brand';
import TitlePage from '~/components/TitlePage';
import Feedback from '~/layout/components/Feedback';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FAQ_LIST } from '~/fakeAPI';

const cx = classNames.bind(styles);

function About() {
    return (
        <MainLayout>
            <div className={cx('wrapper')}>
                <TitlePage>About Us</TitlePage>
                <div className={cx('about-section')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-12')}>
                                <figure>
                                    <img
                                        src="https://htmldemo.net/lukani/lukani/assets/img/about/about1.jpg"
                                        alt=""
                                        className={cx('about-thumb')}
                                        loading="lazy"
                                    />
                                    <div className={cx('about-content')}>
                                        <h1>
                                            We Are A Digital Agency Focused On Delivering Content And Utility
                                            User-Experiences.
                                        </h1>
                                        <p>
                                            Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus.
                                            Imperdiet cursus odio tortor in elementum. Egestas nunc eleifend feugiat
                                            lectus laoreet, vel nunc taciti integer cras. Hac pede dis, praesent nibh ac
                                            dui mauris sit. Pellentesque mi, facilisi mauris, elit sociis leo sodales
                                            accumsan. Iaculis ac fringilla torquent lorem consectetuer, sociosqu
                                            phasellus risus urna aliquam, ornare.
                                        </p>
                                        <div className={cx('about-signature')}>
                                            <img
                                                src="https://htmldemo.net/lukani/lukani/assets/img/about/about-us-signature.png"
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('chose-us')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'g-lg-5')}>
                            <div className={cx('col-lg-4', 'col-md-4', 'col-sm-12')}>
                                <div className={cx('chose-item')}>
                                    <img
                                        src="https://htmldemo.net/lukani/lukani/assets/img/about/About_icon1.png"
                                        alt=""
                                        className={cx('chose-icon')}
                                        loading="lazy"
                                    />
                                    <div className={cx('chose-content')}>
                                        <h3>Creative Design</h3>
                                        <p>
                                            Erat metus sodales eget dolor consectetuer, porta ut purus at et alias,
                                            nulla ornare velit amet
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-lg-4', 'col-md-4', 'col-sm-12')}>
                                <div className={cx('chose-item')}>
                                    <img
                                        src="https://htmldemo.net/lukani/lukani/assets/img/about/About_icon2.png"
                                        alt=""
                                        className={cx('chose-icon')}
                                        loading="lazy"
                                    />
                                    <div className={cx('chose-content')}>
                                        <h3>100% Money Back Guarantee</h3>
                                        <p>
                                            Erat metus sodales eget dolor consectetuer, porta ut purus at et alias,
                                            nulla ornare velit amet
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-lg-4', 'col-md-4', 'col-sm-12')}>
                                <div className={cx('chose-item')}>
                                    <img
                                        src="https://htmldemo.net/lukani/lukani/assets/img/about/About_icon3.png"
                                        alt=""
                                        className={cx('chose-icon')}
                                        loading="lazy"
                                    />
                                    <div className={cx('chose-content')}>
                                        <h3>Online Support 24/7</h3>
                                        <p>
                                            Erat metus sodales eget dolor consectetuer, porta ut purus at et alias,
                                            nulla ornare velit amet
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('gallery-section')}>
                    <div className={cx('container')}>
                        <div className={cx('gallery-container')}>
                            <div className={cx('row', 'g-lg-5')}>
                                <div className={cx('col-lg-4', 'col-md-4', 'col-sm-12')}>
                                    <div className={cx('gallery-item')}>
                                        <img
                                            src="https://htmldemo.net/lukani/lukani/assets/img/about/about2.jpg"
                                            alt=""
                                            className={cx('gallery-image')}
                                            loading="lazy"
                                        />
                                        <div className={cx('gallery-content')}>
                                            <h3>What Do We Do?</h3>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                                illo inventore veritatis et quasi architecto
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('col-lg-4', 'col-md-4', 'col-sm-12')}>
                                    <div className={cx('gallery-item')}>
                                        <img
                                            src="https://htmldemo.net/lukani/lukani/assets/img/about/about3.jpg"
                                            alt=""
                                            className={cx('gallery-image')}
                                            loading="lazy"
                                        />
                                        <div className={cx('gallery-content')}>
                                            <h3>Our Mission</h3>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                                illo inventore veritatis et quasi architecto
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('col-lg-4', 'col-md-4', 'col-sm-12')}>
                                    <div className={cx('gallery-item')}>
                                        <img
                                            src="https://htmldemo.net/lukani/lukani/assets/img/about/about4.jpg"
                                            alt=""
                                            className={cx('gallery-image')}
                                            loading="lazy"
                                        />
                                        <div className={cx('gallery-content')}>
                                            <h3>History Of Us</h3>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                                illo inventore veritatis et quasi architecto
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('feedback')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'g-lg-5')}>
                            <div className={cx('col-lg-6', 'col-md-6', 'col-sm-12')}>
                                <div className={cx('feedback-item')}>
                                    <h3>What Can We Do For You ?</h3>
                                    <ul className={cx('faq-list')}>
                                        {FAQ_LIST.map((item, index) => (
                                            <li key={index} className={cx('faq-item')}>
                                                <div className={cx('faq-header')}>
                                                    <span>{item.title}</span>
                                                    <span className={cx('faq-icon-wrap')}>
                                                        <FontAwesomeIcon
                                                            icon={faCaretDown}
                                                            className={cx('faq-icon')}
                                                        />
                                                    </span>
                                                </div>
                                                <div className={cx('faq-content')}>
                                                    <p className={cx('padding-t')}>{item.opening}</p>
                                                    <p>{item.body}</p>
                                                    <p className={cx('padding-b')}>{item.end}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={cx('col-lg-6', 'col-md-6', 'col-sm-12')}>
                                <div className={cx('feedback-item')}>
                                    <Feedback smallTitle padding0 xSmallTitle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Brand />
        </MainLayout>
    );
}

export default About;
