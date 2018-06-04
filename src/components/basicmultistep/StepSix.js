
import React from 'react'

export class StepSix extends React.Component {

    render() {
        return (
            <div>
                <h3 className="fs-subtitle">Tabacco</h3>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">every day</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">do not smoke</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">some time</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">only during drinking</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">electric tabacco</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Skip</button>
                    </div>
                </div>
            </div>
        )
    }
}
