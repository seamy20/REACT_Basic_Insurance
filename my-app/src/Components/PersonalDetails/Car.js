import {NavLink} from 'react-router-dom'
import React, {Component } from 'react';
import logo from '../../Drawable/vehicles/hatchback.png';
var json = require('../carDatabase.json');




class Car extends React.Component{
 constructor(props){
               super(props)
               this.inputVinNumberref = React.createRef();
               this.validationCheck = "/Car";
               this.errorAlert = "";
               this.image = "";
               this.imageNum = "";
               this.carType = "";
               }

 handleInputChange =(event)=>{
      event.preventDefault();
       this.validation();
       this.getCarDetails();

            //Use the updatePersonalDetails to update object in parent compenent(app.js).
             this.props.updateCarDetails("car",event.target.name,event.target.value);
             console.log("Changed");

    }
    //Function that is provoked when user submits form.
            handleSubmit =(event)=> {
            event.preventDefault();
            const data = this.state;
            this.validation();

            this.props.showstate();
            }

              validation =(event)=>{

                                const  model = document.getElementById('model').value;
                                const  make = document.getElementById('make').value;
                                const  year = document.getElementById('year').value;
                                const  vinnumber = document.getElementById('vinnumber').value;

                                //model Validation
                                if(model === "")            {   document.getElementById("model").style.border = "3px solid #FFC300";
                                                                  document.getElementById('model').className += " formInvalid";
                                                                  document.getElementById('model').placeholder="Please enter the model"}
                                if(model !== "")            {   document.getElementById("model").style.border = "none";}


                                //make Validation
                                if(make === "")            {   document.getElementById("make").style.border = "3px solid #FFC300";
                                                                  document.getElementById('make').className += " formInvalid";
                                                                  document.getElementById('make').placeholder="Please enter the make"}
                                if(make !== "")            {   document.getElementById("make").style.border = "none";}


                                //year Validation
                                if(year === "")            {   document.getElementById("year").style.border = "3px solid #FFC300";
                                                                  document.getElementById('year').className += " formInvalid";
                                                                  document.getElementById('year').placeholder="Please enter the year"}
                                if(year !== "")            {   document.getElementById("year").style.border = "none";}


                                //vinnumber Validation
                                if(vinnumber === "")            {   document.getElementById("vinnumber").style.border = "3px solid #FFC300";
                                                                  document.getElementById('vinnumber').className += " formInvalid";
                                                                  document.getElementById('vinnumber').placeholder="Please enter the VIN number"}

                                //vinnumber Validation
                                if(vinnumber.length !== 17)            {   document.getElementById("vinnumber").style.border = "3px solid #FFC300";
                                                                  document.getElementById('vinnumber').className += " formInvalid";
                                                                   this.errorAlert ="VIN number must be 17 characters"}
                                if(vinnumber !== "" && vinnumber.length === 17)            {   document.getElementById("vinnumber").style.border = "none";
                                                                                                this.errorAlert=""}


                                if(model !== "" && make !== "" && year !== "" && vinnumber !== "" && vinnumber.length === 17)                                {
                                      this.validationCheck= "/CarPageTwo";
                                      this.errorAlert="";
                                }








                    }



                    getCarDetails =()=>{
                    var vin = document.getElementById("vinnumber").value;

                    var searchField = "VIN";


                    for (var i=0 ; i < json.length ; i++)
                    {
                        if (json[i][searchField] == vin) {
                        document.getElementById("make").value =json[i].Make ;
                        document.getElementById("model").value=json[i].Model;
                        document.getElementById("year").value=json[i].Year;
                        this.imageNum =json[i].Type;
                        this.validation();
                        this.validationCheck= "/CarPageTwo";
                        if(this.imageNum === "")
                                           {
                                            this.image =  "";
                                           }
                       else if(this.imageNum === "hatchback") {this.image =  <img id="logo" src={require('../../Drawable/vehicles/hatchback.png') }/>; this.carType = "hatchback" }
                       else if(this.imageNum === "saloon"){this.image = <img id="logo" src={require('../../Drawable/vehicles/saloon.png') } />; this.carType = "Saloon" }
                       else if(this.imageNum === "estate"){this.image = <img id="logo" src={require('../../Drawable/vehicles/estate.png') } />; this.carType = "Estate" }
                       else if(this.imageNum === "van"){this.image = <img id="logo" src={require('../../Drawable/vehicles/van.png') } />; this.carType = "Van" }
                       else if(this.imageNum === "suv"){this.image = <img id="logo" src={require('../../Drawable/vehicles/suv.png') } />; this.carType = "SUV" }
                       else if(this.imageNum === "mpv"){this.image = <img id="logo" src={require('../../Drawable/vehicles/mpv.png') } />; this.carType = "MPV" }

                                           if(this.imageNum !== "hatchback" && this.imageNum !== "saloon"&&  this.imageNum !== "estate" &&  this.imageNum !== "van"
                                           &&  this.imageNum !== "suv" &&  this.imageNum !== "mpv"){this.image =  "";}


                        }
                    }

                    }



   render() {

            const title = this.carType;
            const image = this.image;

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



                {/*Main form container */}
                <form className ="container">
                                               {/*1st row - FirstName*/}
                                               <label>Vin Number</label>
                                               <input   type="text"
                                                        ref={this.inputVinNumberref}
                                                        id="vinnumber"
                                                        name="VIN"
                                                        placeholder="VIN Number.. "
                                                        onBlur={this.getCarDetails}
                                                        onChange={this.handleInputChange}

                                               />
                                               {this.errorAlert}
                                               <br></br>

                                               {/*1st row - FirstName*/}
                                               <label>Year</label>
                                               <input   type="text"
                                                         ref={this.inputVinNumberref}
                                                         id="year"
                                                         name="year"
                                                         placeholder="Year.. "
                                                         onChange={this.handleInputChange}

                                               />

                                               {/*1st row - FirstName*/}
                                               <label>Make</label>
                                               <input   type="text"
                                                        ref={this.inputVinNumberref}
                                                        id="make"
                                                        name="Make"
                                                        placeholder="Make.. "
                                                        onChange={this.handleInputChange}

                                               />

                                               {/*1st row - FirstName*/}
                                               <label>Model Number</label>
                                               <input   type="text"
                                                        ref={this.inputVinNumberref}
                                                        id="model"
                                                        name="Model"
                                                        placeholder="Model.. "
                                                        onChange={this.handleInputChange}

                                               />
                                                      <br></br>
                                                      <br></br>

                            <div className="borderButtons">
                                       <ul className="headerLink">
                                               <li className ="borderLinks" type="label"><NavLink id="nav" onClick={this.validation} to={this.validationCheck}>Next</NavLink></li>
                                       </ul>
                            </div> {/*End of form container */}
                    </form>
                        <div className="containerBtm">
                                   {console.log(this.image)}
                                   <div className="col-5-title">
                                   {title}
                                   </div>
                                   <div className="col-15">
                                   {image}
                                   </div>
                         </div>
           </div>

        )
   }
 }
export default Car;