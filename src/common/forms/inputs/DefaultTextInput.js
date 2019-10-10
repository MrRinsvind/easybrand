import React from 'react'
import classnames from 'classnames'

import styles from './DefaultTextInput.module.scss'


TextInput.defaultProps = {
    type: "text",
    placeholder: "",
    autoComplete: "off"
}

export default function TextInput({
        name,
        onChange,
        value,
        placeholder,
        type,
        autoComplete,
        settingStyle,
    }) {

    const handleChange = (e) => {
        onChange(e.target.value)
    }

    return (
            <input
                className={classnames({
                    [styles.TemplateInput]: !settingStyle,
                    [styles.SettingInput]: settingStyle,
                })}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                name={name}
                onChange={handleChange}
            />
    )
}
