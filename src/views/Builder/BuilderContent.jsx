import React from 'react'
import classnames from 'classnames'

import styles from './BuilderContent.module.scss'
import closeIcon from 'assets/x-shape.svg'
import Typography from 'common/components/Typography'
import Button from 'common/components/Button'
import { BUILDER_TEMPLATES } from './constants/BuilderTemplates'

BuilderContent.defaultProps = {
    selectType: 0,
    data: {
        colors: {
            themeColor: '#a6e9cb',
            textColor: "#cc5562",
            linkColor: "#557ED8",
        },
        profilePhoto: "https://avatarfiles.alphacoders.com/202/202402.png",
        companyLogo: "https://avatarfiles.alphacoders.com/205/205482.jpg",
        firstName: "Rad",
        lastName:  "Pozniakov",
        jobTitle: "Software Developer",
        department: "Sales",
        email: "rad.poznyakov@gmail.com",
        companyName: "Finty",
        websiteUrl: "http://finty.com",
        addresses: ["krmsg lkvrg", "fesrfesg gerjtng", "address3", "address4"],
        officeNumber: "111 222 333",
        mobileNumber: "111 222",
        socialLinks: {
            facebook: "http://finty.com",
            twitter: "http://finty.com",
            instagram: "http://finty.com",
            linkedin: "http://finty.com"
        }
    }
}

export default function BuilderContent({selectType, data}) {
    const SelectedTemplate = BUILDER_TEMPLATES[selectType].component
    return (
        <div className={styles.Wrapper}>
                <button className={styles.CloseButton}>
                    <img src={closeIcon} alt="close"/>
                    <Typography className={styles[`CloseButton__Text`]} variant={'subhead'}>esc</Typography>
                </button>
            <div className={styles.Template}>
                <Typography variant={'subhead'}>Preview</Typography>
                <div className={styles.TemplateName}>
                    <Typography variant={'h3'}>Manager template</Typography>
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
                            <SelectedTemplate data={data}/>
                        </div>
                    </div>
                </div>
                <div className={styles.actionWrapper}>
                    <Button className={styles.actionButton}>
                        Save template signature
                    </Button>
                </div>
            </div>
        </div>
    )
}
