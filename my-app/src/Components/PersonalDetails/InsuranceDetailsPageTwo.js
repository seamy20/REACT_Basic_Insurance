import {NavLink} from 'react-router-dom'
import React, {Component } from 'react';


class InsuranceDetailsPageTwo extends React.Component{
constructor(props)
{
super(props);
 this.inputPreviousInsurerref = React.createRef();
               this.validationCheck = "/InsuranceDetailsPageTwo";
               this.errorAlertDrivingExp = "";
               this.errorAlertViolation = "";
               this.errorAlertCoverage = "";
}



 handleInputChange =(event)=>{
 this.validation();
      //event.preventDefault();
      const e = event.target.checked;

      if(event.target.id ==="coverage")
      {
      if(event.target.checked === true)
      {
        //console.log("ddddddd",e);
      this.props.updateInsuranceDetails("coverage",event.target.name,event.target.value);
      }
      else
      {
       this.props.updateInsuranceDetails("void",event.target.name,event.target.value);

      }

      }
      else

            //Use the updatePersonalDetails to update object in parent compenent(app.js).
             this.props.updateInsuranceDetails("insurance",event.target.name,event.target.value);
    }
    //Function that is provoked when user submits form.
            handleSubmit =(event)=> {
            event.preventDefault();
            const data = this.state;

            //Used to view object in console. Can be removed when completed.
            this.props.showstate();
            }

