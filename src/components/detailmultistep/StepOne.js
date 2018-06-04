'use strict'
import React from 'react'
import whitelogo from '../../images/logo/whitelogo.png';

export class StepOne extends React.Component {

    render() {
        return (
            <div>
                <h2 className="fs-title">Detail Registration
                    <img src={whitelogo} alt="white logo" className="pb-3 logo-part"/>
                </h2>
                <h3 className="fs-subtitle">Purpose for Registration Here</h3>
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">looking for friend</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">just want an aquaintance</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">falling in love</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">marriage</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">others</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Skip</button>
                    </div>
                </div>
            </div>
        )
    }
}
