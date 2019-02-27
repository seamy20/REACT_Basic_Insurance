import {NavLink} from 'react-router-dom'
import React, {Component } from 'react';

class paymentPage extends React.Component{
                constructor(props){
               super(props);
               }

             handleInputChange =(event)=>{
                this.validation();

    }



                validation =(event)=>{
                        const  NameOnCard = document.getElementById('NameOnCard').value;
                        const  CardNo = document.getElementById('CardNo').value;
                        const  exp = document.getElementById('exp').value;
                        const  CVV = document.getElementById('CVV').value;

                        //Name ON Card Validation
                        if(NameOnCard === "")            {   document.getElementById("NameOnCard").style.border = "3px solid #FFC300";
                                                            document.getElementById('NameOnCard').className += " formInvalid";
                                                            document.getElementById('NameOnCard').placeholder="Please enter the name on the card"}
                        if(NameOnCard !== "")            {   document.getElementById("NameOnCard").style.border = "none";}


                        //CAr No Validation
                        if(CardNo === "")            {   document.getElementById("CardNo").style.border = "3px solid #FFC300";
                                                        document.getElementById('CardNo').placeholder="Please enter a valid card number"}
                                                        document.getElementById('CardNo').className += " formInvalid";
                        if(CardNo !== "")            {   document.getElementById("CardNo").style.border = "none";}

                        //Expirey Date Validation
                        if(exp === "")            {   document.getElementById("exp").style.border = "3px solid #FFC300";
                                                          document.getElementById('exp').className += " formInvalid";
                                                          document.getElementById('exp').placeholder="Please enter the expirey date of the card";}
                        if(exp !== "")            {   document.getElementById("exp").style.border = "none";}

                        //CVV Validation Validation
                        if(CVV === "")            {   document.getElementById("CVV").style.border = "3px solid #FFC300";
                                                          document.getElementById('CVV').className += " formInvalid";
                                                          document.getElementById('CVV').placeholder="Please enter a valid CVV Number";}
                        if(CVV !== "")            {   document.getElementById("CVV").style.border = "none";}



                        if(NameOnCard !== "" && CardNo !== "" && exp !== "" && CVV !== "")
                        {
                                 this.validationCheck = "/loadingPage";
                              this.errorAlert="";



                        }

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
                         Purchase Insurance
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
                                   <h2>Payment</h2>
                               </div> {/* End of panel heading */}

</div>

                                {/*1st row - FirstName*/}
                                                                               <label>Name On Card</label>
                                                                               <br/>
                                                                               <input   type="text"
                                                                                        ref={this.inputVinNumberref}
                                                                                        id="NameOnCard"
                                                                                        name="NameOnCard"
                                                                                        placeholder="Name on card ..."
                                                                                        onBlur={this.getCarDetails}
                                                                                        onChange={this.handleInputChange}

                                                                               /><br/>

                                                                               {/*1st row - FirstName*/}
                                                                               <label>Card No</label><br/>
                                                                               <input   type="text"
                                                                                         ref={this.inputVinNumberref}
                                                                                         id="CardNo"
                                                                                         name="CardNo"
                                                                                         placeholder="xxxx-xxxx-xxxx-xxxx"
                                                                                         onChange={this.handleInputChange}

                                                                               /><br/>

                                                                                 {/*1st row - FirstName*/}
                                                                     <label>Expire</label>
                                                                   <input   type="text"
                                                                  ref={this.inputVinNumberref}
                                                                 id="exp"
                                                                 name="exp"
                                                                 placeholder="MM/YYYY"
                                                                onChange={this.handleInputChange}
                                                               />

                                                                              {/*1st row - FirstName*/}
                                                                <label>CVV</label>
                                                              <input   type="text"
                                                              ref={this.inputVinNumberref}
                                                            id="CVV"
                                                             name="CVV"
                                                             placeholder="CVV ..."
                                                             onChange={this.handleInputChange}
                                                              />

<div className="borderButtons">
<br/>
                                                              <ul className="headerLink">
                                                                      <li className ="borderLinks" type="label"><NavLink id="navPayment" onClick={this.validation} to="/loading">Complete Purchase</NavLink></li>
                                                              </ul>
                       </div>



</div>
</div>



                                     </div>
                        </div>



                      </div>



           )
  } //end of render
}


export default paymentPage;



















