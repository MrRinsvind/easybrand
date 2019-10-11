import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'

import Typography from 'common/components/Typography'
import styles from './Settings.module.scss'
import { DefaultTextField } from 'common/forms'
import { ReactComponent as UploadImage } from 'assets/upload-shape.svg'
import { fetchSettings, changeSettings } from 'store/settings/actions'
import Button from 'common/components/Button'


function Settings({ settings, fetchSettings, handleSubmit, changeSettings }) {

    React.useEffect(() => {

        if(!settings.data && !settings.loading) {
            fetchSettings()
        }
    }, [settings, fetchSettings])

    const onSubmit = (data) => {
        changeSettings({
            "post": "settings",
            data
        })

    }

    return (
        <form className={styles.PageWrapper} onSubmit={handleSubmit(onSubmit)}>
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
                            <Button size="large"  onClick={handleSubmit(onSubmit)}>
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
        </form>
    )
}

export default compose(
    connect((state) => ({
        settings: state.settings,
        initialValues: {
            ...state.settings.data,
        }
    }), { fetchSettings, changeSettings }),
    reduxForm({
        form: '@form/settings',
        enableReinitialize: true,
    })
)(Settings)
