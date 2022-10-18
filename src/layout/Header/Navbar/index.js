import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import PopperWrapper from '~/components/Popper';
import styles from './Navbar.module.scss';
import NavItem from './NavItem';
import { HOME_SUBNAV, SHOP_SUBNAV, BLOG_SUBNAV, PAGES_SUBNAV } from '~/components/Constants';

const cx = classNames.bind(styles);

function Navbar() {
    const homeSubnav = (attrs) => (
        <PopperWrapper>
            <div tabIndex="-1" {...attrs}>
                {HOME_SUBNAV.map((item, index) => (
                    <div className={cx('subnav-item')} key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </PopperWrapper>
    );

    const shopSubnav = (attrs) => (
        <PopperWrapper>
            <div className={cx('subnav-lists')} tabIndex="-1" {...attrs}>
                {SHOP_SUBNAV.map((item, index) => (
                    <div className={cx('subnav-list')} key={index}>
                        <strong className={cx('subnav-title')}>{item.title}</strong>
                        {item.datas.map((data, index) => (
                            <div className={cx('subnav-item')} key={index}>
                                {data}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </PopperWrapper>
    );

    const blogSubnav = (attrs) => (
        <PopperWrapper>
            <div tabIndex="-1" {...attrs}>
                {BLOG_SUBNAV.map((item, index) => (
                    <div className={cx('subnav-item')} key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </PopperWrapper>
    );

    const pagesSubnav = (attrs) => (
        <PopperWrapper>
            <div tabIndex="-1" {...attrs}>
                {PAGES_SUBNAV.map((item, index) => (
                    <div className={cx('subnav-item')} key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </PopperWrapper>
    );

    return (
        <nav className={cx('navbar')}>
            <Tippy placement="bottom" interactive render={homeSubnav}>
                <NavItem title="HOME" icon={faAngleDown} />
            </Tippy>
            <Tippy placement="bottom" interactive render={shopSubnav}>
                <NavItem title="SHOP" icon={faAngleDown} />
            </Tippy>
            <Tippy placement="bottom" offset={[70, 10]} interactive render={blogSubnav}>
                <NavItem title="BLOG" icon={faAngleDown} />
            </Tippy>
            <Tippy placement="bottom" offset={[70, 10]} interactive render={pagesSubnav}>
                <NavItem title="PAGES" icon={faAngleDown} />
            </Tippy>
            <NavItem title="CONTACT US" />
        </nav>
    );
}

export default Navbar;
