import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Offer.module.scss';
import Tittle from '~/components/Title';

const cx = classNames.bind(styles);

function Offer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <Tittle>
                        Get <span>20% Off</span> Your Next Order
                    </Tittle>
                    <form className={cx('form')}>
                        <FontAwesomeIcon className={cx('email-icon')} icon={faEnvelope} />
                        <input className={cx('form-input')} placeholder="Enter your email" />
                        <button className={cx('submit')}>SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Offer;
