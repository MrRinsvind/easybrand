import React from 'react'
import classnames from 'classnames'

import Typography from 'common/components/Typography'
import Button from 'common/components/Button.js'
import styles from './BuilderModal.module.scss'

BuilderModal.defaultProps = {
    show: false
}

export default function BuilderModal({show, handleEscButton}) {

    const WrapperClassNames = classnames(
        styles.Wrapper,
        show && styles[`Wrapper--show`]
    )

    return (
        <div className={WrapperClassNames}>
            <div className={styles.Content}>
                <Typography variant={'h2'} align={'center'} className={styles.Title}>Your signature template is not finished</Typography>
                <div className={styles.Actions}>
                    <Button onClick={handleEscButton} className={styles.BackButton} variant={'secondary'}>Back to editor</Button>
                    <Button className={styles.SaveButton} variant={'primary'}>Safe a Draft</Button>
                </div>
            </div>
        </div>
    )
}
