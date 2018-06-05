
import React from 'react'
import whitelogo from '../../images/logo/whitelogo.png';

export class StepOne extends React.Component {

    render() {
        return (
            <div>

                <h2 className="fs-title">Create your account <small>(basic registration)</small>

                </h2>
                <img src={whitelogo} alt="white logo" className="pb-3 logo-part"/>

                <h3 className="fs-subtitle">What is your height?</h3>
                <div className="row">
                    <div className="col-md-6">
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">80 to 90 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">91 to 100 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">101 to 110 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">111 to 115 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">116 to 120 cm
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">121 to 125 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">126 to 130 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">131 to 135 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">136 to 140 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Skip</button>
                    </div>
                </div>
            </div>

        )
    }
}
