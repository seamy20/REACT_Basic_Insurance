import {NavLink} from 'react-router-dom';
import React, {Component } from 'react';


class PersonalDetails extends React.Component{
 constructor(props){
               super(props);
               this.inputFirstNameref = React.createRef();
               this.validationCheck = "/PersonalDetails";
               this.emailError = "";
               }


     handleInputChange =(event)=>{
     this.validation();
      event.preventDefault();
            //Use the updatePersonalDetails to update object in parent compenent(app.js).
             this.props.updatePersonalDetails("personal", event.target.name,event.target.value);
             console.log("dddddd");

    }


    //Function that is provoked when user submits form.
        handleSubmit =(event)=> {
        event.preventDefault();
        const data = this.state;
                //Used to view object in console. Can be removed when completed.
        console.log(this.props.person);
        this.props.showstate();
        }

        validation =(event)=>{
                    const  FirstName = document.getElementById('FirstName').value;
                    const  Surname = document.getElementById('Surname').value;
                    const  Email = document.getElementById('Email').value;




                    if(Email === "")            {   this.errorAlert="No Email Entered"}
                    if(Surname === "")            {   this.errorAlert="No Surname Entered"}


                    //FirstName Validation
                    if(FirstName === "")            {   document.getElementById("FirstName").style.border = "3px solid #FFC300";
                                                        document.getElementById('FirstName').className += " formInvalid";
                                                        document.getElementById('FirstName').placeholder="PLease enter your first name"}
                    if(FirstName !== "")            {   document.getElementById("FirstName").style.border = "none";}


                    //Email Validation
                    if(Email === "")            {   document.getElementById("Email").style.border = "3px solid #FFC300";
                                                    document.getElementById('Email').placeholder="Please enter your email"}
                                                    document.getElementById('Email').className += " formInvalid";
                    if(Email !== "")            {   document.getElementById("Email").style.border = "none";}

                     //Email Validation
                     if(!Email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))            {   document.getElementById("Email").style.border = "3px solid #FFC300";
                                                     document.getElementById('Email').placeholder="Please enter your email"
                                                      this.emailError="Please enter a valid email address";}
                                                     document.getElementById('Email').className += " formInvalid";
                     if(Email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))            {   document.getElementById("Email").style.border = "none";
                                                                                              this.emailError = "";}


                    //Email Validation
                    if(Surname === "")            {   document.getElementById("Surname").style.border = "3px solid #FFC300";
                                                      document.getElementById('Surname').className += " formInvalid";
                                                      document.getElementById('Surname').placeholder="Please enter your surname";}
                    if(Surname !== "")            {   document.getElementById("Surname").style.border = "none";}



                    if(FirstName !== "" && Surname !== "" && Email !== "" && Email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
                    {
                             this.validationCheck = "/PersonalDetailsExtended";
                          this.errorAlert="";



                    }

        }






render() {


    return(


       <div id="Overhead">
                   <div  id="header">
                       <div>
                        <img id="carImg_2" src={require('../../Drawable/carImg_2.png') } />
                        </div>
                          <div>
                           <img id="logo" src={require('../../Drawable/logo.png') } />
                          </div>
                  </div>

            <div className="borderText">
                 LETS GET YOUR CAR DETAILS
            </div>

             {/*Main form container */}

                    {/*Start of Form */}
                  <form className="container">

                               {/*1st row - FirstName*/}
                               <label>First Name</label>

                               <input   type="text"
                                        id="FirstName"
                                        name="FirstName"
                                        placeholder="Your First Name.. "
                                        onChange={this.handleInputChange}
                               />


                               {/*2nd Row - Surname*/}
                               <label>Surname</label>
                               <input   type="text"
                                        id="Surname"
                                        name="Surname"
                                        placeholder="Your Surname name.. "
                                        onChange={this.handleInputChange}/>

                               {/*3rd Row - Email*/}
                               <label>Email</label><br/>
                               <input   type="text"
                                        id="Email"
                                        name="Email"
                                        placeholder="Your Email.. "
                                        onChange={this.handleInputChange}/>
                                        {this.emailError}
                               <br></br>
                               <br></br>

                      <div className="borderButtons">
                            <ul className="headerLink">
                              <li className ="borderLinks" type="label"><NavLink id="nav" onClick={this.validation} to={this.validationCheck}>Next</NavLink></li>

                            </ul>
                      </div>
                  </form>
       </div>

            )//end of return
      } //end of render
}


export default PersonalDetails;



















