import Feedback from './Feedback';
import Introduce from './Introduce';
import Offer from './Offer';
import Products from './Products';
import ShippingArea from './ShippingArea';
import Slide from './Slide';
import styles from './Body.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function BodyApp() {
    return (
        <div className={cx('wrapper')} id="body-app">
            <Slide />
            <Introduce />
            <ShippingArea />
            <Products />
            <Feedback />
            <Offer />
        </div>
    );
}

export default BodyApp;
