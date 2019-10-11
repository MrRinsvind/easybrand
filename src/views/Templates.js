import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Typography from 'common/components/Typography'
import styles from './Templates.module.scss'
import ImageTemplate1 from 'assets/email-template-1.svg'
import ImageTemplate2 from 'assets/email-template-2.svg'
import ImageTemplate3 from 'assets/email-template-3.svg'
import ImageTemplate4 from 'assets/email-template-4.svg'
import ImageTemplate5 from 'assets/email-template-5.svg'
import ImageTemplate6 from 'assets/email-template-6.svg'
import { ReactComponent as EditIcon } from 'assets/edit-icon.svg'
import { ReactComponent as TrashIcon } from 'assets/trash-icon.svg'
import { ReactComponent as PlusIcon } from 'assets/plus-icon.svg'
import Button from 'common/components/Button'

const ImageOfTemplates = [
    ImageTemplate1,
    ImageTemplate2,
    ImageTemplate3,
    ImageTemplate4,
    ImageTemplate5,
    ImageTemplate6,
]
function Templates({ templates, history }) {

    const handleTemplateClick = (param) => (e)=> {
        history.push(`/builder/${param}`)
    }

    const handleEditButtonClick = (param) => (e) => {
        e.stopPropagation()
        history.push(`/builder/${param}`)
    }

    const handleDeleteButtonClick = (param) => (e) => {
        e.stopPropagation()
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
}))(Templates)
