import React from 'react'
import classnames from 'classnames'

import styles from '../Builder.module.scss'
import Typography from 'common/components/Typography'
import { ColorField, SliderField, SelectField } from 'common/forms'
import { AnimatedWrapper } from './AnimatedWrapper'
import { AnimatedItem } from './AnimatedItem'


export default function StylePart() {

  const [isOpen, toggleOpen] = React.useState(false)

  React.useEffect(() => {
    setTimeout(toggleOpen(true), 1000)
  }, []);

  return (
    <AnimatedWrapper pose={isOpen ? 'open' : 'closed'}>
      <AnimatedItem>
        <ColorField
          name="themeColor"
          label="Theme Color"
        />
      </AnimatedItem>
      <AnimatedItem>
        <ColorField
          name="textColor"
          label="Text Color"
        />
      </AnimatedItem>
      <AnimatedItem>
        <ColorField
          name="linkColor"
          label="Links Color"
        />
      </AnimatedItem>
      <AnimatedItem>
        <Typography variant="h3" className={classnames(styles.AsideContentHeading, 'mt-5')}>
          Brand Fonts
        </Typography>
      </AnimatedItem>
      <AnimatedItem>
        <SelectField
          name="font"
          label="Select font"
        />
      </AnimatedItem>
      <AnimatedItem>
        <SliderField
          name="size"
          label="Font size"
        />
      </AnimatedItem>
    </AnimatedWrapper>
  )
}