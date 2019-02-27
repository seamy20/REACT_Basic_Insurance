import {NavLink} from 'react-router-dom'
import React, {Component } from 'react'
import Images from "./Components/images";
var test = require('./Components/images.json');

class homepage extends React.Component{
 constructor(props){
               super(props);
               this.inputFirstNameref = React.createRef();
                this.validationCheck = "/";
                this.errorAlert = "";
                this.test = "";
                this.image = this.image= require("./Drawable/states/base.png");
               }

     handleInputChange =(event)=>{
         const  zip = document.getElementById('zip').value;
            this.getCarDetails();
            this.validation();

               event.preventDefault();


    }

    //Function that is provoked when user submits form.
        handleSubmit =(event)=> {
        const  zip = document.getElementById('zip').value;
        document.getElementById("zip").style.border = "none";
        event.preventDefault();
        const data = this.state;
        this.validation();
        //Used to view object in console. Can be removed when completed.
        this.props.showstate();
        }

        validation =(event)=>{

            const  zip = document.getElementById('zip').value;

            //endDate Validation
            if(zip === "")            {   document.getElementById("zip").style.border = "2px solid #ff0000";
                                          document.getElementById('zip').className += " formInvalid";
                                          document.getElementById('zip').placeholder="No zip Entered"}

         if(zip !== "" )
            {
                  this.errorAlert="";

                   this.autoFillAddress(zip);
            }

        }
        autoFillAddress=(zipCode)=>
                {
                const  zip = document.getElementById('zip').value;
                              if(zipCode !== "")
                              {
                                      //API website
                                              var address = "http://api.zippopotam.us/us/"
                                              //Add zip code to end off web address
                                              var address1 = address.concat(zipCode);
                                              var client = new XMLHttpRequest();
                                              //Get
                                              client.open("GET", address1, true)
                                              //call back function called when ready state is changed.
                                              client.onreadystatechange =() => {
                                                      //readyState 4 means the operation is complete.
                                                      if(client.readyState == 4) {

                                                         //If response is {} no address found in the JSON. Allows user to enter zip code not included.
                                                       if(client.responseText ==="{}"){
                                                        document.getElementById('zip').className += " formInvalid";
                                                        this.errorAlert="Invalid Zip";
                                                        //this.image= require("./Drawable/states/base.png");
                                                        this.validationCheck = "/";
                                                        console.log("Not a valid zip code");
                                                       }
                                                      if(client.responseText !="{}")
                                                      {
                                                      this.errorAlert="";
                                                        this.validationCheck = "/personalDetails";
                                                      console.log("valid zip code",client.responseText )
                                                   //parse json string to object
                                                      var data =JSON.parse(client.responseText);

                                                      this.props.updateAddressDetails("address","city",data.places[0]["place name"]);
                                                      this.props.updateAddressDetails("address","state",data.places[0].state);
                                                      if(address = null){
                                                        console.log("Error");
                                                      }


                                                  }
                                                  this.props.updateAddressDetails("address","zip",zipCode);
                                                          };
                                              };
                                              client.send();
                              }
                              else


                    this.errorAlert="ZIp Error";
                }

                                   getCarDetails =()=>{
                                   // the code you're looking for
                                    var zip = document.getElementById("zip").value;
                                    var searchField = "zip";

                                            for (var key in Images) {
                                                var obj = Images[key];
                                                for (var prop in obj) {
                                                    console.log(prop)
                                                    if(prop === zip)
                                                    {
                                                            console.log(obj[prop])
                                                            this.image= obj[prop];
                                                    }
                                                }
                                            }
                                    }
render() {

   const image = this.image;
   const test = this.test;


    return(
              <div>
                  <div id="body">
                      <div className="header">
                        <a href="#default" className="logo"></a>
                        <div className="header-right">
                          <a className="active" href="#home">Home</a>
                          <a id="links" href="#contact">GET A QUOTE</a>
                          <a id="links" href="#about">INSURANCE & MORE</a>
                          <a id="links" href="#about">CLAIMS</a>
                          <a id="links" href="#about">RESOURCES</a>
                        </div>
                      </div>

                  </div>

                  <div className="homeContainer">
                  <div >
                   <img className="state" src={image} />
                  </div>
                  <label id="error"> {this.errorAlert} </label>
                 <div className="bLinks">
                     <input type="text" id="zip" name="ZIP" placeholder="Your Zip Code.. " onBlur={this.getCarDetails} onChange={this.handleInputChange}/>
                     <br/>
                     <br/>
                     <br/>
                      <li ><NavLink id="navQuote" onClick={this.validation} to={this.validationCheck}>NEW QUOTE</NavLink></li>

                  </div>

                  </div>


               </div>
           )
  } //end of render
}


export default homepage;



















