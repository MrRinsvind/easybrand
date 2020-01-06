import React from 'react'
import { connect } from 'react-redux'
import get from 'lodash-es/get'
import posed from 'react-pose';

import { BuilderField, ToggleField } from 'common/forms'
import { AnimatedWrapper } from './AnimatedWrapper'
import { AnimatedItem } from './AnimatedItem'

const HiddenElement = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

function ImagePart({ profilePicture, imageCompany }) {

  const [isOpen, toggleOpen] = React.useState(false)
  const [showProfile, toggleProfile] = React.useState(true)
  const [showLogo, toggleLogo] = React.useState(true)

  React.useEffect(() => {
    if(profilePicture) {
      toggleProfile(true)
    } else {
      toggleProfile(false)
    }
  }, [profilePicture])

  React.useEffect(() => {
    if(imageCompany) {
      toggleLogo(true)
    } else {
      toggleLogo(false)
    }
  }, [imageCompany])

  React.useEffect(() => {
    setTimeout(toggleOpen(true), 1000)
  }, []);

  return (
    <AnimatedWrapper pose={isOpen ? 'open' : 'closed'}>
      <AnimatedItem>
        <ToggleField
          name="profilePicture"
          label="Profile Picture"
          contentText="Display profile photo in signature"
        />
        <HiddenElement pose={showProfile ? 'visible' : 'hidden'}>
          <BuilderField
            name="profileCompanySrc"
            label="Profile Picture"
            placeholder="https://example.com/images/myphoto.jpg"
          />
        </HiddenElement>
      </AnimatedItem>
      <AnimatedItem>
        <ToggleField
          name="imageCompany"
          label="Image company"
          contentText="Display company logo in signature"
        />
        <HiddenElement pose={showLogo ? 'visible' : 'hidden'}>
          <BuilderField
            name="logoCompanySrc"
            label="Image company"
            placeholder="https://example.com/images/myphoto.jpg"
          />
        </HiddenElement>
      </AnimatedItem>
    </AnimatedWrapper>
  )
}

export default connect((state) => ({
  profilePicture: get(state, 'form.@form/builder.values.profilePicture'),
  imageCompany: get(state, 'form.@form/builder.values.imageCompany'),
}))(ImagePart)
