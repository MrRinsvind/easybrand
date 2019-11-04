import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Typography from 'common/components/Typography'
import styles from './Templates.module.scss'
import { ReactComponent as EditIcon } from 'assets/edit-icon.svg'
import { ReactComponent as TrashIcon } from 'assets/trash-icon.svg'
import { ReactComponent as PlusIcon } from 'assets/plus-icon.svg'
import Button from 'common/components/Button'
import { ImageOfTemplates } from 'common/constants/images'
import { removeTemplate } from 'store/templates/actions'

function Templates({ templates, history, removeTemplate }) {

    const handleTemplateClick = (param) => (e)=> {
        history.push(`/builder/${param}`)
    }

    const handleEditButtonClick = (param) => (e) => {
        e.stopPropagation()
        history.push(`/builder/${param}`)
    }

    const handleDeleteButtonClick = (param) => (e) => {
        e.stopPropagation()
        removeTemplate(param)
    }

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
                    { templates.data && !!templates.data.length && templates.data.map( template => (
                        <div className="col-4 mb-4" key={template.id}>
                            <div className={styles.TemplateItem} onClick={handleTemplateClick(template.id)}>
                                {template.draft && (
                                    <Typography variant="caption" className={styles.DraftLabel} align="center">
                                        Draft
                                    </Typography>
                                )}
                                <div className={styles.ImageBlock}>
                                    <img src={ImageOfTemplates[template.type]} alt=""/>
                                    <div className={styles.ImageMask}>
                                        <div className={styles.ActionBlock}>
                                            <Button
                                                variant='icon'
                                                icon={<EditIcon fill="white"/>}
                                                className={styles.ActionButton}
                                                onClick={handleEditButtonClick(template.id)}
                                            />
                                            <Button
                                                variant='icon'
                                                icon={<TrashIcon fill="white"/>}
                                                className={styles.ActionButton}
                                                onClick={handleDeleteButtonClick(template.id)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Typography variant="h4" className={styles.TemplateHeading} align="center">
                                    {template.templateName}
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
    templates: state.templates
}),{ removeTemplate })(Templates)
