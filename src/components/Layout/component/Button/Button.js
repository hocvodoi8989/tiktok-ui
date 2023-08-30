import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, upload, onClick, ...passProps }) {
    let Comp = 'button';

    const props = {
        onClick,
        to,
        href,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        upload,
    });

    return (
        <Comp classNames={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
