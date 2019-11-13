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

const mock = {
    social: {
        twitter: "twitter.com",
        instagram: "instagram.com",
        linkedin: "linkedin.com",
        facebook: "facebook.com",
    },
    address: "address 1",
    address2: "address 2",
    address3: "address 3",
    address4: "address 4",
    officeNumber: "+380977762565",
    websiteUrl: "https://example.com",
    companyName: "Name of company",

}

function BuilderContainer ({
   id,
   reset,
   templatesData,
   handleSubmit,
   history,
   activeTemplate,
   loading,
   changeTemplates
}) {
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
                draft: false,
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

    const handleDiscard = () => {
        reset()
        history.push('/templates')
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
                    handleDiscard={handleDiscard}
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
                    status: "edit",
                },
                lastName: {
                    text: "Pozniakov",
                    status: "edit",
                },
                department: {
                    text: "Sales",
                    status: "edit",
                },
                jobTitle: {
                    text: "Sofware developer",
                    status: "edit",
                },
                email: {
                    text: "rad@pozniakov.com",
                    status: "edit",
                },
                companyName: {
                    text: get(state, 'settings.data.companyName', mock.companyName),
                    status: "edit",
                },
                websiteUrl: {
                    text: get(state, 'settings.data.websiteUrl', mock.websiteUrl),
                    status: "edit",
                },
                officeNumber: {
                    text: get(state, 'settings.data.officeNumber', mock.officeNumber),
                    status: "edit",
                },
                mobileNumber: {
                    text: "+380993330214",
                    status: "edit",
                },
                addresses: {
                    0: {
                        text: get(state, 'settings.data.address', mock.address),
                        status: "edit",
                    },
                    1: {
                        text: get(state, 'settings.data.address2', mock.address2),
                        status: "edit",
                    },
                    2: {
                        text: get(state, 'settings.data.address3', mock.address3),
                        status: "edit",
                    },
                    3: {
                        text: get(state, 'settings.data.address4', mock.address4),
                        status: "edit",
                    }
                },
                socialLinks: {
                    facebook: {
                        text: get(state, 'settings.data.social.facebook', mock.social.facebook),
                        status: "edit",
                    },
                    twitter: {
                        text: get(state, 'settings.data.social.twitter', mock.social.twitter),
                        status: "edit",
                    },
                    instagram: {
                        text: get(state, 'settings.data.social.instagram', mock.social.instagram),
                        status: "edit",
                    },
                    linkedin: {
                        text: get(state, 'settings.data.social.linkedin',  mock.social.linkedin),
                        status: "edit",
                    }
                },
                logoCompany: get(state, 'settings.data.img', "https://avatarfiles.alphacoders.com/205/205482.jpg"),
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
