import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Cart.module.scss';
import ModalWrapper from '~/components/Modal';

const cx = classNames.bind(styles);

function Cart({ handleCloseCart }) {
    const [productCart, setProductCart] = useState(() => {
        const initialProducts = JSON.parse(localStorage.getItem('products')) ?? [];
        return initialProducts;
    });

    const handleDeleteCartProduct = (id) => {
        setProductCart(() => {
            const newProducts = productCart.filter((item, index) => index !== id);
            const jsonProducts = JSON.stringify(newProducts);
            localStorage.setItem('products', jsonProducts);
            return newProducts;
        });
    };

    let totalPrice = productCart.reduce((acc, product) => {
        return acc + product.price;
    }, 0);

    return (
        <ModalWrapper className={cx('modal')}>
            <div className={cx('header')}>
                <span className={cx('title')}>
                    Cart: <span className={cx('quantity')}>{productCart.length} product</span>
                </span>
                <FontAwesomeIcon className={cx('close-btn')} icon={faClose} onClick={handleCloseCart} />
            </div>
            <ul className={cx('cart-list')}>
                {productCart.map((product, index) => (
                    <li key={index} className={cx('cart-item')}>
                        <img src={product.image} alt="" />
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>
                                <div className={cx('cart-item-name')}>{product.name}</div>
                            </div>
                            <span className={cx('content-body')}>
                                1 x <span className={cx('price')}>£{product.priceCurrent}</span>
                            </span>
                        </div>
                        <FontAwesomeIcon
                            icon={faClose}
                            className={cx('delete-item-btn')}
                            onClick={() => handleDeleteCartProduct(index)}
                        />
                    </li>
                ))}
            </ul>
            <div className={cx('footer')}>
                <div className={cx('total-price')}>
                    <span>Total:</span>
                    <span>£{totalPrice}</span>
                </div>
                <button className={cx('cart-btn')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>VIEW CART</span>
                </button>
            </div>
        </ModalWrapper>
    );
}

export default Cart;
