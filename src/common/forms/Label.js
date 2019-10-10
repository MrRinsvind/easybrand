import React from 'react'
import classnames from 'classnames'

import Typography from 'common/components/Typography'
import styles from './Style.module.scss'


export default function Label({ children, settingStyle }) {
    return (
        <label>
            <Typography
                variant='body'
                className={classnames({
                    [styles.LabelWrapper]: !settingStyle,
                    [styles.LabelSettingWrapper]: settingStyle,
                })}
            >
                { children }
            </Typography>
        </label>
    )
}
