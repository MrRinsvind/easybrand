import React from 'react'

import { ToggleField } from 'common/forms'


export default function ImagePart({ }) {
    return (
        <>
            <ToggleField
                name="profilePicture"
                label="Profile Picture"
                contentText="Allow upload profile photo"
            />
            <ToggleField
                name="imageCompany"
                label="Image company"
                contentText="Display company logo in signature"
            />
        </>
    )
}
