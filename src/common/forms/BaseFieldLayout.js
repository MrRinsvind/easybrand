import React from 'react'

import Label from './Label'


export default function BaseFieldLayout(props) {
    const {
            label,
            settingStyle,
        } = props

    const { inputComponent: InputComponent, ...restProps } = props

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
