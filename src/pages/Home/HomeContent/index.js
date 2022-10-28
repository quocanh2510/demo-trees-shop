import Feedback from '~/layout/components/Feedback';
import Brand from '~/layout/components/Brand';
import Introduce from './Introduce';
import Offer from './Offer';
import Products from './Products';
import ShippingArea from './ShippingArea';
import Slide from './Slide';
import styles from './HomeContent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HomeContent() {
    return (
        <div className={cx('wrapper')} id="Home-content">
            <Slide />
            <Introduce />
            <ShippingArea />
            <Products />
            <Feedback />
            <Brand />
            <Offer />
        </div>
    );
}

export default HomeContent;
