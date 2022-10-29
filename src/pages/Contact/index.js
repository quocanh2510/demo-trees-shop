/* eslint-disable jsx-a11y/iframe-has-title */
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

import styles from './Contact.module.scss';
import MainLayout from '~/layout/MainLayout';
import Brand from '~/layout/components/Brand';
import TittlePage from '~/components/TitlePage';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <MainLayout>
            <div className={cx('wrapper')}>
                <TittlePage>Contact US</TittlePage>
                <div className={cx('map-section')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-12')}>
                                <div className={cx('map')}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.837764257694!2d-74.01511151974994!3d40.71274933980175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1b00d6b631%3A0x85ad74a571b11238!2sThe%20Rink%20at%20Brookfield%20Place%20with%20Gregory%20%26%20Petukhov!5e0!3m2!1svi!2s!4v1666944163885!5m2!1svi!2s"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('contact-section')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'g-lg-5', 'g-md-5')}>
                            <div className={cx('col-lg-6', 'col-md-6', 'col-sm-12')}>
                                <div className={cx('contact', 'mg-b')}>
                                    <h3 className={cx('title')}>Contact Us</h3>
                                    <p className={cx('content')}>
                                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
                                        lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram
                                        anteposuerit litterarum formas human. qui sequitur mutationem consuetudium
                                        lectorum. Mirum est notare quam
                                    </p>
                                    <div className={cx('contact-item')}>
                                        <FontAwesomeIcon className={cx('contact-icon')} icon={faMapLocationDot} />
                                        Address : No 40 Baria Sreet 133/2 NewYork City
                                    </div>
                                    <div className={cx('contact-item')}>
                                        <FontAwesomeIcon className={cx('contact-icon')} icon={faEnvelope} />
                                        <a href="/contact">demo@example.com</a>
                                    </div>
                                    <div className={cx('contact-item')}>
                                        <FontAwesomeIcon className={cx('contact-icon')} icon={faPhone} />
                                        <a href="tel:0123456789">0123456789</a>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-lg-6', 'col-md-6', 'col-sm-12')}>
                                <form className={cx('form', 'contact')}>
                                    <h3 className={cx('title')}>Tell Us Your Project</h3>
                                    <div className={cx('form-group')}>
                                        <label htmlFor="name">Your Name (required)</label>
                                        <input required type="text" placeholder="Name *" id="name" />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label htmlFor="name">Your Email (required)</label>
                                        <input required type="email" placeholder="Email *" id="name" />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label htmlFor="name">Subject</label>
                                        <input type="text" placeholder="Subject *" id="name" />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label htmlFor="name">Your Message</label>
                                        <textarea type="text" placeholder="Message *" id="name" />
                                    </div>
                                    <button className={cx('submit')}>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Brand />
        </MainLayout>
    );
}

export default Contact;
