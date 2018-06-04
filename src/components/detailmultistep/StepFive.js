'use strict'
import React from 'react'

export class StepFive extends React.Component {

    render() {
        return (
            <div>
                <h3 className="fs-subtitle">Prisence of children</h3>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">yes, I have</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">None</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">skip</button>
                    </div>
                </div>
            </div>
        )
    }
}
