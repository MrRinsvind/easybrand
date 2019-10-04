import React from 'react'
import classnames from 'classnames'

import styles from './Builder.module.scss'
import Typography from 'common/components/Typography'
import { BUILDER_TABS } from './constants/BuilderTabs'

export default function BuilderAside({ selectedTab, toggleTab, selectType, toggleType }) {
    const ContentAside = BUILDER_TABS[selectedTab].component
    return (
        <aside className={styles.BuilderAside}>
            <div className={styles.TabAsideNavigation}>
                {BUILDER_TABS.map((tab, tabInd) => (
                    <div
                        className={classnames(
                            styles.TabAsideNavigationItem,
                            {
                                [styles['TabAsideNavigationItem--active']]: selectedTab === tabInd
                            },

                        )}
                        onClick={() => toggleTab(tabInd)}
                        key={tab.id}
                    >
                        <tab.iconTab fill="white"/>
                        <Typography variant="caption">
                            {tab.labelTab}
                        </Typography>
                    </div>
                ))}
            </div>
            <div className={styles.AsideContent}>
                <Typography variant="h3" className={styles.AsideContentHeading}>
                    {BUILDER_TABS[selectedTab].asideLabel}
                </Typography>
                <ContentAside selectType={selectType} toggleType={toggleType}/>
            </div>
        </aside>
    )
}
