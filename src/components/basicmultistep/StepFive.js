
import React from 'react'

export class StepFive extends React.Component {

    render() {
        return (
            <div>
                <h3 className="fs-subtitle">Annual Income</h3>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">$50K～$70K
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">$70K～$90K
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">$91K～$110K
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">$111K～$120K
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">$121K～$131K
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
