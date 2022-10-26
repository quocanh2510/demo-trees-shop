import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { useStore } from '~/store/hooks';
import styles from './Cart.module.scss';
import ModalWrapper from '~/components/Modal';
import { deleteProductCart } from '~/store/actions';

const cx = classNames.bind(styles);

function Cart({ handleCloseCart }) {
    const [state, dispatch] = useStore();
    const { cartProducts } = state;

    const handleDeleteCartProduct = (id) => {
        dispatch(deleteProductCart(id));
    };

    let totalPrice = cartProducts.reduce((acc, product) => {
        return acc + product.price;
    }, 0);

    return (
        <ModalWrapper className={cx('modal')}>
            <div className={cx('header')}>
                <span className={cx('title')}>
                    Cart: <span className={cx('quantity')}>{cartProducts.length} product</span>
                </span>
                <FontAwesomeIcon className={cx('close-btn')} icon={faClose} onClick={handleCloseCart} />
            </div>
            <ul className={cx('cart-list')}>
                {cartProducts.map((product, index) => (
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

Cart.propTypes = {
    handleCloseCart: PropTypes.func,
};

export default Cart;
