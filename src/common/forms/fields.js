import BaseFieldHOC from './BaseFieldHOC'

import BuilderInput from './inputs/BuilderInput'
import ColorInput from './inputs/ColorInput'
import SliderInput from './inputs/SliderInput'
import SelectInput from './inputs/SelectInput'
import DefaultTextInput from './inputs/DefaultTextInput'
import ToggleInput from './inputs/ToggleInput'


const BuilderField = BaseFieldHOC(BuilderInput)
const DefaultTextField = BaseFieldHOC(DefaultTextInput)
const ColorField = BaseFieldHOC(ColorInput)
const SliderField = BaseFieldHOC(SliderInput)
const SelectField = BaseFieldHOC(SelectInput)
const ToggleField = BaseFieldHOC(ToggleInput)


export {
    ColorField,
    SliderField,
    SelectField,
    BuilderField,
    ToggleField,
    DefaultTextField,
}
