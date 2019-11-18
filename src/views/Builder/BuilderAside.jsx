import React from 'react'
import classnames from 'classnames'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import uuidv1 from 'uuid/v1'

import styles from './Builder.module.scss'
import Typography from 'common/components/Typography'
import { BuilderField } from 'common/forms'
import { ReactComponent as UploadImage } from 'assets/upload-shape.svg'
import { ReactComponent as CloseImage } from 'assets/x-shape.svg'
import { aPostWithFile } from 'api'


export default function BuilderAside({ picture, setFiles }) {
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: async (acceptedFiles) => {
            let file = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))[0]
            let formData = new FormData()
            formData.append('file', file)
            formData.append('action', "loadPicture")
            formData.append('picture', uuidv1())

            try{
               const data =  await aPostWithFile(process.env.REACT_APP_BACKEND_REQUEST_URL, formData)
                setFiles(process.env.REACT_APP_IMAGE_URL + data.url)
            } catch(e) {
                console.log(e)
            }

        },
        maxSize: 512000,
        onDropRejected: () => {
            toast("Wrong format file", { type: 'error' })
        }
    })

    const closeButton = () => {
        setFiles(false)
    }

    return (
        <aside className={styles.BuilderAside}>
            <div className={styles.AsideContent}>
                <Typography variant="h3" className={styles.AsideContentHeading}>
                    Enter Your Signature Details
                </Typography>
                <div>
                    <Typography variant="h5" className={styles.LabelButton}>
                        Profile Picture
                    </Typography>
                    <div className={styles.ButtonWrapper}>
                        {picture && (
                            <button className={styles.CloseButton} onClick={closeButton}>
                                <CloseImage fill="white"/>
                            </button>
                        )}
                        <div {...getRootProps({className: styles.Button})}>
                            {!picture && (
                                <div className={styles.Button__Wrapper}>
                                    <input {...getInputProps()} />
                                    <UploadImage/>
                                    <Typography variant="caption">Drag file here to upload</Typography>
                                    <Typography variant="caption">Max file size: 512 Kb</Typography>
                                </div>
                            )}
                            {picture && (
                                <div className={styles.ImageLoader}>
                                    <img
                                        src={picture}
                                        alt="Logo of company"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <BuilderField
                        name="firstName"
                        label="First name"
                        placeholder="Bill"
                    />
                    <BuilderField
                        name="lastName"
                        label="Last name"
                    />
                    <BuilderField
                        name="jobTitle"
                        label="Job Title"
                        placeholder="Software Developer"
                    />
                    <BuilderField
                        name="department"
                        label="Department"
                        placeholder="Bill Rogen"
                    />
                    <BuilderField
                        name="email"
                        label="Email address"
                        placeholder="hello@bn.design"
                    />
                    <BuilderField
                        name="companyName"
                        label="Company name"
                    />
                    <BuilderField
                        name="websiteUrl"
                        label="Website URL"
                        placeholder="Website URL"
                    />
                    <BuilderField
                        name="addresses[0]"
                        label="Address"
                        placeholder="Address"
                    />
                    <BuilderField
                        name="addresses[1]"
                        label="Address"
                        placeholder="Address"
                    />
                    <BuilderField
                        name="addresses[2]"
                        label="Address"
                        placeholder="Address"
                    />
                    <BuilderField
                        name="addresses[3]"
                        label="Address"
                        placeholder="Address"
                    />
                    <BuilderField
                        name="mobileNumber"
                        label="Mobile Phone"
                        placeholder="111 222 333"
                    />
                    <BuilderField
                        name="officeNumber"
                        label="Office Number"
                        placeholder="111 222 333"
                    />
                    <Typography variant="h3" className={classnames(styles.AsideContentHeading, 'mt-5')}>
                        Social Links
                    </Typography>
                    <BuilderField
                        name="socialLinks.linkedin"
                        label="Linkedin"
                        placeholder="https://www.linkedin.com"
                    />
                    <BuilderField
                        name="socialLinks.facebook"
                        label="Facebook"
                        placeholder="https://www.facebook.com"
                    />
                    <BuilderField
                        name="socialLinks.twitter"
                        label="Twitter"
                        placeholder="https://www.twitter.com"
                    />
                    <BuilderField
                        name="socialLinks.instagram"
                        label="Instagram"
                        placeholder="https://www.instagram.com"
                    />
                </div>
            </div>
        </aside>
    )
}
