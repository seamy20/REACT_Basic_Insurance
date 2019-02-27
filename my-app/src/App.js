import React, {Component} from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';
import { Route} from 'react-router-dom';

import Table from './Table';
import Homepage from './homepage';
import PaymentPage from "./Components/PersonalDetails/paymentPage";
import PersonalDetailsExtended from "./Components/PersonalDetails/PersonalDetailsExtended";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import AddressDetails from "./Components/PersonalDetails/addressDetails";
import Car from "./Components/PersonalDetails/Car";
import CarPageTwo from "./Components/PersonalDetails/CarPageTwo";
import CarPageThree from "./Components/PersonalDetails/CarPageThree";
import InsuranceDetails from "./Components/PersonalDetails/InsuranceDetails";
import InsuranceDetailsPageTwo from "./Components/PersonalDetails/InsuranceDetailsPageTwo";
import InsurancePriceBreakdown from "./Components/PersonalDetails/InsurancePriceBreakdown";
import Navigation       from "./Components/Navigation";
import TEST       from "./Components/TEST";
import LoadingPage from "./Components/PersonalDetails/loadingPage";
import './index.css';



class App extends Component {

  constructor(props){
               super(props);
                this.updatestate = this.updatestate.bind(this);
                 this.displaystate = this.displaystate.bind(this);

               //State is an object.
               this.state = {
               //Personal is a object that stores user info passed from child component.
               personal:{ },
               address:{zip :"",
                        city:"",
                        state :"",},
               car:{},
               insurance:{},
               coverage:[]
                    };

     }

    //Function that is passed to child componets as prop to update Personal state.
     updatestate = (UpdateObject, key, value)=>{
     if(UpdateObject === "personal")
     {
        this.setState({personal: {...this.state.personal,[key]:value}});
       }
      else
      if(UpdateObject ==="address")
      {
            this.setState({address:{...this.state.address,[key]:value}});
      }
       else
       if(UpdateObject ==="car")
       {
       this.setState({car: {...this.state.car,[key]:value}});
       }
       else
       if(UpdateObject==="insurance")
       {
       this.setState({insurance: {...this.state.insurance,[key]:value}});
       }
       else
       if(UpdateObject ==="coverage")
       {
        //this.setState({ myArray: [...this.state.myArray, 'new value'] }) //simple value
       this.setState({coverage:[...this.state.coverage,key]});
       }

       else
       {
        //Create a new array when user unclicks coverage checkbox. .filter will create a new array removing the one that has been unchecked by user.
       this.setState(prevState => ({coverage: prevState.coverage.filter(coverage => coverage !== key)}));

       }
     }

    displaystate=()=>{
    const data = this.state.personal;
    console.log("I am working", data);
    console.log("Addres state", this.state.address);
     console.log("I am working", this.state.car);
     console.log("I am working", this.state.insurance.DrivingExperience);
      console.log("I am working", this.state.coverage);
     console.log("coverage", this.state.coverage);
     console.log("Insurance", this.state.insurance);
    // var datajson =JSON.parse(json);
    // console.log("Json", json);

    }
    render() {
        return (
        <BrowserRouter>
            <div>
            <Switch>
                                <Route path="/" render={()=> <Homepage updateAddressDetails={this.updatestate} address = {this.state.address} />} exact/>
                                <Route path="/PersonalDetails" render={()=> <PersonalDetails updatePersonalDetails={this.updatestate} person = {this.state.personal} address = {this.state.address} showstate={this.displaystate}/>} />
                                <Route path="/PersonalDetailsExtended" render={()=> <PersonalDetailsExtended updatePersonalDetails={this.updatestate} person = {this.state.personal} showstate={this.displaystate}/>} />
                                <Route path="/addressDetails" render={()=> <AddressDetails updateAddressDetails={this.updatestate} address = {this.state.address} showstate={this.displaystate}/>} />
                                <Route path="/Car" render={()=> <Car updateCarDetails={this.updatestate}  showstate={this.displaystate}/>} />
                                <Route path="/CarPageTwo" render={()=> <CarPageTwo updateCarDetails={this.updatestate}  showstate={this.displaystate}/>} />
                                <Route path="/CarPageThree" render={()=> <CarPageThree updateCarDetails={this.updatestate}  showstate={this.displaystate}/>} />
                                <Route path="/InsuranceDetails" render={()=> <InsuranceDetails updateInsuranceDetails={this.updatestate} showstate={this.displaystate}/>}/>
                                <Route path="/InsuranceDetailsPageTwo" render={()=> <InsuranceDetailsPageTwo updateInsuranceDetails={this.updatestate} showstate={this.displaystate} coverage={this.state.coverage}/>}/>
                                <Route path="/InsurancePriceBreakdown" render={()=> <InsurancePriceBreakdown person={this.state.personal}  updateCoverage={this.updatestate}  showstate={this.displaystate} car={this.state.car} insuranceD={this.state.insurance} coverage={this.state.coverage} address={this.state.address} />}/>
                                <Route path="/PaymentPage" render={()=> <PaymentPage person={this.state.personal}  showstate={this.displaystate} car={this.state.car} insuranceD={this.state.insurance} coverage={this.state.coverage} address={this.state.address} />}/>
                                <Route path="/loading" render={()=> <LoadingPage/>}/>

                                 <Route component={Error}/>
                             </Switch>
                        <TEST />
                </div>
                </BrowserRouter>
        );
    }
}

export default App;
