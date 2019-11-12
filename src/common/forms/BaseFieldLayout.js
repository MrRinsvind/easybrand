import React from 'react'
import get from 'lodash-es/get'
import Label from './Label'


export default function BaseFieldLayout(props) {
    const {
            label,
            settingStyle,
        } = props

    const { inputComponent: InputComponent, ...restProps } = props

    const hidden = get(restProps, 'input.value.status') === 'invisible'

    if(hidden) return null
    return (
        <>
            {label && (
                <Label settingStyle={settingStyle}>
                    {label}
                </Label>
            )}
            <InputComponent
                {...restProps}
                {...props.input}
            />
        </>
    )
}
