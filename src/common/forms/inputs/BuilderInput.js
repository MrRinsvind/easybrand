import React from 'react'
import toBe from 'prop-types'
import classnames from 'classnames'

import styles from './BuilderInput.module.scss'

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


export default function TextInput({
        onChange,
        value,
        type,
        name,
        meta,
        onFocus,
        placeholder,
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
                [styles['InputWrapper--active']]: active
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
            />
        </div>
    )
}
