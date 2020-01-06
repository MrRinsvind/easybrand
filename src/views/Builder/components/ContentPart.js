import React from 'react'
import classnames from 'classnames'

import styles from '../Builder.module.scss'
import Typography from 'common/components/Typography'
import { BuilderField } from 'common/forms'
import { AnimatedWrapper } from './AnimatedWrapper'
import { AnimatedItem } from './AnimatedItem'


export default function ContentPart() {

  const [isOpen, toggleOpen] = React.useState(false)

  React.useEffect(() => {
    setTimeout(toggleOpen(true), 1000)
  }, []);


  return (
    <AnimatedWrapper pose={isOpen ? 'open' : 'closed'}>
        <AnimatedItem>
            <BuilderField
              name="firstName"
              label="First name"
              placeholder="Bill"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="lastName"
              label="Last name"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="jobTitle"
              label="Job Title"
              placeholder="Software Developer"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="department"
              label="Department"
              placeholder="Bill Rogen"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="email"
              label="Email address"
              placeholder="hello@bn.design"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="companyName"
              label="Company name"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="websiteUrl"
              label="Website URL"
              placeholder="Website URL"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="addresses[0]"
              label="Address"
              placeholder="Address"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="addresses[1]"
              label="Address"
              placeholder="Address"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="addresses[2]"
              label="Address"
              placeholder="Address"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="addresses[3]"
              label="Address"
              placeholder="Address"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="mobileNumber"
              label="Mobile Phone"
              placeholder="111 222 333"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="officeNumber"
              label="Office Number"
              placeholder="111 222 333"
            />
        </AnimatedItem>
        <AnimatedItem>
            <Typography variant="h3" className={classnames(styles.AsideContentHeading, 'mt-5')}>
                Social Links
            </Typography>
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="socialLinks.linkedin"
              label="Linkedin"
              placeholder="https://www.linkedin.com"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="socialLinks.facebook"
              label="Facebook"
              placeholder="https://www.facebook.com"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="socialLinks.twitter"
              label="Twitter"
              placeholder="https://www.twitter.com"
            />
        </AnimatedItem>
        <AnimatedItem>
            <BuilderField
              name="socialLinks.instagram"
              label="Instagram"
              placeholder="https://www.instagram.com"
            />
        </AnimatedItem>
    </AnimatedWrapper>
  )
}