import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import { Wrapper as PopperWrapper } from '../Popper';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Accountitem from '../Accountitem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => [setSearchResult([1])]);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-lable')}>Accounts</h4>
                                <Accountitem />
                                <Accountitem />
                                <Accountitem />
                                <Accountitem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button>
                        <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                        Upload
                    </Button>
                    {/* <button className={cx('upload')}>
                        <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                        <span className={cx('upload-title')}>Upload</span>
                    </button> */}
                    <Tippy
                        arrow
                        render={(attrs) => (
                            <div className={cx('message-title')} tabIndex="-1" {...attrs}>
                                Messages
                            </div>
                        )}
                    >
                        <FontAwesomeIcon className={cx('message')} icon={faPaperPlane} />
                    </Tippy>
                    <div className={cx('inbox')}>
                        <FontAwesomeIcon className={cx('inbox-icon')} icon={faMessage} />
                        <div className={cx('noti')}>9</div>
                    </div>

                    <img className={cx('user')} src={images.user} alt="user" />
                </div>
            </div>
        </header>
    );
}

export default Header;
