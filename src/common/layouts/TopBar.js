import React from "react"
import style from './TopBar.module.scss'
import thinkingMan from 'assets/company-logo.svg'

export default function TopBar() {
    return (
        <header className={style.topBar}>
            <div>
                <img src={thinkingMan} alt="company name"/>
            </div>
            <div>
                <button className={style.settingsBtn}><span>Settings</span>
                    <div className={style.settingsIcon}></div>
                </button>
            </div>
        </header>
    )
}

