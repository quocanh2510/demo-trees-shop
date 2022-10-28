import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import styles from './Blog.module.scss';
import MainLayout from '~/layout/MainLayout';
import Brand from '~/layout/components/Brand';
import { BLOG_COMMENTS, BLOG_PAGE, BLOG_POSTS, CATEGORIES } from '~/fakeAPI';
import TitlePage from '~/components/TitlePage';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <MainLayout>
            <div className={cx('wrapper')}>
                <TitlePage>Blog</TitlePage>
                <div className={cx('blog-section')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-9', 'col-md-12', 'col-sm-12')}>
                                <div className={cx('blog-list')}>
                                    {BLOG_PAGE.map((item, index) => (
                                        <div key={index} className={cx('blog-item', { borderB: item.separate })}>
                                            <img src={item.thumb} alt="" className={cx('blog-thumb')} />
                                            <div className={cx('blog-content')}>
                                                <h2 className={cx('blog-title')}>
                                                    <FontAwesomeIcon icon={faPaperPlane} className={cx('title-icon')} />
                                                    {item.title}
                                                </h2>
                                                <p className={cx('blog-info')}>
                                                    <span>
                                                        {' '}
                                                        By <span className={cx('primary-color')}>{item.author}</span> /
                                                    </span>
                                                    <span>
                                                        {' '}
                                                        Date <span className={cx('primary-color')}>{item.date}</span> /
                                                    </span>
                                                    <span>
                                                        {' '}
                                                        Category:{' '}
                                                        <span className={cx('primary-color')}>{item.category}</span>
                                                    </span>
                                                </p>
                                                {item.audioSrc && (
                                                    <audio controls>
                                                        <source src={item.audioSrc} />
                                                    </audio>
                                                )}
                                                <div className={cx('blog-summary')}>{item.content}</div>
                                                <button className={cx('more-btn')}>Read more</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={cx('pagination')}>
                                    <span className={cx('current-page')}>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>next</span>
                                    <span>
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('col-lg-3', 'col-md-0', 'col-sm-0')}>
                                <div className={cx('sidebar')}>
                                    <ul className={cx('sidebar-list')}>
                                        <h4 className={cx('sidebar-list-name')}>RECENT COMMENTS</h4>
                                        {BLOG_COMMENTS.map((item, index) => (
                                            <li key={index} className={cx('sidebar-item')}>
                                                <img className={cx('author-avatar')} src={item.avatar} alt="" />
                                                <div className={cx('comment')}>
                                                    <span className={cx('comment-author', 'font-size-12')}>
                                                        {item.author}
                                                    </span>{' '}
                                                    <span className={cx('font-size-13')}>says:</span> {item.comment}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className={cx('sidebar-list')}>
                                        <h4 className={cx('sidebar-list-name')}>RECENT POSTS</h4>
                                        {BLOG_POSTS.map((item, index) => (
                                            <li key={index} className={cx('sidebar-item')}>
                                                <img className={cx('post-thumb')} src={item.thumb} alt="" />
                                                <div className={cx('post')}>
                                                    <span className={cx('post-title')}>{item.title}</span>
                                                    <span className={cx('font-size-13')}>{item.date}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className={cx('sidebar-list')}>
                                        <h4 className={cx('sidebar-list-name')}>CATEGORIES</h4>
                                        {CATEGORIES.map((item, index) => (
                                            <li key={index} className={cx('sidebar-item')}>
                                                <span className={cx('category-item')}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className={cx('sidebar-list')}>
                                        <h4 className={cx('sidebar-list-name')}>TAG PRODUCTS</h4>
                                        <div className={cx('tag-list')}>
                                            <li className={cx('tag-item')}>asian</li>
                                            <li className={cx('tag-item')}>brown</li>
                                            <li className={cx('tag-item')}>euro</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Brand />
        </MainLayout>
    );
}

export default Blog;
