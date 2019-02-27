import {NavLink} from 'react-router-dom'
import React, {Component } from 'react'

class CarPageThree extends React.Component{
 constructor(props)
 {
super(props)
 this.inputVinNumberref = React.createRef();
 this.validationCheck = "/CarPageThree";
 this.errorAlert = "";
}

 handleInputChange =(event)=>{
      event.preventDefault();
            //Use the updatePersonalDetails to update object in parent compenent(app.js).
             this.props.updateCarDetails("car",event.target.name,event.target.value);
    }

     handleInputChange =(event)=>{
     this.validation();
          //event.preventDefault();
          const e = event.target.checked;

          if(event.target.id ==="car")
          {
          if(event.target.checked === true)
          {
            //console.log("ddddddd",e);
          this.props.updateCarDetails("car",event.target.name,event.target.value);
          }
          else
          {
           this.props.updateInsuranceDetails("void",event.target.name,event.target.value);

          }

          }
          else

                //Use the updatePersonalDetails to update object in parent compenent(app.js).
                 this.props.updateCarDetails("car",event.target.name,event.target.value);
        }
    //Function that is provoked when user submits form.
            handleSubmit =(event)=> {
            event.preventDefault();
            const data = this.state;
            this.validation();

            this.props.showstate();
            }

                        validation =(event)=>{
                                   this.validationCheck= "/InsuranceDetails";



                        }



   render() {

        return (
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
                     LETS GET YOUR CAR DETAILS
                </div>
                  <div className="err">
                        {this.errorAlert}
                  </div>

                {/*Main form container */}
                <div className ="container">
                     {/* Start of form */}
                    <form>
                                                     <div className="row">
                                                                 <label id="chkBox">Has your vehicle been Modified from dealer specification?</label>
                                                                  <br></br>

                                                           <div className="col-15">
                                                                <label class="containerRadio">Yes
                                                                  <input type="radio" id="modifiedButton" name="modified" value="Yes" onChange={this.handleInputChange}/>
                                                                  <span class="checkmarkRadio"></span>
                                                                </label>
                                                                <label class="containerRadio">No
                                                                  <input type="radio" id="modifiedButton" name="modified" value="No" onChange={this.handleInputChange}/>
                                                                  <span class="checkmarkRadio"></span>
                                                                </label>
                                                            </div>
                                                     </div>


                                                 {/*5th row use and mileage*/}
                                                      <div className="row">
                                                             <label id="chkBox">Has your vehicle a Dealer installed Alarm?</label>
                                                                <br></br>

                                                         <div className="col-15">
                                                              <label class="containerRadio">Yes
                                                                <input type="radio"  id="alarmButton" name="alarm" value="Yes" onChange={this.handleInputChange}/>
                                                                <span class="checkmarkRadio"></span>
                                                              </label>
                                                              <label class="containerRadio">No
                                                                <input type="radio"id="alarmButton" name="alarm" value="No"  onChange={this.handleInputChange}/>
                                                                <span class="checkmarkRadio"></span>
                                                              </label>
                                                          </div>
                                                      </div>



                                                        <div className="row">

                                                             <label id="chkBox">Has your vehicle a Dealer installed Immobilizer?</label>
                                                                <br></br>

                                                         <div className="col-15">
                                                              <label class="containerRadio">Yes
                                                                <input type="radio"  id="immobilizer" name="Immobilizer" value="Yes" onChange={this.handleInputChange}/>
                                                                <span class="checkmarkRadio"></span>
                                                              </label>
                                                              <label class="containerRadio">No
                                                                <input type="radio" id="immobilizer" name="Immobilizer" value="No" onChange={this.handleInputChange}/>
                                                                <span class="checkmarkRadio"></span>
                                                              </label>
                                                         </div>
                                                       </div>


                                                       <div className="row">

                                                             <label id="chkBox">Has your vehicle a Dealer installed Tracking system?</label>
                                                                <br></br>

                                                         <div className="col-15">
                                                              <label class="containerRadio">Yes
                                                                <input type="radio" id="tracking" name="Tracking" value="Yes" onChange={this.handleInputChange}/>
                                                                <span class="checkmarkRadio"></span>
                                                              </label>
                                                              <label class="containerRadio">No
                                                                <input type="radio" id="tracking" name="Tracking" value="No" onChange={this.handleInputChange}/>
                                                                <span class="checkmarkRadio"></span>
                                                              </label>
                                                         </div>
                                                       </div>


                            <div className="borderButtons">
                                       <ul className="headerLink">
                                               <li className ="borderLinks" type="label"><NavLink id="nav" onClick={this.validation} to={this.validationCheck}>Next</NavLink></li>
                                       </ul>
                            </div>
                    </form>
                </div>
           </div>
        )
   }
 }
export default CarPageThree;