'use strict'
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export class StepCheck extends React.Component {

    render() {
        return (
            <div>
                <h3 className="fs-subtitle">Check-Point</h3>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <label>Height</label>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">113 to 135
                        </button>
                        <label>Body Type</label>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Slim</button>
                        <label>Residence</label>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Tokyo</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <label>Occupation</label>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Trading</button>
                        <label>Annual Income</label>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">$50k~$70k
                        </button>
                        <label>Tobacco</label>
                        <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Some Time
                        </button>
                    </div>
                </div>

                <Link to={'/DetailRegister'} type="button" name="next" className="next action-button btn-n next-step" >Ok</Link>

            </div>
        )
    }
}
