import React from "react";
import { FaWhatsappSquare } from 'react-icons/fa';
import { GrFacebook,GrInstagram,GrTwitter } from 'react-icons/gr';


function Footer() {
    return (
        <footer className="page-footer font-small blue pt-4" style={{backgroundColor:'#68686f',margin:'10px 0px 0px 0px',color:'black'}}>
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">M. Haroon Memon</h5>
                        <p></p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase"></h5>
                        <ul className="list-unstyled">
                            <li><a href="#!"><GrFacebook size={32} /></a></li>
                            <li><a href="#!"><FaWhatsappSquare size={32} /></a></li>
                            <li><a href="#!"><GrInstagram size={32} /></a></li>
                            <li><a href="#!"><GrTwitter size={32} /></a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        {/* <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright: M.Haroon Memon
            </div>

        </footer>
    )
}
export default Footer;