import React from 'react'

import TopBar from './TopBar'


export default function BaseLayout({ children }) {
    return (
        <>
            <TopBar/>
            {children}
        </>
    )
}