            validation =(event)=>{
                            const  ViolationsYES = document.getElementById('ViolationsYES').checked;
                            const  ViolationsNO = document.getElementById('ViolationsNO').checked;
                            const  DrivingExperience0 = document.getElementById('DrivingExperience0').checked;
                            const  DrivingExperience30 = document.getElementById('DrivingExperience30').checked;
                            const  DrivingExperience44 = document.getElementById('DrivingExperience44').checked;
                            const  DrivingExperience45 = document.getElementById('DrivingExperience45').checked;
                            const  coverage1 = document.getElementById('coverage1').checked;
                            const  coverage2 = document.getElementById('coverage2').checked;
                            const  coverage3 = document.getElementById('coverage3').checked;
                            const  coverage4 = document.getElementById('coverage4').checked;
                            const  coverage5 = document.getElementById('coverage5').checked;
                            const  coverage6 = document.getElementById('coverage6').checked;
                            const  coverage7 = document.getElementById('coverage7').checked;
                            const  coverage8 = document.getElementById('coverage8').checked;
                            const  coverage9 = document.getElementById('coverage9').checked;
                            const  coverage10 = document.getElementById('coverage10').checked;


                             if((DrivingExperience0 === false || DrivingExperience30 === false || DrivingExperience44 === false
                                          || DrivingExperience45 === false))
                                         {
                                              this.errorAlertDrivingExp="Please indicate your driving experience";
                                         }

                             if((DrivingExperience0 === true || DrivingExperience30 === true || DrivingExperience44 === true
                                          || DrivingExperience45 === true))
                                         {
                                              this.errorAlertDrivingExp="";
                                         }


                             if((ViolationsYES === false || ViolationsNO === false))
                                      {
                                             this.errorAlertViolation="Please indicate weather you have had a driving violation";
                                      }
                             if((ViolationsYES === true || ViolationsNO === true))
                                      {
                                             this.errorAlertViolation="";
                                      }

                             if((coverage1 === false || coverage1 === false || coverage2 === false || coverage3 === false || coverage4 === false
                                        || coverage5 === false || coverage6 === false || coverage7 === false || coverage8 === false || coverage9 === false || coverage10 === false) )
                                       {
                                             this.errorAlertCoverage="Please select at least one coverage type";
                                       }

                                       if((coverage1 === true || coverage1 === true || coverage2 === true || coverage3 === true || coverage4 === true
                                        || coverage5 === true || coverage6 === true || coverage7 === true || coverage8 === true || coverage9 === true || coverage10 === true) )
                                       {
                                             this.errorAlertCoverage="";
                                       }



                                             if((ViolationsYES === true || ViolationsNO === true) && (DrivingExperience0 === true || DrivingExperience30 === true || DrivingExperience44 === true
                                              || DrivingExperience45 === true) && (coverage1 === true || coverage1 === true || coverage2 === true || coverage3 === true || coverage4 === true
                                              || coverage5 === true || coverage6 === true || coverage7 === true || coverage8 === true || coverage9 === true || coverage10 === true) )
                                             {
                                                   this.validationCheck= "/InsurancePriceBreakdown";
                                             }
                                             else
                                               this.validationCheck = "/InsuranceDetailsPageTwo";



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
                         Previous Insurer Details:
                     </div>

                    <div className ="container">

                                         <form>
                                                     <div className="row">
                                                                 <label id="chkBox">How many years claim free?</label><label className="err">   {this.errorAlertViolation}</label>
                                                                  <br></br>

                                                           <div className="col-15">
                                                                <label class="containerRadio">1-5
                                                                  <input type="radio" value="1-5" name = "Violations" id="ViolationsYES" onChange={this.handleInputChange}/>
                                                                  <span class="checkmarkRadio"></span>
                                                                </label>
                                                                <label class="containerRadio">6+
                                                                  <input type="radio" value = "6+" name="Violations" id="ViolationsNO" onChange={this.handleInputChange}/>
                                                                  <span class="checkmarkRadio"></span>
                                                                </label>
                                                            </div>
                                                     </div>

                                                     <div className="row">
                                                               <label id="chkBox"> Coverage Type - Select Five:</label><label className="err">   {this.errorAlertCoverage}</label>
                                                          <br></br>
                                                                <div className="col-15">
                                                                   <label class="containerCheckBox">Comprehensive
                                                                     <input type="checkbox" id="coverage1" name = "Comprehensive"  onClick={this.handleInputChange}/>
                                                                     <span class="checkmark"></span>
                                                                   </label>
                                                                   <label class="containerCheckBox">Uninsured Motorist
                                                                     <input type="checkbox" id="coverage2" name = "UninsuredMotorist"onClick={this.handleInputChange}/>
                                                                     <span class="checkmark"></span>
                                                                   </label>
                                                                   <label class="containerCheckBox">Collision
                                                                     <input type="checkbox" id="coverage3" name = "Collision" onClick={this.handleInputChange} />
                                                                     <span class="checkmark"></span>
                                                                   </label>
                                                                   <label class="containerCheckBox">Bodily Injured
                                                                     <input type="checkbox" id="coverage4" name = "Bodily Injured"onClick={this.handleInputChange}/>
                                                                     <span class="checkmark"></span>
                                                                   </label>
                                                                   <label class="containerCheckBox">Uninsured
                                                                     <input type="checkbox" id="coverage5" name = "Uninsured" onClick={this.handleInputChange} />
                                                                     <span class="checkmark"></span>
                                                                   </label>
                                                                </div>


                                                                <div className="col-15">
                                                                   <label class="containerCheckBox">Medical Payments Coverage
                                                                     <input type="checkbox" id="coverage6" name = "MedicalpaymentsCoverag"  onClick={this.handleInputChange}/>
                                                                     <span class="checkmark"></span>
                                                                   </label>
                                                                   <label class="containerCheckBox">Gap Insurance
                                                                     <input type="checkbox" id="coverage7" name = "Gapinsurance"onClick={this.handleInputChange}/>
                                                                     <span class="checkmark"></span>
                                                                   </label>
                                                                   <label class="containerCheckBox">Personal Injury Protection
                                                                     <input type="checkbox" id="coverage8" name = "PersonalInjuryProtectionInsurance" onClick={this.handleInputChange} />
                                                                     <span class="checkmark"></span>
                                                                   </label>
                                                                   <label class="containerCheckBox">Classic Car
                                                                     <input type="checkbox" id="coverage9" name = "ClassicCar"onClick={this.handleInputChange}/>
                                                                     <span class="checkmark"></span>
                                                                   </label>
                                                                   <label class="containerCheckBox">Towing & Labor
                                                                     <input type="checkbox" id="coverage10" name = "TowingAndLaborInsurance" onClick={this.handleInputChange} />
                                                                     <span class="checkmark"></span>
                                                                   </label>
                                                                </div>
                                                     </div>

                                                      <div className="row">

                                                             <label id="chkBox">Driving Experience: </label><label className="err">   {this.errorAlertDrivingExp}</label>
                                                                  <br></br>

                                                           <div className="col-15">
                                                                <label class="containerRadio">0-5
                                                                  <input type="radio" value="0-5" name = "DrivingExperience" id="DrivingExperience0" onChange={this.handleInputChange}/>
                                                                  <span class="checkmarkRadio"></span>
                                                                </label>
                                                                <label class="containerRadio">6-30
                                                                  <input type="radio" value = "6-30" name="DrivingExperience" id="DrivingExperience30" onChange={this.handleInputChange}/>
                                                                  <span class="checkmarkRadio"></span>
                                                                </label>
                                                                <label class="containerRadio">30-44
                                                                  <input type="radio" value = "30-44" name="DrivingExperience" id="DrivingExperience44" onChange={this.handleInputChange}/>
                                                                  <span class="checkmarkRadio"></span>
                                                                </label>
                                                                <label class="containerRadio">45+
                                                                  <input type="radio" value = "45+" name="DrivingExperience" id="DrivingExperience45" onChange={this.handleInputChange}/>
                                                                  <span class="checkmarkRadio"></span>
                                                                </label>
                                                            </div>


                                                     </div>

                                                        <div className="row">

                                                             </div>


                                                              <div className="borderButtons">
                                                                   <ul className="headerLink">
                                                                       <li type="label"><NavLink id="nav" onClick={this.validation} to={this.validationCheck}>Next</NavLink></li>
                                                                   </ul>
                                                              </div>

                                         </form>

                    </div>

                </div>


            )


           }
          }
    export default InsuranceDetailsPageTwo;
