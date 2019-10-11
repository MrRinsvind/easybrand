import React from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import get from 'lodash-es/get'

import styles from './BuilderContent.module.scss'
import BulderModal from './BulderModal'
import closeIcon from 'assets/x-shape.svg'
import Typography from 'common/components/Typography'
import Button from 'common/components/Button'
import { DefaultTextField } from 'common/forms'
import { BUILDER_TEMPLATES } from './constants/BuilderTemplates'

BuilderContent.defaultProps = {
    selectType: 0,
}

function BuilderContent({ selectType, data, handleSubmit, onSubmit }) {
    const [isShowedModal, toggleModal] = React.useState(false)
    const SelectedTemplate = BUILDER_TEMPLATES[selectType].component

    function handleEscButton(){
        toggleModal(!isShowedModal)
    }
    return (
        <>
            <div className={styles.Wrapper}>
                <button onClick={handleEscButton} className={styles.CloseButton}>
                    <img src={closeIcon} alt="close"/>
                    <Typography className={styles[`CloseButton__Text`]} variant={'subhead'}>esc</Typography>
                </button>
                <div className={styles.Template}>
                    <Typography variant={'subhead'}>Preview</Typography>
                    <div className={styles.TemplateName}>
                        <DefaultTextField placeholder={'Template name'} name="templateName"/>
                    </div>
                    <div className={styles.Letters}>
                        <div className={classnames(styles.Letter,styles[`Letter_First`])}></div>
                        <div className={classnames(styles.Letter,styles[`Letter_Second`])}></div>
                        <div className={classnames(styles.Letter,styles[`Letter_Third`])}></div>
                        <div className={styles.MainLetter}>
                            <div className={styles.Header}>
                                <div className={styles.Circles}>
                                    <div className={classnames(styles.Circle, styles[`Circle_Red`])}></div>
                                    <div className={classnames(styles.Circle, styles[`Circle_Orange`])}></div>
                                    <div className={classnames(styles.Circle, styles[`Circle_Green`])}></div>
                                </div>
                            </div>
                            <div className={styles.LetterContent}>
                                <div className={styles.MetaHeaderItem}>
                                    <Typography variant={'subhead'} className={styles.MetaHeaderTitle}>To:</Typography>
                                    <Typography variant={'subhead'} className={styles.Recipient}>Your Recipient</Typography>
                                </div>
                                <div className={styles.MetaHeaderItem}>
                                    <Typography variant={'subhead'} className={styles.MetaHeaderTitle}>Subject:</Typography>
                                    <Typography variant={'h4'}>Check out my new Email Signature</Typography>
                                </div>
                                <div className={styles.DummyData}>
                                    <svg width="501" height="74" viewBox="0 0 501 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="68" height="8" rx="1" fill="#E6EBF1"/>
                                        <rect y="20" width="501" height="8" rx="1" fill="#E6EBF1"/>
                                        <rect y="33" width="501" height="8" rx="1" fill="#E6EBF1"/>
                                        <rect y="53" width="208" height="8" rx="1" fill="#E6EBF1"/>
                                        <rect y="66" width="208" height="8" rx="1" fill="#E6EBF1"/>
                                    </svg>
                                </div>
                                <div data-flip-id="browser" data-flip-config="{&quot;translate&quot;:true,&quot;scale&quot;:true,&quot;opacity&quot;:true}" data-portal-key="portal">
                                    <div fontSize="medium" style={{ userSelect: "all" }}>
                                        <SelectedTemplate data={data}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.actionWrapper}>
                        <Button className={styles.actionButton} onClick={handleSubmit(onSubmit)}>
                            Save template signature
                        </Button>
                    </div>
                </div>
            </div>
            <BulderModal show={isShowedModal} handleEscButton={handleEscButton}/>
        </>
    )
}

export default connect(state => ({
    customTemplateName: get(state, 'form.@form/builder.values.templateName'),
    data: {
        colors: {
            themeColor: get(state, 'form.@form/builder.values.themeColor'),
            textColor: get(state, 'form.@form/builder.values.textColor'),
            linkColor: get(state, 'form.@form/builder.values.linkColor'),
        },
        profilePicture: get(state, 'form.@form/builder.values.profilePicture'),
        imageCompany: get(state, 'form.@form/builder.values.imageCompany'),
        fontFamily: get(state, 'form.@form/builder.values.font'),
        fontSize: get(state, 'form.@form/builder.values.size'),
        profilePhoto: "https://avatarfiles.alphacoders.com/202/202402.png",
        companyLogo: "https://avatarfiles.alphacoders.com/205/205482.jpg",
        firstName: get(state, 'form.@form/builder.values.firstName', ''),
        lastName:  get(state, 'form.@form/builder.values.lastName', ''),
        jobTitle: get(state, 'form.@form/builder.values.jobTitle', ''),
        department: get(state, 'form.@form/builder.values.department', ''),
        email: get(state, 'form.@form/builder.values.email', ''),
        companyName: get(state, 'form.@form/builder.values.companyName', ''),
        websiteUrl: get(state, 'form.@form/builder.values.websiteUrl', ''),
        addresses: [
            get(state, 'form.@form/builder.values.addresses[0]', ''),
            get(state, 'form.@form/builder.values.addresses[1]', ''),
            get(state, 'form.@form/builder.values.addresses[2]', ''),
            get(state, 'form.@form/builder.values.addresses[3]', '')
        ],
        officeNumber: get(state, 'form.@form/builder.values.officeNumber', ''),
        mobileNumber: get(state, 'form.@form/builder.values.mobileNumber', ''),
        socialLinks: {
            facebook: get(state, 'form.@form/builder.values.socialLinks.facebook', ''),
            twitter: get(state, 'form.@form/builder.values.socialLinks.twitter', ''),
            instagram: get(state, 'form.@form/builder.values.socialLinks.instagram', ''),
            linkedin: get(state, 'form.@form/builder.values.socialLinks.linkedin', '')
        }
    }
}))(BuilderContent)
