import React from 'react'
import { connect } from 'react-redux'

import Typography from 'common/components/Typography'
import styles from './Templates.module.scss'
import { ImageOfTemplates } from 'common/constants/images'
import { removeTemplate } from 'store/templates/actions'

function Templates({ templates, history }) {

    const handleTemplateClick = (param) => (e)=> {
        history.push(`/template/${param}`)
    }

    return (
        <div className={styles.Wrapper}>
            <div className="container">
                <Typography variant="h2" className={styles.PageHeading}>
                    Signature templates
                </Typography>
                <div className="row">
                    { templates.data && !!templates.data.length && templates.data.map( template => (
                       !template.draft ?
                           <div className="col-4 mb-4" key={template.id}>
                               <div className={styles.TemplateItem} onClick={handleTemplateClick(template.id)}>
                                   <div className={styles.ImageBlock}>
                                       <img src={ImageOfTemplates[template.type]} alt=""/>
                                   </div>
                                   <Typography variant="h4" className={styles.TemplateHeading} align="center">
                                       {template.templateName}
                                   </Typography>
                               </div>
                           </div>
                           : null
                    ))}
                </div>
            </div>
        </div>
    )
}

export default connect((state) => ({
    templates: state.templates
}),{ removeTemplate })(Templates)
