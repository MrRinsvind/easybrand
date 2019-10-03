import React from 'react'

import { ReactComponent as StyleIcon } from 'assets/style-icon.svg'
import { ReactComponent as ContentIcon } from 'assets/content-icon.svg'
import { ReactComponent as ImageIcon } from 'assets/image-icon.svg'
import { ReactComponent as TemplateIcon } from 'assets/template-icon.svg'
import TemplatePart from '../components/TemplatePart'

export const BUILDER_TABS = [
    {
        id: "tab0",
        labelTab: "Template",
        iconTab: TemplateIcon,
        asideLabel: "Select Your Template",
        component: TemplatePart,
    },
    {
        id: "tab1",
        labelTab: "Style",
        iconTab: StyleIcon,
        asideLabel: "Stylize Your Signature",
        component: React.Fragment,
    },
    {
        id: "tab2",
        labelTab: "Content",
        iconTab: ContentIcon,
        asideLabel: "Enter Your Signature Details",
        component: React.Fragment,
    },
    {
        id: "tab3",
        labelTab: "Image",
        iconTab: ImageIcon,
        asideLabel: "Upload Your Custom Signature Images",
        component: React.Fragment,
    },
]
