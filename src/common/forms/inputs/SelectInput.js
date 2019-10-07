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
<<<<<<< HEAD
                <MenuItem value={'Arial'}>Arial</MenuItem>
=======
                <MenuItem value={'Ariel'}>Ariel</MenuItem>
>>>>>>> BN-13 create styles part
                <MenuItem value={'Times New Roman'}>Times New Roman</MenuItem>
                <MenuItem value={'Roboto'}>Roboto</MenuItem>
            </Select>
        </div>
    )
}
