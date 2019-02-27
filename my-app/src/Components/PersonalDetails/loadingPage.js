import {NavLink} from 'react-router-dom'
import React, {Component } from 'react';
import LoadingSuccess from "./paymentSuccess";
class loadingPage extends React.Component{

   constructor(props){


               super(props);
               this.showSuccessPageTimer=this.showSuccessPageTimer.bind(this);
               this.setSuccess=this.setSuccess.bind(this);
                this.state={
                 showSuccess:false,
                }
               }


showSuccessPageTimer= () =>{
setTimeout(this.setSuccess, 3000);
}

setSuccess=()=>
{
this.setState({
showSuccess:true,
})
}
render() {
this.showSuccessPageTimer();

if(this.state.showSuccess === true)
{
return(
<LoadingSuccess/>
)
}
else
{
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
                         Processing Payment Details
                    </div>
                      <div className="err">
                            {this.errorAlert}
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
                                   <h2 id="load">Processing</h2>
                               </div> {/* End of panel heading */}

</div>

<div className="loader"></div>


</div>
</div>
</div>
</div>
</div>


)


}






}


}
export default loadingPage;