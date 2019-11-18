import React from 'react'

import { DATA_GUIDE } from 'common/constants/DataGuide'
import Typography from 'common/components/Typography'
import closeIcon from 'assets/x-shape.svg'

import { ReactComponent as WaveAnimationComponent } from 'assets/wave.svg'
import styles from './HelpGuide.module.scss'

export default function HelpGuide({returnToBuilder, anchor}) {

    React.useEffect(() => {
        try {
            document.querySelector(`#${anchor}`).scrollIntoView()
        } catch (e) {
            console.log('anchor element not found in dom:(')
        }

    }, [anchor])

    const ids = [
        "gmail", "protonmail", "outlook", "apple", "yahoo"
    ]

    return (
        <div className={styles.GuideWrapper}>
            <button onClick={returnToBuilder} className={styles.CloseButton}>
                <img src={closeIcon} alt="close"/>
                <Typography className={styles[`CloseButton__Text`]} variant={'subhead'}>esc</Typography>
            </button>
                <div className={styles.GuidePage}>
                    <div className={styles.GuideContent}>
                        {DATA_GUIDE.map((sectionItem, sectionIndex) => (
                            <section className={styles.Section} key={sectionIndex} id={ids[sectionIndex]}>
                                <Typography className={styles.Heading} variant={'h3'}>{sectionItem.title}</Typography>
                                <ol className={styles.StepList}>
                                    {sectionItem.list.map((listItem, listIndex) => (
                                        <li className={styles.StepItem} key={listIndex}>
                                            <Typography variant={'body'}>{listItem}</Typography>
                                        </li>
                                    ))}
                                </ol>
                                {sectionItem.img && (
                                    <img className={styles.GuideImage} src={sectionItem.img} alt="mailer logo"/>
                                )}
                            </section>
                        ))}
                    </div>
            </div>
            <WaveAnimationComponent className={styles.Wave}/>
        </div>
    )
}
