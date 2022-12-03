import React, { Component } from 'react';
import './Loader.scss';

/* loader component  */
export default class Loader extends Component {
    render() {
        return (
            <div className="sf-cstm-loader d-flex align-content-center flex-direction-column">
                <div className="loader-position spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}