import React from 'react';


const TEST = () => {
    return(
            <div className ="footer-distributed">
            <div className="footer-left">

            				<h3><span><img id="png_logo" src={require('../Drawable/png_logo.png')} /></span></h3>

            				<p className="footer-company-name">AllState &copy; 2019</p>
            			</div>

            			<div className="footer-center">

            				<div>
            					<i className="fa fa-map-marker"></i>
            					<p><span>137 Northland Rd</span> Derry, BT48 0GY</p>
            				</div>

            				<div>
            					<i className="fa fa-phone"></i>
            					<p>+1 555 123456</p>
            				</div>

            				<div>
            					<i className="fa fa-envelope"></i>
            					<p><a href="mailto:sfesd@allstate.com">www.allstate.com</a></p>
            				</div>

            			</div>

            			<div className="footer-right">

            				<p className="footer-company-about">
            					<span>About Us</span>
            					We help customers realize their hopes and dreams by providing the best products and services to protect them from life's uncertainties and prepare them for the future.
            				</p>

            				<div className="footer-icons">

            					<a href="https://www.facebook.com/AllstateNI/"><i className="fa fa-facebook"></i></a>
            					<a href="https://twitter.com/AllstateNI?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa fa-twitter"></i></a>
            					<a href="https://www.linkedin.com/company/allstate-northern-ireland/"><i className="fa fa-linkedin"></i></a>
            					<a href="https://github.com/Allstate"><i className="fa fa-github"></i></a>

            				</div>

            			</div>

           </div>

    );

};

export default TEST;