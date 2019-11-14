import React from 'react'

import { ReactComponent as UploadImage } from 'assets/wave.svg'
import styles from './HelpGuide.module.scss'


export default function HelpGuide({returnToBuilder}) {
    return (
        <div className={styles.GuideWrapper}>
            <button onClick={returnToBuilder}>
                close
            </button>
            <UploadImage className={styles.Wave}/>
        </div>
    )
}
