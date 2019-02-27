import {NavLink} from 'react-router-dom';
import React, {Component } from 'react';
import FormGroup from 'react-bootstrap/FormGroup';

class PersonalDetailsExtended extends React.Component{
 constructor(props){
               super(props);
               this.inputFirstNameref = React.createRef();
               this.validationCheck = "/PersonalDetailsExtended";
               this.errorAlert = "";
               }

     handleInputChange =(event)=>{
      this.validation();
      event.preventDefault();
            //Use the updatePersonalDetails to update object in parent compenent(app.js).
             this.props.updatePersonalDetails("personal", event.target.name,event.target.value);
             console.log(this.props.person.FirstName);
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
                    const  AgeRange = document.getElementById('AgeRange').value;
                    const  Gender = document.getElementById('Gender').value;
                    const  MaritalStatus = document.getElementById('MaritalStatus').value;
                    const  Title = document.getElementById('Title').value;

                    //FirstName Validation
                    if(AgeRange === "")            {   document.getElementById("AgeRange").style.border = "3px solid #FFC300";}
                    if(AgeRange !== "")            {   document.getElementById("AgeRange").style.border = "none";}

                    //FirstName Validation
                    if(MaritalStatus === "")            {   document.getElementById("MaritalStatus").style.border = "3px solid #FFC300";}
                    if(MaritalStatus !== "")            {   document.getElementById("MaritalStatus").style.border = "none";}

                    //FirstName Validation
                    if(Gender === "")            {   document.getElementById("Gender").style.border = "3px solid #FFC300";}
                    if(Gender !== "")            {   document.getElementById("Gender").style.border = "none";}

                    //FirstName Validation
                    if(Title === "")            {   document.getElementById("Title").style.border = "3px solid #FFC300";}
                    if(Title !== "")            {   document.getElementById("Title").style.border = "none";}

                    if(AgeRange !== "" && Gender !== "" && MaritalStatus !== "" && Title !== "" )
                    {
                           this.validationCheck= "/addressDetails";
                          this.errorAlert="";
                    }



        }



render() {


    return(


       <div id="Overhead">
                   <div className="row" id="header">
                       <div>

                        <img id="carImg_2" src={require('../../Drawable/carImg_2.png') } />
                       </div>
                                                 <div>
                                                  <img id="logo" src={require('../../Drawable/logo.png') } />
                                                 </div>
                  </div>
            <div className="borderText">
                     LETS GET SOME BASIC DETAILS
            </div>

             {/*Main form container */}


                    {/*Start of Form */}

                  <form className="container">
                          <FormGroup
                          >

                        {/*1st row - Title & First Name */}
                        <label>Title</label><br/>
                             <select ref={this.inputFirstNameref} name= "Title" className="selectList" id="Title" onChange={this.handleInputChange} >
                                <option value="">Select</option>
                                <option value="Mr">Mr</option>
                                <option value="Miss">Miss</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Dr">Dr</option>
                             </select>
                             <br/>



                        {/*3rd row - Gender & Marital Status */}
                    <label>Gender</label><br/>
                               <select className="selectList" name = "Gender" id="Gender" onChange={this.handleInputChange} >
                               <option value="">Select</option>
                               <option value="Male">Male</option>
                               <option value="Female">Female</option>
                               </select><br/>

                         <label>Marital Status</label><br/>
                               <select className="selectList" name = "MaritalStatus" id="MaritalStatus" onChange={this.handleInputChange}>
                                                          <option value="">Select</option>
                                                          <option value="Married">Married</option>
                                                          <option value="Single">Single</option>
                                                          <option value="Civil_Partnership">Civil Partnership</option>
                                                          <option value="Other">Other</option>
                               </select><br/>

                        {/*4th row - Age & EMail */}
                     <label>Age Range</label><br/>
                                <select   name="AgeRange" className="selectList" id="AgeRange" onChange={this.handleInputChange}>
                                     <option value="">Select</option>
                                     <option value="17-25">17-25</option>
                                     <option value="26-60">26-60</option>
                                     <option value="61-80">61-80</option>
                                </select>
                        <br/>
                        <br/>

                      <div className="borderButtons">
                            <ul className="headerLink">
                              <li className ="borderLinks" type="label"><NavLink id="nav" onClick={this.validation} to={this.validationCheck}>Next</NavLink></li>

                            </ul>
                      </div>

                    </FormGroup>
                  </form>
       </div>

            )//end of return
      } //end of render
}


export default PersonalDetailsExtended;



















