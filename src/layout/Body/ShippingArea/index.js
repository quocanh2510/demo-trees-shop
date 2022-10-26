import classNames from 'classnames/bind';
import styles from './ShippingArea.module.scss';

const cx = classNames.bind(styles);

function ShippingArea() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-xs-12', 'col-sm-12', 'col-md-6', 'col-lg-6', 'col-xl-4')}>
                        <div className={cx('item')}>
                            <img src="https://htmldemo.net/lukani/lukani/assets/img/about/shipping1.png" alt="" />
                            <div className={cx('info')}>
                                <h2>Free Delivery</h2>
                                <p>Free shipping around the world for all orders over $120</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-xs-12', 'col-sm-12', 'col-md-6', 'col-lg-6', 'col-xl-4')}>
                        <div className={cx('item', 'tablet-border-none')}>
                            <img src="https://htmldemo.net/lukani/lukani/assets/img/about/shipping2.png" alt="" />
                            <div className={cx('info')}>
                                <h2>Safe Payment</h2>
                                <p>With our payment gateway, don't worry about your information</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-xs-12', 'col-sm-12', 'col-md-6', 'col-lg-6', 'col-xl-4')}>
                        <div className={cx('item', 'border-none')}>
                            <img src="https://htmldemo.net/lukani/lukani/assets/img/about/shipping3.png" alt="" />
                            <div className={cx('info')}>
                                <h2>Friendly Services</h2>
                                <p>You have 30-day return guarantee for every single order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShippingArea;
