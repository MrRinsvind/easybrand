import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { fetchTemplates } from 'store/templates/actions'
import { fetchSettings } from 'store/settings/actions'

function RequestLayout({ children, fetchTemplates, fetchSettings, templates, settings }) {

    React.useEffect(() => {

        if(!settings.data && !settings.loading) {
            fetchSettings()
        }

        if(!templates.data && !templates.loading) {
            fetchTemplates()
        }


    },[settings, templates, fetchTemplates, fetchSettings,])

    return (
        <>
            {children}
        </>
    )
}

export default compose(
    connect(
        (state) => ({
            templates: state.templates,
            settings: state.settings,
        }),
        { fetchTemplates, fetchSettings }
    ),
)(RequestLayout)
