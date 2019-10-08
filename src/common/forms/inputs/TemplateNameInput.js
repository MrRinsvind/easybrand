import React from 'react'

import styles from './TemplateNameInput.module.scss'

TextInput.defaultProps = {
    type: 'text',
    placeholder: 'test input',
}

export default function TextInput({
        name,
        onChange,
        value,
        placeholder
    }) {

    const handleChange = (e) => {
        onChange(e.target.value)
    }

    return (
            <input
                className={styles.TestInput}
                type="text"
                placeholder={placeholder}
                autoComplete="off"
                value={value}
                name={name}
                onChange={handleChange}
            />
    )
}
