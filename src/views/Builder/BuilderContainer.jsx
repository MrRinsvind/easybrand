import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'

import styles from './Builder.module.scss'
import BuilderAside from './BuilderAside'
import BuilderContent from './BuilderContent'


function BuilderContainer ({ formMeta, formValue }) {
    const [selectedTab, toggleTab] = React.useState(2)
    const [selectType, toggleType] = React.useState(0)

    return (
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
    )
}

export default compose(
    connect((state) => ({
        initialValues: {
            templateName: "Template initial value"
        }
    })),
    reduxForm({
        form: `@form/builder`,
        enableReinitialize: true,
    })
)(BuilderContainer)
