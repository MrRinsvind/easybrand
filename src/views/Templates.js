import React from 'react'
import { connect } from 'react-redux'

import Typography from 'common/components/Typography'
import styles from './Templates.module.scss'
import mockTemplate from 'assets/mockTemplate.png'


function Templates({ templates }) {
    return (
        <div className={styles.Wrapper}>
            <div className="container">
                <Typography variant="h2">
                    Signature templates
                </Typography>
                <div className="row">
                    { templates.length && templates.map( template => (
                        <div className="col-4">
                            <div className={styles.TemplateItem}>
                                {template.draft && (
                                    <Typography variant="caption" className={styles.DraftLabel} align="center">
                                        Draft
                                    </Typography>
                                )}
                                <div style={{backgroundImage: `url(${template.image})`}} className={styles.ImageBlock}>
                                    <div className={styles.ImageMask}/>
                                    <div className={styles.ActionBlock}>
                                        <button  className={styles.ActionButton}/>
                                        <button  className={styles.ActionButton}/>
                                    </div>
                                </div>
                                <Typography variant="h5" className={styles.TemplateHeading} align="center">
                                    {template.title}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default connect((state) => ({
    templates: [
        {
            id: 1,
            title: "Manager template",
            image: mockTemplate,
            draft: false,
        },
        {
            id: 2,
            title: "Product template",
            image: mockTemplate,
            draft: false,
        },
        {
            id: 3,
            title: "Product template2",
            image: mockTemplate,
            draft: true,
        },
    ]
}))(Templates)
