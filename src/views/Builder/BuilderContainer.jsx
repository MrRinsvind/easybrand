import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'

import styles from './Builder.module.scss'
import BuilderAside from './BuilderAside'
import BuilderContent from './BuilderContent'


function BuilderContainer ({ formMeta, formValue }) {
    const [selectedTab, toggleTab] = React.useState(1)
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
<<<<<<< HEAD
    connect((state) => ({
        initialValues: {
            templateName: "Template initial value",
            themeColor: '#a6e9cb',
            textColor: "#cc5562",
            linkColor: "#557ED8",
            font: "Arial",
=======
    connect(state => ({
        initialValues : {
            themeColor: '#a6e9cb',
            textColor: "#cc5562",
            linkColor: "#557ED8",
            font: "Ariel",
>>>>>>> BN-13 create styles part
            size: 1,
        }
    })),
    reduxForm({
        form: '@form/builder',
        enableReinitialize: true,
    })
)(BuilderContainer)
