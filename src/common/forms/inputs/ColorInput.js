import React from 'react'
import { SketchPicker } from 'react-color'

import styles from './ColorInput.module.scss'


export default function ColorInput({ name, value, onChange }) {

    const [openPicker, changePicker] = React.useState(false)

    const handleChangeComplete = (color) => {
        onChange(color.hex.toUpperCase())
        changePicker(!openPicker)
    }

    const handleInputChange = (e) => {
        onChange(e.target.value.toUpperCase())
    }

    return (
        <div className={styles.ColorWrapper}>
            <button
                className={styles.Button}
                onClick={() => changePicker(!openPicker)}
                style={{ backgroundColor: value }}
            />
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                className={styles.Input}
                name={name}
            />
            {openPicker && (
                <SketchPicker
                    name={name}
                    color={ value }
                    onChangeComplete={ handleChangeComplete }
                    onChange={(color) => onChange(color.hex)}
                    className={styles.ColorPicker}
                />
            )}
        </div>
    )
}
