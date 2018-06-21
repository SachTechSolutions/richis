
import React from 'react'

export class StepFour extends React.Component {

    render() {
        return (
            <div>
                <h3 className="fs-subtitle">Select Occupation</h3>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">trading</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">bank</button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">civil servant
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">management
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">medical</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">consuting
                        </button>
                        <button type="button"
                                className="btn btn-outline-info btn-rounded waves-effect">lawyer,accountant
                        </button>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">others</button>
                        {/*<button type="button" className="btn btn-outline-info btn-rounded waves-effect">Free enter
                        </button>*/}
                        <input type="text" placeholder={'Free Enter'} className='form-control' style={{borderRadius:27}}/>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Skip</button>
                    </div>
                </div>
            </div>
        )
    }
}
