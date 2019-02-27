import {NavLink} from 'react-router-dom';
import React, {Component } from 'react';
import DatePicker from 'react-date-picker';

import "react-datepicker/dist/react-datepicker.css";


class InsuranceDetails extends React.Component{
constructor(props)
{
super(props);
this.state = {
      startDate: new Date()
    };
 this.inputPreviousInsurerref = React.createRef();
               this.validationCheck = "/InsuranceDetails";
               this.errorAlert = "";
               this.errorDate = "";
}


  onChange = date => this.setState({ date })


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
            this.validation();
            //Used to view object in console. Can be removed when completed.
            this.props.showstate();
            }

            validation =(event)=>{
                const  PreviousInsurer = document.getElementById('PreviousInsurer').value;
                const  PreviousPolicyNumber = document.getElementById('PreviousPolicyNumber').value;
                const  endDate = this.state.date;

                console.log(endDate)

             if(endDate === null)            {  this.errorDate = "Please Select an end date";}


                //PreviousPolicyNumber Validation
                if(PreviousPolicyNumber === "")            {   document.getElementById("PreviousPolicyNumber").style.border = "3px solid #FFC300";
                                                  document.getElementById('PreviousPolicyNumber').className += " formInvalid";
                                                  document.getElementById('PreviousPolicyNumber').placeholder="Please enter the previous policy number"}
                if(PreviousPolicyNumber !== "")            {   document.getElementById("PreviousPolicyNumber").style.border = "none";}

                //PreviousInsurer Validation
                if(PreviousInsurer === "")            {   document.getElementById("PreviousInsurer").style.border = "3px solid #FFC300";
                                                  document.getElementById('PreviousInsurer').className += " formInvalid";
                                                  document.getElementById('PreviousInsurer').placeholder="Please enter the previous insurer"}
                if(PreviousInsurer !== "")            {   document.getElementById("PreviousInsurer").style.border = "none";}

                if(PreviousInsurer !== "" && PreviousPolicyNumber !== "")
                {
                       this.validationCheck= "/InsuranceDetailsPageTwo";
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
                         Previous Insurer Details:
                     </div>

                                       <div className="err">
                                             {this.errorAlert}
                                       </div>

                    <div className ="container">

         <form >
                                    <label>Previous Insurer</label>
                                   <input ref={this.inputPreviousInsurerref}
                                            type="text" id="PreviousInsurer"
                                            name="PreviousInsurer"
                                            placeholder="Previous Insurer..."
                                            onChange={this.handleInputChange}
                                   />

                                    <label>Previous Policy Number</label>
                                   <input type="text"
                                          id="PreviousPolicyNumber"
                                          name="PreviousPolicyNumber"
                                          placeholder="Previous Policy Number..."
                                          onChange={this.handleInputChange}
                                   />

                                    <label>Policy End Date</label>
                                    <br/>
                                    <div>
                                        <DatePicker
                                        id="endDate"
                                        className="datePicker"
                                        name="endDate"
                                          onChange={this.onChange}
                                          selected={this.state.startDate}
                                          value={this.state.date}
                                        />
                                        {this.errorDate}
                                      </div>
                                   <br/>
                                   <br/>

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
    export default InsuranceDetails;
