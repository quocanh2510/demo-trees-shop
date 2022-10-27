import { useState } from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { ToastContainer } from 'react-toastify';

import Tittle from '~/components/Tittle';
import { PRODUCTS } from '~/components/Constants';
import styles from './Products.module.scss';
import ProductGallery from './ProductGallery';
import Overlay from '~/components/Overlay';

const cx = classNames.bind(styles);

function Products() {
    const [index, setIndex] = useState();
    const [openGallery, setOpenGallery] = useState(false);

    const handleOpenGallery = (id) => {
        setIndex(id);
        setOpenGallery(true);
    };

    const handleCloseGallery = () => {
        setOpenGallery(false);
    };

    const handlePrevGallery = () => {
        if (index <= 0) {
            setIndex(PRODUCTS.length - 1);
        } else {
            setIndex((prev) => prev - 1);
        }
    };

    const handleNextGallery = () => {
        if (index >= PRODUCTS.length - 1) {
            setIndex(0);
        } else {
            setIndex((prev) => prev + 1);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Tittle>Featured Products</Tittle>
            <div className={cx('container-fluid')}>
                <div className={cx('row')}>
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className={cx('col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'col-xl-2')}
                        >
                            <div className={cx('item')}>
                                <div className={cx('thumb')}>
                                    <img src={product.image} alt="" />
                                    <span className={cx('discount')}>{product.discount}</span>
                                    <div className={cx('interactive')}>
                                        <button
                                            className={cx('see-more')}
                                            onClick={() => handleOpenGallery(product.id)}
                                        >
                                            See more{' '}
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('see-more-icon')} />
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('content')}>
                                    <div className={cx('rating')}>
                                        <FontAwesomeIcon className={cx('rating-icon')} icon={faStar} />
                                        <FontAwesomeIcon className={cx('rating-icon')} icon={faStar} />
                                        <FontAwesomeIcon className={cx('rating-icon')} icon={faStar} />
                                        <FontAwesomeIcon className={cx('rating-icon')} icon={faStar} />
                                        <FontAwesomeIcon className={cx('rating-icon')} icon={faStar} />
                                    </div>
                                    <h4 className={cx('name')}>{product.name}</h4>
                                    <div className="price">
                                        <span className={cx('new-price')}>£{product.priceCurrent}</span>
                                        <span className={cx('old-price')}>£{product.priceOld}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {openGallery && (
                <Overlay onClick={handleCloseGallery}>
                    <ProductGallery
                        data={PRODUCTS[index]}
                        clickToClose={handleCloseGallery}
                        clickToPrev={handlePrevGallery}
                        clickToNext={handleNextGallery}
                    />
                </Overlay>
            )}

            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default Products;
