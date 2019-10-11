import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import get from 'lodash-es/get'
import uuidv1 from 'uuid/v1'

import styles from './Builder.module.scss'
import BuilderAside from './BuilderAside'
import BuilderContent from './BuilderContent'
import { changeTemplates } from 'store/templates/actions'


function BuilderContainer ({ id, formMeta, templatesData, handleSubmit, formValue, history, activeTemplate, loading, changeTemplates }) {
    const [selectedTab, toggleTab] = React.useState(0)
    const [selectType, toggleType] = React.useState(0)

    React.useEffect(() => {
        if(id && !activeTemplate && !loading && templatesData) {
            history.push('/templates')
        }

        if(activeTemplate){
            toggleType(activeTemplate.type)
        }

    }, [id, activeTemplate, loading, templatesData, history, toggleType])

    const onSubmit = (data) => {
        changeTemplates({
            "post": "templates",
            data: {
                ...data,
                type: selectType,
                id: data.id || uuidv1()
            }
        })
    }

    const submitAsDraft = (data) => {
        changeTemplates({
            "post": "templates",
            data: {
                ...data,
                draft: true,
                type: selectType,
                id: data.id || uuidv1()
            }
        })
    }

    return (
        <main className={styles.BuilderWrapper}>
            <BuilderAside
                selectedTab={selectedTab}
                toggleTab={toggleTab}
                selectType={selectType}
                toggleType={toggleType}
            />
            <div className={styles.BuilderContent}>
                <BuilderContent selectType={selectType}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    submitAsDraft={submitAsDraft}
                />
            </div>
        </main>
    )
}

export default compose(
    connect((state, props) => {
        const templatesData = get(state, 'templates.data');
        let activeTemplate
        if(templatesData && templatesData.length) {
            activeTemplate = templatesData.find(template => template.id.toString() === get(props, 'match.params.id'))
        }

        const initialValues = activeTemplate
            ? activeTemplate
            :{
                templateName: templatesData ? `Template №${templatesData.length + 1}` : "Template №1",
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
                        text: get(state, 'settings.data.address', ""),
                            status: ""
                    },
                    1: {
                        text: get(state, 'settings.data.address2', ""),
                            status: ""
                    },
                    2: {
                        text: get(state, 'settings.data.address3', ""),
                            status: ""
                    },
                    3: {
                        text: get(state, 'settings.data.address4', ""),
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
        return ({
            id: get(props, 'match.params.id'),
            activeTemplate,
            loading: state.templates.loading,
            templatesData: !!templatesData,
            initialValues: {
                ...initialValues,
            }
        })
    }, { changeTemplates }),
    reduxForm({
        form: '@form/builder',
        enableReinitialize: true,
    })
)(BuilderContainer)
