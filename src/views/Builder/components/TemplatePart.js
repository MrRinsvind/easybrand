import React from 'react'
import classnames from 'classnames'

import styles from '../Builder.module.scss'
import ImageTemplate1 from 'assets/email-template-1.svg'
import ImageTemplate2 from 'assets/email-template-2.svg'
import ImageTemplate3 from 'assets/email-template-3.svg'
import ImageTemplate4 from 'assets/email-template-4.svg'
import ImageTemplate5 from 'assets/email-template-5.svg'
import ImageTemplate6 from 'assets/email-template-6.svg'
import { ReactComponent as IconCheck } from 'assets/x-circle.svg'
import Typography from 'common/components/Typography'

const TemplatePartData = [
    {
        img: ImageTemplate1,
        label: "Template 1",
    },
    {
        img: ImageTemplate2,
        label: "Template 2",
    },
    {
        img: ImageTemplate3,
        label: "Template 3",
    },
    {
        img: ImageTemplate4,
        label: "Template 4",
    },
    {
        img: ImageTemplate5,
        label: "Template 5",
    },
    {
        img: ImageTemplate6,
        label: "Template 6",
    },
]


export default function TemplatePart({ selectType, toggleType }) {
    return (
        <div className={styles.TemplatePartWrapper}>
            { TemplatePartData.map((templateItem, itemInd) => (
                <React.Fragment key={itemInd}>
                    <Typography variant="h4" className={styles.TemplatePartHeading}>
                        {templateItem.label}
                    </Typography>
                    <div
                        className={classnames(
                            styles.TemplatePartItem,
                            {
                                [styles['TemplatePartItem--active']]: selectType === itemInd
                            },
                        )}
                        style={{ backgroundImage: `url(${templateItem.img})` }}
                        onClick={() => toggleType(itemInd)}
                    >
                        <IconCheck/>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}
