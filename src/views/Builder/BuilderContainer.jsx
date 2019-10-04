import React from 'react'
import { reduxForm } from 'redux-form';

import styles from './Builder.module.scss'
import BuilderAside from './BuilderAside'
import BuilderContent from './BuilderContent'

function BuilderContainer (props) {
    const [selectedTab, toggleTab] = React.useState(0)
    const [selectType, toggleType] = React.useState(0)

    return (
        <React.Fragment>
            <main className={styles.BuilderWrapper}>
                <BuilderAside
                    selectedTab={selectedTab}
                    toggleTab={toggleTab}
                    selectType={selectType}
                    toggleType={toggleType}
                />
                <div className={styles.BuilderContent}>
                    <BuilderContent selectType={selectType} />
                </div>
            </main>
        </React.Fragment>
    )
}

export default reduxForm({
    form: '@form/builder',
    enableReinitialize: true,
})(BuilderContainer)
