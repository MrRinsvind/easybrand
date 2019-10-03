import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Button.module.scss'
import { Link } from 'react-router-dom'


Button.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['primary', 'secondary'])
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
        className,
        to,
        key,
        ...props
    }) {
    const buttonClassName = classnames(
        className,
        styles.root,
        styles[variant],
        styles[size]
        ),
        icon = Icon
            ? <span className={styles.icon} key={key || 'default'}>{Icon}</span>
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
