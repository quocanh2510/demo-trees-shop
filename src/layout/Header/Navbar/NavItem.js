import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const NavItem = forwardRef(({ title, icon }, ref) => {
    return (
        <div className={cx('nav-item')} ref={ref}>
            <span className={cx('title')}>{title}</span>
            {icon && <FontAwesomeIcon icon={icon} className={cx('more')} />}
        </div>
    );
});

NavItem.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.object,
};

export default NavItem;
