import BaseFieldHOC from './BaseFieldHOC'

import BuilderInput from './inputs/BuilderInput'
import ColorInput from './inputs/ColorInput'
import SliderInput from './inputs/SliderInput'
import SelectInput from './inputs/SelectInput'
import TemplateNameInput from './inputs/TemplateNameInput'


const TemplateNameField = BaseFieldHOC(TemplateNameInput)
const BuilderField = BaseFieldHOC(BuilderInput)
const ColorField = BaseFieldHOC(ColorInput)
const SliderField = BaseFieldHOC(SliderInput)
const SelectField = BaseFieldHOC(SelectInput)

export {
    ColorField,
    SliderField,
    SelectField,
    BuilderField,
    TemplateNameField
}
