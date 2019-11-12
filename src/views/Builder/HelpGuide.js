import React from 'react'

import styles from './HelpGuide.module.scss'


export default function HelpGuide({returnToBuilder}) {
    return (
        <div className={styles.GuideWrapper}>
            <button onClick={returnToBuilder}>
                close
            </button>
        </div>
    )
}
