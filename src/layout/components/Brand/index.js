import classNames from 'classnames/bind';

import { BRAND } from '~/fakeAPI';
import styles from './Brand.module.scss';

const cx = classNames.bind(styles);

function Brand() {
    return (
        <div className={cx('wrapper')}>
            {BRAND.map((item, index) => (
                <div key={index} className={cx('item')}>
                    <img src={item} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Brand;
