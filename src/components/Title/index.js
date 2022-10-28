import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ children, className }) {
    return <h2 className={cx('wrapper', className)}>{children}</h2>;
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Title;
