import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, mobile, className }) {
    const handleScrollTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <NavLink
            end
            onClick={handleScrollTop}
            to={to}
            className={(nav) => cx('menu-item', { active: nav.isActive }, className)}
        >
            <span className={cx('title')}>{title}</span>
            {mobile || <span className={cx('underline')} />}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    mobile: PropTypes.bool,
    classNames: PropTypes.string,
};

export default MenuItem;
