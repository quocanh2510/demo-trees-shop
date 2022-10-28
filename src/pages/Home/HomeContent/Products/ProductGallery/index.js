import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { faFacebookF, faGoogle, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircleExclamation, faClose } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './ProductGallery.module.scss';
import ModalWrapper from '~/components/Modal';
import { useStore } from '~/globalState/hooks';
import { addProductCart } from '~/globalState/actions';

const cx = classNames.bind(styles);

function ProductGallery({ data, clickToClose, clickToPrev, clickToNext }) {
    const [, dispatch] = useStore();

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const handleAddToCart = (data) => {
        dispatch(addProductCart(data));

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
        <ModalWrapper className={cx('wrapper')}>
            <button className={cx('slide-btn')} onClick={clickToPrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className={cx('close-btn')} onClick={clickToClose}>
                <FontAwesomeIcon icon={faClose} />
            </button>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-5', 'col-md-5', 'col-sm-12')}>
                        <div className={cx('image-wrap')}>
                            <img src={data.image} alt="" className={cx('product-img')} />
                        </div>
                    </div>
                    <div className={cx('col-lg-7,', 'col-md-7', 'col-sm-12')}>
                        <div className={cx('content')}>
                            <h3 className={cx('name')}>{data.name}</h3>
                            <div className={cx('price')}>
                                <span className={cx('price-current')}>£{data.priceCurrent}</span>
                                <span className={cx('price-old')}>£{data.priceOld}</span>
                            </div>
                            <div className={cx('description', 'hide-on-mobile')}>{data.description}</div>
                            <div className={cx('varients')}>
                                <h5>SIZE</h5>
                                <select className={cx('selects')}>
                                    <option select="true">s</option>
                                    <option>m</option>
                                    <option>l</option>
                                    <option>xl</option>
                                </select>
                            </div>
                            <div className={cx('varients')}>
                                <h5>COLOR</h5>
                                <select className={cx('selects')}>
                                    <option select="true">brown</option>
                                    <option>purple</option>
                                    <option>black</option>
                                    <option>pink</option>
                                    <option>orange</option>
                                </select>
                            </div>
                            {currentUser ? (
                                <button className={cx('add-btn')} onClick={() => handleAddToCart(data)}>
                                    ADD TO CART
                                </button>
                            ) : (
                                <>
                                    <button className={cx('add-btn', 'disable')}>ADD TO CART</button>
                                    <div className={cx('noitice')}>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                        <span className={cx('notice-message')}>Please login to shopping</span>
                                    </div>
                                </>
                            )}
                            <div className={cx('share', 'hide-on-mobile')}>
                                <h4>SHARE THIS PRODUCT</h4>
                                <div className={cx('social-list')}>
                                    <a className={cx('social-item', 'facebook')} href="/">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a className={cx('social-item', 'twitter')} href="/">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a className={cx('social-item', 'pinterest')} href="/">
                                        <FontAwesomeIcon icon={faPinterestP} />
                                    </a>
                                    <a className={cx('social-item', 'google')} href="/">
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </a>
                                    <a className={cx('social-item', 'linkedin')} href="/">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className={cx('slide-btn')} onClick={clickToNext}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </ModalWrapper>
    );
}

ProductGallery.propTypes = {
    data: PropTypes.object,
    clickToClose: PropTypes.func,
    clickToPrev: PropTypes.func,
    clickToNext: PropTypes.func,
};

export default ProductGallery;
