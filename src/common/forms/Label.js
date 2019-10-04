import React from 'react'

import Typography from 'common/components/Typography'
import styles from './Style.module.scss'


export default function Label({ children }) {
    return (
        <label>
            <Typography variant='body' className={styles.LabelWrapper}>
                { children }
            </Typography>
        </label>
    )
}
