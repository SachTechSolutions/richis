import React, {Component} from 'react';
import whitelogo from '../images/logo/whitelogo.png';
class Signup extends Component {
    render() {
        return (

            <div className="container">

                <link rel="stylesheet" href="../css/register.css"/>
                <div className="row">
                    <div className="col-md-offset-4 col-lg-6 mt-5" style={{marginTop:20}}>
                        <form id="msform">
                            <fieldset>
                                <h2 className="fs-title">Welcome to RICHIES
                                <img src={whitelogo} className="pb-3 logo-part" alt={'hello'}/>
                                </h2>

                                <h3 className="fs-subtitle">Create An Account</h3>
                                <div className="row">
                                    <div className="col-md-12">
                                        <hr style={{borderColor:'#fff'}}/>
                                        <label style={{padding:0}} className="col-md-12">Nick Name</label>
                                        <input type="text" className="form-control col-md-12"  placeholder="Enter your nick name"
                                               style={{padding:9,borderRadius:8,marginBottom:0}}/>
                                        <label  style={{marginTop:5,padding:0}} className="col-md-12">Gender</label>
                                        <select className="form-control">
                                            <option> Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                        <label style={{marginTop:5}}>Birth Date</label>
                                        <select className="form-control">
                                            <option>Select Birth Date</option>
                                            <option>2000</option>
                                            <option>1999</option>
                                            <option>1998</option>
                                            <option>1997</option>
                                            <option>1996</option>
                                            <option>1995</option>
                                            <option>1994</option>
                                            <option>1993</option>
                                            <option>1992</option>
                                            <option>1991</option>
                                            <option>1990</option>
                                            <option>1989</option>
                                            <option>1988</option>
                                            <option>1987</option>
                                            <option>1986</option>
                                            <option>1985</option>
                                            <option>1984</option>
                                            <option>1983</option>
                                            <option>1982</option>
                                            <option>1981</option>
                                            <option>1980</option>
                                            <option>1979</option>
                                            <option>1978</option>
                                            <option>1977</option>
                                            <option>1976</option>
                                            <option>1975</option>
                                            <option>1974</option>
                                            <option>1973</option>
                                            <option>1972</option>
                                            <option>1971</option>
                                            <option>1970</option>
                                            <option>1969</option>
                                            <option>1968</option>
                                            <option>1967</option>
                                            <option>1966</option>
                                            <option>1965</option>
                                            <option>1964</option>
                                            <option>1963</option>
                                        </select>
                                        <label style={{marginTop:5}}>Select Residence</label>
                                        <select className="form-control">
                                            <option>Select Residence</option>
                                            <option>Hokkaido</option>
                                            <option>Aomori</option>
                                            <option>Iwate</option>
                                            <option>Miyagi</option>
                                            <option>Akita</option>
                                            <option>Yamagata</option>
                                            <option>Fukushima</option>
                                            <option>Ibaraki</option>
                                            <option>Tochigi</option>
                                            <option>Gunma</option>
                                            <option>Saitama</option>
                                            <option>Chiba</option>
                                            <option>Tokyo</option>
                                            <option>Kanagawa</option>
                                            <option>Niigata</option>
                                            <option>Toyama</option>
                                            <option>Ishikawa</option>
                                        </select>
                                        <input type="button" name="next" className="next action-button"
                                               value="Register" onClick={()=>this.onRegisterPress()}/>
                                    </div>
                                </div>

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        
        )
    }

    onRegisterPress() {
        // alert('item pressed');
        window.location.href = '/BasicRegister';
    }
}
    export default Signup;