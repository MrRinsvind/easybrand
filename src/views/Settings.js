import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import get from 'lodash-es/get'

import Typography from 'common/components/Typography'
import styles from './Settings.module.scss'
import { DefaultTextField } from 'common/forms'
import { ReactComponent as UploadImage } from 'assets/upload-shape.svg'
import { changeSettings } from 'store/settings/actions'
import Button from 'common/components/Button'

import { useDropzone } from 'react-dropzone'

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
}

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
}

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
}

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
}

function Settings({ settings, handleSubmit, changeSettings }) {

    const onSubmit = (data) => {
        changeSettings({
            "post": "settings",
            data : {
                ...data,
                img: files && files.length ? files[0] : get(settings, 'data.img', null),
            }
        })

    }

    const [files, setFiles] = React.useState([]);
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    React.useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview))
    }, [files])

    const imgSrc = get(files, '[0].preview') || get(settings, 'data.img')

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
                            <div {...getRootProps({className: styles.Button})}>
                                <div className={styles.Button__Wrapper}>
                                    <input {...getInputProps()} />
                                    <UploadImage/>
                                    <Typography variant="caption">Drag file here to upload</Typography>
                                    <Typography variant="caption">Max file size: 512 Kb</Typography>
                                </div>
                            </div>
                        </div>
                        <section className="container">
                            <aside style={thumbsContainer}>
                                {imgSrc && (
                                    <div style={thumb}>
                                        <div style={thumbInner}>
                                            <img
                                                src={imgSrc}
                                                style={img}
                                            />
                                        </div>
                                    </div>
                                )}
                            </aside>
                        </section>
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
    }), { changeSettings }),
    reduxForm({
        form: '@form/settings',
        enableReinitialize: true,
    })
)(Settings)
