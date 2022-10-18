import classNames from 'classnames/bind';
import Tittle from '~/components/Tittle';
import styles from './Introduce.module.scss';

const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className={cx('container')}>
            <div className={cx('row')}>
                <div className={cx('col', 'col-sm-12', 'col-md-12', 'col-lg-12', 'col-xl-12')}>
                    <div className={cx('wrapper')}>
                        <Tittle>Lukani Store</Tittle>
                        <p>
                            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas
                            sedurna malesuada consectetuer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduce;
