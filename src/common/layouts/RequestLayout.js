import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { fetchTemplates } from 'store/templates/actions'


function RequestLayout({ children, fetchTemplates, templates }) {

    React.useEffect(() => {
        if(!templates.data && !templates.loading) {
            fetchTemplates()
        }
    })

    return (
        <>
            {children}
        </>
    )
}

export default compose(
    connect(
        (state) => ({
            templates: state.templates
        }),
        { fetchTemplates }
    ),
)(RequestLayout)
