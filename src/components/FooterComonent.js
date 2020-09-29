import React from 'react';
import { Link } from 'react-scroll';

function Footer(props) {
    return(
    <div id="footer" className="d-none d-md-block">
            <div className="row justify-content-center m-0">             
                <div className="col-6 d-flex align-items-center justify-content-around">
                    <img src="assets/images/VirtuLab2.png" alt="logo.png" />
                    <Link to="use-cases" smooth={true} duration={2000} offset={-95}>Use Cases</Link>
                    <Link to="features" smooth={true} duration={2000} offset={-90}>Features</Link>
                    <Link to="FAQs" smooth={true} duration={2000} offset={-20}>FAQs</Link>
                    <Link to="contact" smooth={true} duration={2000}>Contact</Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end">
                    <p className="px-1"><i className="fa fa-phone"> HOTLINE</i>: +91 9769914770</p>
                    <p className="px-1"><i className="fa fa-envelope"> EMAIL</i>: <a href="mailto:virtulab@designdesk.in">VIRTUALAB@DESIGNDESK.IN</a></p>
                </div>
            </div>
            <div className="pt-4">             
                <hr/>
                <p className="pt-4">© 2020   VirtuLab by JMD Design Desk Pvt Ltd (in collaboration with Artiligent Solutions)</p>
            </div>
        </div>
    )
}

export default Footer;