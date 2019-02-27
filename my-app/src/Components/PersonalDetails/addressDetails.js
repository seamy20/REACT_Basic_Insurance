import {NavLink} from 'react-router-dom';
import React, {Component } from 'react';

class addressDetails extends React.Component{
 constructor(props){
               super(props);
               this.inputFirstNameref = React.createRef();
                this.validationCheck = "/addressDetails";
               }

     handleInputChange =(event)=>{
      this.validation();
      event.preventDefault();
            //Use the updateAddressDetails to update object in parent compenent(app.js).
             this.props.updateAddressDetails("address", event.target.name,event.target.value);

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
            const  unitNumber = document.getElementById('unitNumber').value;
            const  address = document.getElementById('address').value;
            const  city = document.getElementById('city').value;
            const  state = document.getElementById('state').value;

            //FirstName Validation
            if(unitNumber === "")            {   document.getElementById("unitNumber").style.border = "3px solid #FFC300";
                                                document.getElementById('unitNumber').className += " formInvalid";
                                                document.getElementById('unitNumber').placeholder="PLease enter the unit number"}
            if(unitNumber !== "")            {   document.getElementById("unitNumber").style.border = "none";}


            //FirstName Validation
            if(address === "")            {   document.getElementById("address").style.border = "3px solid #FFC300";
                                              document.getElementById('address').className += " formInvalid";
                                              document.getElementById('address').placeholder="Please enter the address"}
            if(address !== "")            {   document.getElementById("address").style.border = "none";}


            //FirstName Validation
            if(city === "")            {   document.getElementById("city").style.border = "3px solid #FFC300";
                                           document.getElementById('city').className += " formInvalid";
                                           document.getElementById('city').placeholder="No city Entered"}
            if(city !== "")            {   document.getElementById("city").style.border = "none";}


            //FirstName Validation
            if(state === "")            {   document.getElementById("state").style.border = "2px solid #ff0000";
                                            document.getElementById('state').className += " formInvalid";
                                            document.getElementById('state').placeholder="No state Entered"}
            if(state !== "")            {   document.getElementById("state").style.border = "none";}

            if(unitNumber !== "" && address !== "" && city !== "" && state !== "")
            {
            console.log("error")
                  this.errorAlert="";
                  this.validationCheck = "/Car";
            }

        }

        autoFillAddress=(event)=>
        {
            const  zip = document.getElementById('zip').value;
            var x ="";
                      if(zip !== "")
                      {
                              //API website
                                      var address = "http://api.zippopotam.us/us/"
                                      //Add zip code to end off web address
                                      var address1 = address.concat(this.props.address.zip);
                                      var client = new XMLHttpRequest();
                                      //Get
                                      client.open("GET", address1, true);
                                      //call back function called when ready state is changed.
                                      client.onreadystatechange = ()=> {
                                              //readyState 4 means the operation is complete.
                                              if(client.readyState == 4) {


                                                //If response is {} no address found in the JSON. Allows user to enter zip code not included.
                                              if(client.responseText !="{}")
                                              {
                                                      //parse json string to object
                                                      var data =JSON.parse(client.responseText);
                                                      //Set city and state text box based on zip code entered
                                                       document.getElementById('city').value = data.places[0]["place name"];
                                                       document.getElementById('state').value = data.places[0].state;
                                                      this.props.updateAddressDetails("address","city",data.places[0]["place name"]);
                                                      this.props.updateAddressDetails("address","state",data.places[0].state);
                                                      }

                                                  };

                                      };
                                      client.send();
                      }
                      else
            this.errorAlert="ZIp Error";
        }

render() {

    return(

       <div id="Overhead">
                <div id="header">
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

              <div className ="container">
                    <form>

                                  {/*1st row - Zip */}
                                   <div className="row">
                                                 <div id="zipHeading">
                                                                    <h1>ZIP: {this.props.address.zip}</h1>
                                                 </div>

                                   </div>

                                  {/*2nd row - unitNumber*/}
                                  <label>App / Unit Number</label>
                                      <input   type="text"
                                               id="unitNumber"
                                               name="unitNumber"
                                               placeholder="Your Unit Number.."
                                               onChange={this.handleInputChange}
                                   />

                                  {/*2nd row - unitNumber*/}
                                  <label>Address</label>
                                      <input   type="text"
                                               id="address"
                                               name="address"
                                               placeholder="Your Address.."
                                               onChange={this.handleInputChange}
                                   />

                                   {/*2nd row - unitNumber*/}
                                  <label>City</label>
                                      <input   type="text"
                                               id="city"
                                               name="city"
                                               placeholder="City.."
                                               disabled
                                               value={this.props.address.city}
                                               onChange={this.handleInputChange}
                                   />

                                   {/*2nd row - unitNumber*/}
                                  <label>State</label>
                                      <input   type="text"
                                               name="state"
                                               id="state"
                                               placeholder="State.."
                                               disabled
                                               value={this.props.address.state}
                                               onChange={this.handleInputChange}
                                   />
                                   <br></br>
                                    <br></br>   <br></br>
                                    <br></br>
                                <div className="borderButtons">
                                       <li className ="borderLinks" type="label"><NavLink id="nav" onClick={this.validation} to={this.validationCheck}>Next</NavLink></li>
                                </div>
                    </form>
              </div>
       </div>
    )//end of return
  } //end of render
}


export default addressDetails;