import React from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import get from 'lodash-es/get'
import { toast } from 'react-toastify'
import { change } from 'redux-form'

import styles from './BuilderContent.module.scss'
import acidLogo from 'assets/acid.png'
import nologo from 'assets/nologo.jpg'
import appleLogoIcon from 'assets/apple-logo.svg'
import gmailLogoicon from 'assets/gmail.svg'
import outlookLogoIcon from 'assets/microsoft-outlook.svg'
import yahoo from 'assets/yahoo.svg'

import Typography from 'common/components/Typography'
import Button from 'common/components/Button'
import { BUILDER_TEMPLATES } from './constants/BuilderTemplates'

BuilderContent.defaultProps = {
    selectType: 0,
}

function BuilderContent({ selectType, change, copySignature, getHelp, activeTemplate,  data }) {

    const SelectedTemplate = BUILDER_TEMPLATES[selectType].component
    const onErrorImg = () => {
      toast("Wrong image url", { type: 'error' })
    }

    return (
        <>
            <div className={styles.Wrapper}>
                <div className={styles.Template}>
                    <div className={styles.TemplateName}>
                        <Typography variant={'h3'}>{activeTemplate && activeTemplate.templateName}</Typography>
                    </div>
                    <div className={styles.Letters}>
                        <div className={classnames(styles.Letter,styles[`Letter_First`])}/>
                        <div className={classnames(styles.Letter,styles[`Letter_Second`])}/>
                        <div className={classnames(styles.Letter,styles[`Letter_Third`])}/>
                        <div className={styles.MainLetter}>
                            <div className={styles.Header}>
                                <div className={styles.Circles}>
                                    <div className={classnames(styles.Circle, styles[`Circle_Red`])}/>
                                    <div className={classnames(styles.Circle, styles[`Circle_Orange`])}/>
                                    <div className={classnames(styles.Circle, styles[`Circle_Green`])}/>
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
                                        <SelectedTemplate data={data} onErrorImg={onErrorImg}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ActionsWrapper}>
                        <div className={styles.ActionsTipInfo}>
                            <Typography variant={'body'} className={styles.TipText}>
                                Follow the links below to copy your signature and add it to your email client.
                            </Typography>
                        </div>
                        <div className={styles.ButtonsWrapper}>
                            <div className={styles.PrimaryButtons}>
                                <Button className={styles.ProtonMailBTN} variant={'secondary'} onClick={getHelp('gmail')}>
                                    Read instruction
                                </Button>
                                <Button className={styles.CopySignatureBTN} onClick={copySignature}>
                                    Copy signature
                                </Button>
                            </div>
                            <div className={styles.IconButtons}>
                                <button className={styles.MailCLientBTN} onClick={getHelp('gmail')}>
                                    <img className={styles.MailClientLogo} src={gmailLogoicon} alt="Google gmail logo"/>
                                    <Typography variant={'body'}>Add to Gmail</Typography>
                                </button>

                                <button className={styles.MailCLientBTN} onClick={getHelp('outlook')}>
                                    <img className={styles.MailClientLogo} src={outlookLogoIcon} alt="Outlook logo"/>
                                    <Typography variant={'body'}>Add to Outlook</Typography>
                                </button>

                                <button className={styles.MailCLientBTN}  onClick={getHelp('apple')}>
                                    <img className={styles.MailClientLogo} src={appleLogoIcon} alt="Apple logo"/>
                                    <Typography variant={'body'}>Add to Apple Mail</Typography>
                                </button>

                                <button className={styles.MailCLientBTN}  onClick={getHelp('yahoo')}>
                                    <img className={styles.MailClientLogo} src={yahoo} alt="Yahoo logo"/>
                                    <Typography variant={'body'}>Add to Yahoo Mail</Typography>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </>
    )
}

export default connect((state) => ({
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
        profilePhoto: get(state, 'form.@form/builder.values.profileCompanySrc.text') || acidLogo,
        companyLogo: get(state, 'form.@form/builder.values.logoCompanySrc.text')  || nologo,
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
}), { change })(BuilderContent)
