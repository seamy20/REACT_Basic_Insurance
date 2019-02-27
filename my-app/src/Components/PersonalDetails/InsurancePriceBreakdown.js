import React from 'react';
    import {NavLink} from 'react-router-dom';


    class InsurancePriceBreakdown extends React.Component{

    constructor(props){
    super(props);
    this.state ={
    totalInsurancePrice:0,
    }


    }

    calculateAgePrice=(basePrice, ageRange)=>{
     if (ageRange === '17-25' || ageRange === '61-80')
     {
            //SubTotal  = basePrice * 0.1;
            return basePrice * 0.1;
     }
     else
      {
                //SubTotal  = basePrice * 0.05;
                return basePrice * 0.05;
                     //drivingExperienceSubTotal = SubTotal+ basePrice ;
    }
    }

    calculateExpereincePrice=(basePrice, expereince)=>{

    if (expereince === '0-5')
     {
            return basePrice * 0.1;
     }
     else if  (expereince === '6-30'|| expereince==='45+')
              {

               return basePrice * 0.05;
              }

    else
             {
                 return basePrice * 0.01;

             }
    }

    accidentPrice=(accidentHistory)=>{
    if(accidentHistory ==='1-5')
    {
    return 50;
    }
    else
    return 0;
    }

    coveragePrice=(numberOfCoverageSelected)=>{
    switch(numberOfCoverageSelected)
    {
    case 1: return 10;break;
    case 2: return 20;break;
    case 3: return 30;break;
    case 4: return 40;break;
    case 5: return 50;break;
    default: return 0;
    }
    }

    vehicleAddOnPrice =(VINNumber)=>{
    //var upperCase = VINNumber.toUpperCase();
    if(VINNumber.charAt(9) == 'J')
    return 75;
    else
    return 50;
    }

    calculateTotalInsurancePrice=(driverAgePrice, driverExpereincePrice,driverAccidentPrice,numberOfCoveragePrice,carYearPrice)=>
    {


    var total = 400 + (driverAgePrice+driverExpereincePrice+driverAccidentPrice+numberOfCoveragePrice+carYearPrice);
    return total;
         this.props.updateCoverage("coverage","total",total);

    }


    render(){

    this.props.showstate();

    const basePrice =400;
    const driverAge = this.calculateAgePrice(basePrice,this.props.person.AgeRange);
    const driverExpereince=this.calculateExpereincePrice(basePrice,this.props.insuranceD.DrivingExperience);
    const driverAccidents =this.accidentPrice(this.props.insuranceD.Violations);
    const numberOfCoverageSelected = this.coveragePrice(this.props.coverage.length);
    //const carYearPrice = this.vehicleAddOnPrice(this.props.car.VIN.toUpperCase());
   const carYearPrice = 400;
    const totalInsurancePrice = this.calculateTotalInsurancePrice(driverAge,driverExpereince,driverAccidents,numberOfCoverageSelected,carYearPrice);
  //  const vat = totalInsurancePrice * 10 / 100;
    //const total = totalInsurancePrice + vat;
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
                        Hi {this.props.person.FirstName} your final quote is £{totalInsurancePrice} you can find the details below
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
                                   <h2>Invoice</h2>
                               </div> {/* End of panel heading */}

                                   {/* Start of panel body */}
                                   <div className="panel-body">
                                       <div className="invoice-title">
                                           <h5>Order Reference 12345</h5>
                                       </div>
                                       <hr/>

                                       <div className="row" >
                                           {/* Start of className="col-xs-6" */}
                                           <div className="col-xs-6">
                                               <addressforbilling>
                                               <strong>Insurer Details:</strong><br/>
                                                   {this.props.person.Title} <br/>
                                                   {this.props.person.FirstName} <br/>
                                                   {this.props.person.Surname} <br/>
                                                   {this.props.address.address}<br/>
                                                  {this.props.address.city}<br/>
                                                   {this.props.address.zip}
                                               </addressforbilling>
                                           </div> {/* End of className="col-xs-6" */}

                                           {/* Start of className="col-xs-6 text-right" */}
                                           <div className="col-xs-6 text-right">
                                               <addressforshipping>
                                               <strong>Car Details:</strong><br/>
                                                   {this.props.car.Make}<br/>
                                                   {this.props.car.Model}<br/>
                                                   {this.props.car.Parking}<br/>
                                                   {this.props.car.Mileage}<br/>
                                                   {this.props.car.PrimaryUse}
                                               </addressforshipping>
                                           </div> {/* End of className="col-xs-6 text-right" */}
                                       </div> {/* End of className="row" */}

                                       <hr/>

              {/* End of top section of invoice billed to and shipped to */}
               {/* Start header row for section of invoice for individual transactions */}
               <div>
                   <div className="table-responsive">
                   <div id="premTitle">Price Breakdown</div>
                   <table className="table">
                     <tbody>
                       <tr className="table-info">
                           <td width="13%">Age</td>
                           <td width="13%">Experience</td>
                           <td width="13%">Coverage</td>
                           <td width="10%">Vehicle</td>
                           <td width="10%">Accidents</td>
                       </tr>
                   </tbody>
                   </table>
               </div>
               {/* End header row for section of invoice for individual transactions */}

                <div className="table-responsive">
                                       <table className="table table-striped">
                                           <tbody>
                                               <tr>
                                                   <td width="12%">{driverAge}</td>
                                                   <td width="10%">{driverExpereince}</td>
                                                   <td width="9%" >{numberOfCoverageSelected}</td>
                                                   <td width="8%" >{carYearPrice}</td>
                                                   <td width="7%" >{driverAccidents}</td>
                                               </tr>
                                           </tbody>
                                       </table>
                                   </div>

                    <hr/>
                   <div className="table-responsive">
                       <table className="table table-borderless">
                               <tbody>
                                       <tr>
                                           <td><img id="carImg_2" src={require('../../Drawable/Allstate_logo_Homepage.png')}/>Invoice to be paid</td>
                                           <td width="60%"></td>
                                           <td width="10%">Subtotal</td>
                                           <td width="20%">${totalInsurancePrice}</td>
                                       </tr>
                                   </tbody>
                       </table>

                       <div className="borderButtons">
                                                              <ul className="headerLink">
                                                                      <li className ="borderLinks" type="label"><NavLink id="navPayment" onClick={this.validation} to="/paymentPage">Continue To Payment</NavLink></li>
                                                              </ul>
                       </div>

                   </div>
                   <hr/>
               </div>
                               </div> {/* End of panel body */}
                           </div> {/* End of panel panel-primary */}
                       </div> {/* End of className="col-md-12" */}
               </div> {/* End of className="col-xs-12" */}
           </div> {/* End of container */}

   {/* End of React component div */}
   </div>
    </div>
   ); /* End of return part of component */


    }






    }
    export default InsurancePriceBreakdown;