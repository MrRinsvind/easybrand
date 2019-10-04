import React from 'react'
import toBe from 'prop-types'
import classnames from 'classnames'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import styles from './BuilderInput.module.scss'
import { ReactComponent as IconEdit } from 'assets/edit-icon.svg'
import { ReactComponent as IconTriangle } from 'assets/triangle.svg'
import { ReactComponent as IconLock } from 'assets/tooltiop-lock-icon.svg'
import { ReactComponent as IconVisibility } from 'assets/ic_visibility.svg'



TextInput.toBe = {
    type: toBe.string,
    name: toBe.string,
    placeholder: toBe.string,
    error: toBe.bool,
}

TextInput.defaultProps = {
    type: 'text',
    error: false,
    name: null,
    placeholder: '',
}

const inputIcons = {
    "edit": IconEdit,
    "invisible": IconLock,
    "view": IconVisibility,
}


export default function TextInput({
        onChange,
        value,
        type,
        name,
        meta,
        onFocus,
        placeholder,
        ...restProps
    }) {

    const { error, touched, active } = meta

    const handleChange = (e) => {
        console.log('handleChange')
        onChange({
            ...value,
            text: e.target.value,
        })
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleChangeStatus = (type) => (data) => {
        onChange({
                ...value,
            status: type,
        })
        setAnchorEl(null)
    }

    const ActiveIcon = inputIcons[value.status] || inputIcons.edit

    return (
        <div className={classnames(
            styles.InputWrapper,
            {
                [styles['InputWrapper--active']]: active
            }
        )}>
            <input
                onFocus={onFocus}
                type={type}
                value={value.text}
                onChange={handleChange}
                name={name}
                className={styles.InputField}
                autoComplete="off"
                placeholder={placeholder}
            />
            <button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={styles.InputDropDown}
            >
                <ActiveIcon fill="#9590D9"/>
                <IconTriangle fill="#9590D9 "/>
            </button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                classes={{
                    list: styles.DropDownMenuList,
                    paper: styles.DropDownMenuPaper,
                }}
            >
                <MenuItem
                    onClick={handleChangeStatus('edit')}
                    classes={{
                        root: styles.MenuItem,
                        selected: styles['MenuItem--Active'],
                    }}
                >
                    <span className={styles.SpanMenuItem}>
                         <IconEdit fill="#464375"/>
                    </span>
                    Can Edit
                </MenuItem>
                <MenuItem
                    onClick={handleChangeStatus('view')}
                    classes={{
                        root: styles.MenuItem,
                        selected: styles['MenuItem--Active'],
                    }}
                >
                    <span className={styles.SpanMenuItem}>
                        <IconVisibility fill="#464375"/>
                    </span>
                    View
                </MenuItem>
                <MenuItem
                    onClick={handleChangeStatus('invisible')}
                    classes={{
                        root: styles.MenuItem,
                        selected: styles['MenuItem--Active'],
                    }}
                >
                    <span className={styles.SpanMenuItem}>
                        <IconLock fill="#464375"/>
                    </span>
                    Invisible
                </MenuItem>
            </Menu>
        </div>
    )
}
