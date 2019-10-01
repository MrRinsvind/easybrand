import React, {Fragment} from 'react'
import Typography from 'common/components/Typography'
import styles from './Hello.module.scss'
import thinkingMan from 'assets/thinking-man.svg'
import TopBar from "../common/layouts/TopBar"

export default function Hello() {
    return (
        <Fragment>
            <TopBar/>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <img className={styles.image} src={thinkingMan} alt="thinking man"/>
                    <Typography variant="h1" align="center" className={styles.heading}>
                        Let’s get started!
                    </Typography>
                    <Typography variant="body" align="center" className={styles.description}>
                        This is gonna be your first template! Your colleagues will be able to apply this masterpiece to their E-mail Signatures.
                    </Typography>
                    <button className={styles.btn}>
                        Create a template
                    </button>
                </div>
            </div>
        </Fragment>
    )
}