import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'

import Typography from 'common/components/Typography'
import styles from './Settings.module.scss'
import { DefaultTextField } from 'common/forms'
import { ReactComponent as UploadImage } from 'assets/upload-shape.svg'

import Button from 'common/components/Button'


function Settings({ history }) {
    return (
        <div className={styles.PageWrapper}>
            <div className="container">
                <div className={styles.ColWrapper}>
                    <Typography variant="h2" className={styles.PageHeading}>
                        Settings
                    </Typography>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className={styles.ColWrapper}>
                            <Typography variant="h5" className={styles.SectionHeading}>
                                Template Details
                            </Typography>
                            <DefaultTextField
                                name="companyName"
                                placeholder="Company Name"
                                label="Company Name"
                                settingStyle
                            />
                            <DefaultTextField
                                name="websiteUrl"
                                placeholder="www.example.com"
                                label="Website URL"
                                settingStyle
                            />
                            <DefaultTextField
                                name="address"
                                placeholder=""
                                label="Address"
                                settingStyle
                            />
                            <DefaultTextField
                                name="address2"
                                placeholder="Address line 2"
                                settingStyle
                            />
                            <DefaultTextField
                                name="address3"
                                placeholder="Address line 3"
                                settingStyle
                            />
                            <DefaultTextField
                                name="address4"
                                placeholder="Address line 4"
                                settingStyle
                            />
                            <DefaultTextField
                                name="officeNumber"
                                placeholder=""
                                label="Office Number"
                                settingStyle
                            />
                            <Button size="large"  onClick={() => history.push('/templates')}>
                                Save
                            </Button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles.ColWrapper}>
                            <Typography variant="h5" className={styles.SectionHeading}>
                                Social Links
                            </Typography>
                            <DefaultTextField
                                name="social.linkedin"
                                placeholder="https://www.linkedin.com"
                                label="Linkedin"
                                settingStyle
                            />
                            <DefaultTextField
                                name="social.facebook"
                                placeholder="https://www.facebook.com"
                                label="Linkedin"
                                settingStyle
                            />
                            <DefaultTextField
                                name="social.twitter"
                                placeholder="https://www.twitter.com"
                                label="Linkedin"
                                settingStyle
                            />
                            <DefaultTextField
                                name="social.instagram"
                                placeholder="https://www.instagram.com"
                                label="Linkedin"
                                settingStyle
                            />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles.ColWrapper}>
                            <Typography variant="h5" className={styles.SectionHeading}>
                                Logo company
                            </Typography>
                            <button className={styles.Button}>
                                <div className={styles.Button__Wrapper}>
                                    <UploadImage/>
                                    <Typography variant="caption">Drag file here to upload</Typography>
                                    <Typography variant="caption">Max file size: 512 Kb</Typography>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose(
    connect((state) => ({
        initialValues: {
            companyName: "Finty",
            websiteUrl: "www.finty.com",
            address: "Rue De Candolle 11, CH-1205 Geneva, Switzerland",
            officeNumber: "+380673680502"
        }
    })),
    reduxForm({
        form: '@form/settings',
        enableReinitialize: true,
    })
)(Settings)
