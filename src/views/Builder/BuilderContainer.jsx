import React from 'react'
import { reduxForm } from 'redux-form'
import { CSSTransition } from 'react-transition-group'
import { compose } from 'redux'
import { connect } from 'react-redux'
import get from 'lodash-es/get'

import { CopyToClipboard } from 'common/utils/helpers'
import styles from './Builder.module.scss'
import BuilderAside from './BuilderAside'
import BuilderContent from './BuilderContent'
import { changeTemplates } from 'store/templates/actions'
import HelpGuide from './HelpGuide'

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
   templatesData,
   handleSubmit,
   history,
   activeTemplate,
   loading,
}) {
    const [helpOpen, toggleHelp] = React.useState(false)
    const [selectType, toggleType] = React.useState(0)
    const [animationStatus, changeAnimation] = React.useState(false)
    const [picture, setFiles] = React.useState(false)

    React.useEffect(() => {
        if(id && !activeTemplate && !loading && templatesData) {
            history.push('/templates')
        }

        if(activeTemplate){
            toggleType(activeTemplate.type)
        }

    }, [id, activeTemplate, loading, templatesData, history, toggleType])

    const handleEscButton = () => {
        history.push('/templates')
    }

    const getHelp = () => {
        toggleHelp(true)
    }

    const copySignature = () => {
        CopyToClipboard("copyTemplate")
    }

    const returnToBuilder = () => {
        toggleHelp(false)
    }

    const openAnimationWave = (wrapper) => {
        const el = wrapper.children[1]
        if(!animationStatus) {
            let interval = 0
            el.style.transform = `matrix(1, 0, 0, ${interval}, 0, 0)`
            let intern = setInterval(() => {

                el.style.transform = `scale(1, ${interval})`
                interval = +(interval + 0.01).toFixed(2)

                if (interval >= 1.5) {
                    clearInterval(intern)
                    changeAnimation(false)
                    el.style.transform = null
                }
            }, 2)
            changeAnimation(true)
        }
    }

    const closeAnimationWave = (wrapper) => {
        const el = wrapper.children[1]
        if(!animationStatus) {
            let interval = 1.5
            el.style.transform =  `matrix(1, 0, 0, ${interval}, 0, 0)`

            let intern =  setInterval(() => {

                el.style.transform =  `scale(1, ${interval})`
                interval = +(interval - 0.01).toFixed(2)

                if(interval <= 0) {
                    clearInterval(intern)
                    el.style.transform = null
                    changeAnimation(false)
                }
            }, 10)
            changeAnimation(true)
        }

    }

    return (
        <>
            <CSSTransition
                in={helpOpen}
                timeout={500}
                classNames={"TransitionAction"}
                onEnter={openAnimationWave}
                onExit={closeAnimationWave}
            >
                <HelpGuide returnToBuilder={returnToBuilder}/>
            </CSSTransition>
            <main className={styles.BuilderWrapper}>
                <BuilderAside
                    selectType={selectType}
                    toggleType={toggleType}
                    picture={picture}
                    setFiles={setFiles}
                />
                <div className={styles.BuilderContent}>
                    <BuilderContent
                        selectType={selectType}
                        handleSubmit={handleSubmit}
                        handleEscButton={handleEscButton}
                        copySignature={copySignature}
                        activeTemplate={activeTemplate}
                        getHelp={getHelp}
                        picture={picture}
                    />
                </div>
            </main>
        </>
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
                    status: "",
                },
                companyName: {
                    text: get(state, 'settings.data.companyName', mock.companyName),
                    status: "",
                },
                websiteUrl: {
                    text: get(state, 'settings.data.websiteUrl', mock.websiteUrl),
                    status: "",
                },
                officeNumber: {
                    text: get(state, 'settings.data.officeNumber', mock.officeNumber),
                    status: "",
                },
                mobileNumber: {
                    text: "+380993330214",
                    status: "",
                },
                addresses: {
                    0: {
                        text: get(state, 'settings.data.address', mock.address),
                        status: "",
                    },
                    1: {
                        text: get(state, 'settings.data.address2', mock.address2),
                        status: "",
                    },
                    2: {
                        text: get(state, 'settings.data.address3', mock.address3),
                        status: "",
                    },
                    3: {
                        text: get(state, 'settings.data.address4', mock.address4),
                        status: "",
                    }
                },
                socialLinks: {
                    facebook: {
                        text: get(state, 'settings.data.social.facebook', mock.social.facebook),
                        status: "",
                    },
                    twitter: {
                        text: get(state, 'settings.data.social.twitter', mock.social.twitter),
                        status: "",
                    },
                    instagram: {
                        text: get(state, 'settings.data.social.instagram', mock.social.instagram),
                        status: "",
                    },
                    linkedin: {
                        text: get(state, 'settings.data.social.linkedin',  mock.social.linkedin),
                        status: "",
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
            },
        })
    }, { changeTemplates }),
    reduxForm({
        form: '@form/builder',
        enableReinitialize: true,
    })
)(BuilderContainer)
