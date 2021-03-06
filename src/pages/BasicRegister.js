/**
 * Created by SachTech on 28-04-2018.
 */

import React, {Component} from 'react';
import {steps} from "../components/basicmultistep";
import MultiStep from '../components/multisteps/index'

class BasicRegister extends Component {
    render() {
        return (
            <div className="container">
                <link rel="stylesheet" href="../css/prog-tracker.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="../css/register.css"/>
                <div>
                    <MultiStep steps={steps}/>
                </div>
            </div>
        )
    }
}
    export default BasicRegister;