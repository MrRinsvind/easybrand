import React from 'react'
import classnames from 'classnames'

import styles from '../Builder.module.scss'
import Typography from 'common/components/Typography'
import { ColorField, SliderField, SelectField } from 'common/forms'

export default function StylePart({ }) {
    return (
        <div>
            <ColorField
                name="themeColor"
                label="Theme Color"
            />
            <ColorField
                name="textColor"
                label="Text Color"
            />
            <ColorField
                name="linkColor"
                label="Links Color"
            />
            <Typography variant="h3" className={classnames(styles.AsideContentHeading, 'mt-5')}>
                Brand Fonts
            </Typography>
            <SelectField
                name="font"
                label="Select font"
            />
            <SliderField
                name="size"
                label="Font size"
            />
        </div>
    )
}
