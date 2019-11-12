import React from 'react'
import classnames from 'classnames'

import Typography from 'common/components/Typography'
import Button from 'common/components/Button.js'
import styles from './BuilderModal.module.scss'
import closeIcon from 'assets/x-shape.svg'

BuilderModal.defaultProps = {
    show: false
}

export default function BuilderModal({show, handleDiscard, handleEscButton, handleSubmit, onSubmit}) {

    const WrapperClassNames = classnames(
        styles.Wrapper,
        show && styles[`Wrapper--show`]
    )

    return (
        <div className={WrapperClassNames}>
            <div className={styles.Content}>
                <Typography variant={'h2'} align={'center'} className={styles.Title}>Your signature template is not finished</Typography>
                <div className={styles.Actions}>
                    <Button onClick={handleDiscard} className={styles.BackButton} variant={'secondary'}>Discard</Button>
                    <Button onClick={handleSubmit(onSubmit)} className={styles.SaveButton} variant={'primary'}>Safe a Draft</Button>
                </div>
                <button onClick={handleEscButton} className={styles.CloseButton}>
                    <img src={closeIcon} alt="close"/>
                </button>
            </div>
        </div>
    )
}
