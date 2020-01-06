import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

import styles from './SelectInput.module.scss'


export default function SelectInput({ onChange, value, name }) {

    const handleChange = event => {
        onChange(event.target.value)
    }

    return (
        <div className={styles.Wrapper}>
            <Select
                value={value}
                onChange={handleChange}
                fullWidth={true}
                inputProps={{
                    name: name,
                    id: name,
                }}
                classes={{
                    root: styles.Root,
                    select: styles.Select,
                    icon: styles.Icon
                }}
            >
                <MenuItem value={'Arial'}>Arial</MenuItem>
                <MenuItem value={'Times New Roman'}>Times New Roman</MenuItem>
                <MenuItem value={'Verdana'}>Verdana</MenuItem>
                <MenuItem value={'Georgia'}>Georgia</MenuItem>
                <MenuItem value={'Tahoma'}>Tahoma</MenuItem>
                <MenuItem value={'Garamond'}>Garamond</MenuItem>
            </Select>
        </div>
    )
}
