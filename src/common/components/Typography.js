import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Typography.module.scss'


const variantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subhead: 'span',
    body: 'p',
    caption: 'span'
}

Typography.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subhead', 'body', 'caption']),
    align: PropTypes.oneOf(['left', 'center', 'right']),
    bold: PropTypes.bool
}

Typography.defaultProps = {
    variant: 'body',
    align: 'left',
    bold: false
}

export default function Typography({ variant, className, bold, align, element, ...props }) {
    const typographyClassNames = classNames(
        styles.typography,
        styles[variant],
        {
            [styles.bold]: bold
        },
        styles[`align--${align}`],
        className,
    )

    return React.createElement(
        element || variantMapping[variant],
        {
            ...props,
            className: typographyClassNames
        }
    )
}
