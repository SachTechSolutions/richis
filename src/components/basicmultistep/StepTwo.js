'use strict'
import React from 'react'

export class StepTwo extends React.Component {
    render() {
        return (
            <div>
                <h3 className="fs-subtitle">Select Body Type</h3>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <h5>Male</h5>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Slim</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">A Little
                            Slendar
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Normal</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Solidly</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Chubby</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Skip</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <h5>Female</h5>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Slim</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">A Little
                            Slendar
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Normal</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Glamor</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Chubby</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Skip</button>
                    </div>
                </div>
            </div>
        )
    }
}
