import { useState } from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Tittle from '~/components/Tittle';
import { PRODUCTS } from '~/components/Constants';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products() {
    const [productCart, setProductCart] = useState([]);

    const handleAddToCart = (product) => {
        setProductCart((prev) => {
            const newProducts = [...prev, product];
            const jsonProducts = JSON.stringify(newProducts);
            localStorage.setItem('products', jsonProducts);
            return newProducts;
        });

        toast.success('Product added to cart!', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
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
                                        <div
                                            className={cx('interactive-item')}
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            <FontAwesomeIcon icon={faCartPlus} />
                                        </div>
                                        <div className={cx('interactive-item')}>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </div>
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
