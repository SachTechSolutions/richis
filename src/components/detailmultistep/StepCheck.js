
import React from 'react'
import { Link } from 'react-router-dom';

export class StepCheck extends React.Component {

    render() {
        return (
            <div>
                <h3 className="fs-subtitle">Check-Point</h3>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <label>Purpose</label>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Looking For Friend
                        </button>
                        <label>Willingness</label>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Nuetral</button>
                        <label>Marital</label>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">No</button>
                    </div>
                        <div className="col-md-6 text-center">
                            <label>How Treat</label>
                            <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Meet As a Frank Friend</button>
                            <label>Children</label>
                            <button type="button" className="btn btn-outline-info btn-rounded waves-effect">No
                            </button>

                        </div>
                    </div>
                    <Link to={'/'} type="button" name="next" className="next action-button btn-n next-step" >Create An Account</Link>
                </div>


        )
    }
}
