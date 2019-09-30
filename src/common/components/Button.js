import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'


Button.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'plain', 'outline', 'error'])
}

Button.defaultProps = {
    size: 'medium',
    variant: 'primary'
}

export default function Button({
        children,
        variant,
        size,
        icon: Icon,
        rootClassName,
        to,
        ...props
    }) {
    const buttonClassName = classnames(
        rootClassName,
        styles.root,
        styles[variant],
        styles[size]
        ),
        icon = Icon
            ? <span className={styles.icon}>{Icon}</span>
            : null
    return React.createElement(
        to ? Link : `button`,
        {
            ...props,
            to,
            className: buttonClassName
        },
        [icon, children])
}
