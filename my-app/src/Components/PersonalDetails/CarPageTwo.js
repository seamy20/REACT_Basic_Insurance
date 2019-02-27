import {NavLink} from 'react-router-dom'
import React, {Component } from 'react';

class CarPageTwo extends React.Component{
 constructor(props){
               super(props)
                this.inputVinNumberref = React.createRef();
               this.validationCheck = "/CarPageTwo";
               this.errorAlert = "";
               }

 handleInputChange =(event)=>{
      event.preventDefault();
       this.validation();
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


                                const  mileage = document.getElementById('mileage').value;
                                const  primaryUse = document.getElementById('primaryUse').value;
                                const  parking = document.getElementById('parking').value;
                                const  ownLease = document.getElementById('ownLease').value;

                                //mileage Validation
                                if(mileage === "")            {   document.getElementById("mileage").style.border = "3px solid #FFC300";}
                                if(mileage !== "")            {   document.getElementById("mileage").style.border = "none";}

                                //primaryUse Validation
                                if(primaryUse === "")            {   document.getElementById("primaryUse").style.border = "3px solid #FFC300";}
                                if(primaryUse !== "")            {   document.getElementById("primaryUse").style.border = "none";}

                                //parking Validation
                                if(parking === "")            {   document.getElementById("parking").style.border = "3px solid #FFC300";}
                                if(parking !== "")            {   document.getElementById("parking").style.border = "none";}

                                //ownLease Validation
                                if(ownLease === "")            {   document.getElementById("ownLease").style.border = "3px solid #FFC300";}
                                if(ownLease !== "")            {   document.getElementById("ownLease").style.border = "none";}

                                if(mileage !== "" && primaryUse !== "" && parking !== ""
                                   && ownLease !== "")
                                {
                                       this.validationCheck= "/CarPageThree";
                                      this.errorAlert="";
                                }

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
                    <form onSubmit ={this.handleSubmit} action="/action_page.php">



                                       <label>Own or Lease</label><br/>
                                     <select className="selectList" name= "OwnLease" id="ownLease" onChange={this.handleInputChange}>
                                        <option value="">Select</option>
                                        <option value="Own">Own</option>
                                        <option value="Lease">Lease</option>
                                     </select><br/>



                                      <label>Overnight Parking</label><br/>
                                      <select className="selectList" name= "Parking"  id="parking" onChange={this.handleInputChange}>
                                         <option value="">Select</option>
                                         <option value="Garage">Garage</option>
                                         <option value="Carport">Carport</option>
                                         <option value="Street">Street</option>
                                         <option value="ParkingLot">Parking Lot</option>
                                         <option value="NoCover">No Cover</option>
                                         <option value="Private">Private</option>
                                         <option value="Other">Other</option>
                                      </select><br/>



                                     <label>Primary Use:</label><br/>
                                     <select className="selectList" name= "PrimaryUse" id="primaryUse" onChange={this.handleInputChange} >
                                         <option value="">Select</option>
                                        <option value="DriveToFromWork">DriveTo/FromWork</option>
                                        <option value="DriveToFromSchool">DriveTo/FromSchool</option>
                                        <option value="Business">Business</option>
                                        <option value="FarmUse">Farm Use</option>
                                        <option value="Pleasure">Pleasure</option>
                                        <option value="CommuteVaries">Commute varies</option>
                                        <option value="GovernmentUse">Government use</option>
                                        <option value="Other">Other</option>
                                     </select><br/>

                                     <label>Mileage</label><br/>
                                     <select className="selectList" name= "Mileage" id="mileage" onChange={this.handleInputChange}>
                                       <option value="">Select</option>
                                       <option value="5000 or Less">5000 or Less</option>
                                       <option value="7500-10000">7500 - 10000</option>
                                       <option value="10000-12500">10000 - 12500</option>
                                       <option value="12500-20000">12500 - 20000 </option>
                                       <option value="20000-25000">20000 - 25000</option>
                                       <option value="25000-30000">25000 - 30000</option>
                                       <option value="30000-35000">30000 - 35000</option>
                                       <option value="35000-40000">35000 - 40000</option>
                                       <option value="40000-50000">40000 - 50000</option>
                                       <option value="50000+">50000+</option>
                                     </select><br/>

                                         <br/>

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
export default CarPageTwo;