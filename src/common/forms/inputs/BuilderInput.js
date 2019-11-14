import React from 'react'
import toBe from 'prop-types'
import classnames from 'classnames'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import styles from './BuilderInput.module.scss'
import { ReactComponent as IconEdit } from 'assets/edit-icon.svg'
import { ReactComponent as IconTriangle } from 'assets/triangle.svg'
import { ReactComponent as IconLock } from 'assets/tooltiop-lock-icon.svg'
import { ReactComponent as IconVisibility } from 'assets/ic_visibility.svg'



TextInput.toBe = {
    type: toBe.string,
    name: toBe.string,
    placeholder: toBe.string,
    error: toBe.bool,
}

TextInput.defaultProps = {
    type: 'text',
    error: false,
    name: null,
    placeholder: '',
}

const inputIcons = {
    "edit": IconEdit,
    "invisible": IconLock,
    "view": IconVisibility,
}


export default function TextInput({
        onChange,
        value,
        type,
        name,
        meta,
        onFocus,
        placeholder,
        ...restProps
    }) {

    const { active } = meta

    const handleChange = (e) => {
        onChange({
            ...value,
            text: e.target.value,
        })
    }

    return (
        <div className={classnames(
            styles.InputWrapper,
            {
                [styles['InputWrapper--active']]: active,
                [styles['InputWrapper--disable']]: value.status !== 'edit',
            }
        )}>
            <input
                onFocus={onFocus}
                type={type}
                value={value.text}
                onChange={handleChange}
                name={name}
                className={styles.InputField}
                autoComplete="off"
                placeholder={placeholder}
                disabled={value.status === 'view'}
            />
        </div>
    )
}
