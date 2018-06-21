
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
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">130 to 135 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">136 to 140 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">141 to 145 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">146 to 150 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">151 to 160 cm
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">160 to 170 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">171 to 180 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">181 to 190 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">191 to 200 cm
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Skip</button>
                    </div>
                </div>
            </div>

        )
    }
}
