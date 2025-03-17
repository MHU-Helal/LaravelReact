import React from 'react'

const Loading = () => {
    return (
        <>
            {/* Loading starts */}

            <div id="loading-wrapper">
                <div className="spin-wrapper">
                    <div className="spin">
                        <div className="inner" />
                    </div>
                    <div className="spin">
                        <div className="inner" />
                    </div>
                    <div className="spin">
                        <div className="inner" />
                    </div>
                    <div className="spin">
                        <div className="inner" />
                    </div>
                    <div className="spin">
                        <div className="inner" />
                    </div>
                    <div className="spin">
                        <div className="inner" />
                    </div>
                </div>
            </div>

            {/* Loading ends */}
        </>
    )
}

export default Loading