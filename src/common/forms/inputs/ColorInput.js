import React from 'react'
import { SketchPicker } from 'react-color'

import Button from 'common/components/Button'
import styles from './ColorInput.module.scss'


export default function ColorInput({ name, value, onChange }) {

    const [openPicker, changePicker] = React.useState(false)

    const handleChangeComplete = (color) => {
        onChange(color.hex.toUpperCase())
    }

    const handleInputChange = (e) => {
        onChange(e.target.value.toUpperCase())
    }

    const closePicker = () => {
        changePicker(!openPicker)
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
                <div className={styles.PickerWrapper}>
                    <SketchPicker
                        name={name}
                        color={ value }
                        onChangeComplete={ handleChangeComplete }
                        onChange={(color) => onChange(color.hex)}
                        className={styles.ColorPicker}
                    />
                    <Button
                        className={styles.CloseButton}
                        onClick={closePicker}
                    >
                        Close
                    </Button>
                </div >
            )}
        </div>
    )
}
