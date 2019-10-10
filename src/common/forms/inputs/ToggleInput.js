import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

import styles from './ToggleInput.module.scss'


export default function TextInput({
    name,
    onChange,
    value,
    contentText,
}) {

    const handleChange = event => {
        onChange(event.target.checked)
    }

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch
                        checked={!!value}
                        onChange={handleChange}
                        value={!!value}
                        name={name}
                        classes={{
                            thumb: styles.Thumb,
                            track: styles.Track,
                            checked: styles.Checked,
                            switchBase: styles.SwitchBase
                        }}
                    />
                }
                label={contentText}
                labelPlacement="start"
                classes={{
                    root: styles.Root,
                    label: styles.Label,
                }}
            />
        </FormGroup>
    )
}
