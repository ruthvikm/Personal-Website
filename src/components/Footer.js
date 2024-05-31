import React from 'react';
import '../index.css';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-six tab-full">
                    <div className="copyright">
                        <span> <p>&copy; 2024 Ruthvik Mannem. All rights reserved.</p></span>         	
                    </div>		                  
                </div>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home"><i className="fa fa-long-arrow-up"></i></a>
                </div>
            </div>     	
        </footer> 
    );
}

export default Footer;
