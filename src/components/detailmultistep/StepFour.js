'use strict'
import React from 'react'

export class StepFour extends React.Component {

    render() {
        return (
            <div>
                <h3 className="fs-subtitle">how do you treat him/her?</h3>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">meet as a frank friend</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">meet when he/she is near with GPS search</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">want to meet alone together</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">if we can get along well after exchanging messages</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">skip</button>
                    </div>
                </div>
            </div>
        )
    }
}
