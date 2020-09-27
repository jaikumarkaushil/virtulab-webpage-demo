import React from 'react';
export const Loading = () => {
    return(
        <div className="position-parent">
            <div className="middle-position-center">
                <div className="text-center">
                    <span className="fa fa-spinner fa-puyarn lse fa-3x fa-fw text-primary"></span>
                    <p>Loading . . .</p>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center">
                    <img src="assets/images/VirtuLab by DD Icon_White png 1@2x.svg" alt="brand-logo.svg"/>
                    <h1 className="ml-3">Homepage</h1>
                </div>
            </div>
        </div>
    )
}
