import React from "react"
import { Link } from 'react-router-dom'

import style from './TopBar.module.scss'
import thinkingMan from 'assets/company-logo.svg'


export default function TopBar() {
    return (
        <header className={style.topBar}>
            <Link to="/templates">
                <img src={thinkingMan} alt="company name"/>
            </Link>
        </header>
    )
}

