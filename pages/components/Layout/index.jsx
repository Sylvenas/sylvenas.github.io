import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children }) {
    return (
        <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: 200 }}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}