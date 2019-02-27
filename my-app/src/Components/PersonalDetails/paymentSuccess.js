import {NavLink} from 'react-router-dom'
import React, {Component } from 'react';

class paymentSuccess extends React.Component{
                constructor(props){
               super(props);

               }






render() {

            return(
                    <div id="Overhead">
                                  <div className="row" id="header">
                                      <div>
                                       <img id="carImg_2" src={require('../../Drawable/carImg_2.png')} />
                                      </div>
                                                                <div>
                                                                 <img id="logo" src={require('../../Drawable/logo.png') } />
                                                                </div>
                                 </div>


                                <div className="borderText">
                                     Purchase Complete
                                </div>
                                  <div className="err">
                                        {this.errorAlert}
                                  </div>

                                   <div> {/* Start of React JSX div for component */}
                                                 <div className="container">

                             {/* Start of className="col-xs-12" */}
                               <div className="col-xs-12">

                                   {/* Start of className="col-md-12" */}
                                   <div className="col-md-12">

                                       {/* Start of panel panel-primary */}
                                       <div className="panel panel-primary">

                                           {/* Start of panel heading */}
                                           <div className="panel-heading">
                                               <h2 id="load">Success</h2>
                                           </div> {/* End of panel heading */}

            </div>


  {/*1st row - FirstName*/}
                                                                               <label>Thanks for purchasing insurance with Allstate.</label>
                                                                               <br/>
                                                                               <label>Insurance documents have been Emailed to address provided.</label>
                        <ul className="headerLink">
                                                                                          <li className ="borderLinks" type="label"><NavLink id="navPayment" to="/">Home</NavLink></li>
                                                                                  </ul>





            </div>
            </div>
            </div>
            </div>

            </div>





    )

    }
    }

    export default paymentSuccess;