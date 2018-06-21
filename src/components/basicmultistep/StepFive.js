
import React from 'react'

export class StepFive extends React.Component {

    render() {
        return (
            <div>
                <h3 className="fs-subtitle">Annual Income</h3>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">$500K～$700K
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">$701～$900K
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">$901K～$1100K
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">$1100K～$1600K
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">$1600K～$2400K
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">More Than
                            $240K
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Skip</button>
                    </div>
                </div>
            </div>
        )
    }
}
