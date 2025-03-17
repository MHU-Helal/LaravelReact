import React from 'react'

const Footer = () => {
    let year = new Date();
    year = year.getFullYear();
    return (
        <>
            {/* App footer starts */}
            <div className="app-footer bg-white">
                <span>© ReviveMe {year}</span>
            </div>
            {/* App footer ends */}
        </>
    )
}

export default Footer