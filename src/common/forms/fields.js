import BaseFieldHOC from './BaseFieldHOC'

import BuilderInput from './inputs/BuilderInput'
import TemplateNameInput from './inputs/TemplateNameInput'


const BuilderField = BaseFieldHOC(BuilderInput)
const TemplateNameField = BaseFieldHOC(TemplateNameInput)

export {
    BuilderField,
    TemplateNameField
}
