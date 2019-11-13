import BaseFieldHOC from './BaseFieldHOC'

import BuilderInput from './inputs/BuilderInput'
import DefaultTextInput from './inputs/DefaultTextInput'


const BuilderField = BaseFieldHOC(BuilderInput)
const DefaultTextField = BaseFieldHOC(DefaultTextInput)


export {
    BuilderField,
    DefaultTextField,
}
