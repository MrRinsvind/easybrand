import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Typography from 'common/components/Typography'
import styles from './Templates.module.scss'
import mockTemplate from 'assets/email-template-1.svg'
import { ReactComponent as EditIcon } from 'assets/edit-icon.svg'
import { ReactComponent as TrashIcon } from 'assets/trash-icon.svg'
import { ReactComponent as PlusIcon } from 'assets/plus-icon.svg'

import Button from 'common/components/Button'


function Templates({ templates }) {
    return (
        <div className={styles.Wrapper}>
            <div className="container">
                <Typography variant="h2" className={styles.PageHeading}>
                    Signature templates
                </Typography>
                <div className="row">
                    <div className="col-4 mb-4">
                        <Link to="/builder" className={styles.NewTemplateButton}>
                            <div className={styles.NewTemplateButton__ContentBlock}>
                                <button className={styles.NewTemplateButton__PlusButton}><PlusIcon/></button>
                                <Typography variant="body" className={styles.NewTemplateButton__ContentText}>
                                    Add new template
                                </Typography>
                            </div>
                        </Link>
                    </div>
                    { templates.length && templates.map( template => (
                        <div className="col-4 mb-4" key={template.id}>
                            <div className={styles.TemplateItem}>
                                {template.draft && (
                                    <Typography variant="caption" className={styles.DraftLabel} align="center">
                                        Draft
                                    </Typography>
                                )}
                                <div className={styles.ImageBlock}>
                                    <img src={template.image} alt=""/>
                                    <div className={styles.ImageMask}>
                                        <div className={styles.ActionBlock}>
                                            <Button
                                                icon={<EditIcon fill="white"/>}
                                                className={styles.ActionButton}
                                            />
                                            <Button
                                                icon={<TrashIcon fill="white"/>}
                                                className={styles.ActionButton}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Typography variant="h4" className={styles.TemplateHeading} align="center">
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
