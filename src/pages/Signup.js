import React, {Component} from 'react';
import whitelogo from '../images/logo/whitelogo.png';
class Signup extends Component {
    render() {
        return (
            <div class="container">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="../css/register.css"/>
            <div class="row">
                <div class="offset-md-4 col-lg-6 mt-5">
                    <form id="msform">
                       <h2 class="text-white">Welcome to RICHIES</h2>
                        <fieldset>
                            <h2 class="fs-title">Create your account <small>(basic registration)</small>
                                <img src={whitelogo} class="pb-3 logo-part" alt="singup"/>
                            </h2>
        
                            
                            <div class="row">
                                <div class="col-md-12">
                                    <lable>Nickname</lable>
                                    <input class="form-control" type="text" name="nickname" value="" placeholder="Enter your Nickname"/>
                                
                                </div>
                                
                            </div>
                            <input type="button" name="next" class="next action-button" value="Next" />
                        </fieldset>
        
                       
        
        
        
        
        
        
                    </form>
                </div>
            </div>
        </div>
        
        )
    }
}
    export default Signup;