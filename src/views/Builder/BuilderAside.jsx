import React from 'react'
import classnames from 'classnames'

import styles from './Builder.module.scss'
import Typography from 'common/components/Typography'
import { BuilderField } from 'common/forms'

export default function BuilderAside() {
    return (
        <aside className={styles.BuilderAside}>
            <div className={styles.AsideContent}>
                <Typography variant="h3" className={styles.AsideContentHeading}>
                    Enter Your Signature Details
                </Typography>
                <div>
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
