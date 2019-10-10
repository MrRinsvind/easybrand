import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'

import styles from './Builder.module.scss'
import BuilderAside from './BuilderAside'
import BuilderContent from './BuilderContent'


function BuilderContainer ({ formMeta, formValue }) {
    const [selectedTab, toggleTab] = React.useState(0)
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
            templateName: "Template initial value",
            themeColor: '#a6e9cb',
            textColor: "#cc5562",
            linkColor: "#557ED8",
            font: "Arial",
            size: 1,
            profilePicture: true,
            imageCompany: true,
            firstName: {
                text: "Rad",
                status: ""
            },
            lastName: {
                text: "Pozniakov",
                status: ""
            },
            department: {
                text: "Sales",
                status: ""
            },
            jobTitle: {
                text: "Sofware developer",
                status: ""
            },
            email: {
              text: "rad@pozniakov.com",
              status: ""
            },
            companyName: {
                text: "Finty",
                status: ""
            },
            websiteUrl: {
                text: "www.finty.com",
                status: ""
            },
            officeNumber: {
                text: "+380977762565",
                status: ""
            },
            mobileNumber: {
                text: "+380993330214",
                status: ""
            },
            addresses: {
                0: {
                    text: "Dnipro 1",
                    status: ""
                },
                1: {
                    text: "Dnipro 2",
                    status: ""
                },
                2: {
                    text: "Dnipro 3",
                    status: ""
                },
                3: {
                    text: "Dnipro 4",
                    status: ""
                }
            },
            socialLinks: {
                facebook: {
                    text: "facebook.com",
                    status: ""
                },
                twitter: {
                    text: "twitter.com",
                    status: ""
                },
                instagram: {
                    text: "instagram.com",
                    status: ""
                },
                linkedin: {
                    text: "linkedin.com",
                    status: ""
                }
            }
        }
    })),
    reduxForm({
        form: '@form/builder',
        enableReinitialize: true,
    })
)(BuilderContainer)
