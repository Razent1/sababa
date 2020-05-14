import React from "react";
import './_footer.sass';
import  facebookLogo from '../icons/facebook.svg';
import  skypeLogo from "../icons/skype.svg";
import linkedInLogo from '../icons/linkedin.svg';
import instagramLogo from '../icons/instagram.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarked, faPhone, faMailBulk} from '@fortawesome/free-solid-svg-icons';

const iconMapMarked = <FontAwesomeIcon icon={faMapMarked}/>;
const iconPhone = <FontAwesomeIcon icon={faPhone}/>;
const iconMail = <FontAwesomeIcon icon={faMailBulk}/>;

const Footer = () => {
    return (
        <footer className='container'>
            <div className='row'>
                <div className='footer-contacts col-3'>
                    <div className="footer-contacts__title">Contact us</div>
                    <div className="footer-contacts__items">
                        <div className='d-flex'>
                            <div className='footer-contacts__items__icon'>{iconPhone}</div>
                            03456789
                        </div>
                    </div>
                    <div className="footer-contacts__items">
                        <div className='d-flex'>
                            <div className='footer-contacts__items__icon'>{iconMapMarked}</div>
                            Tel Aviv, Israel
                        </div>
                    </div>
                    <div className="footer-contacts__items">
                        <div className='d-flex'>
                            <div className='footer-contacts__items__icon'>{iconMail}</div>
                            info@sababalife.com
                        </div>
                    </div>
                </div>
                <div className='footer-contacts col-3'>
                    <div className="footer-contacts__title">Our Company</div>
                    <div className="footer-contacts__items__company-sn">About</div>
                    <div className="footer-contacts__items__company-sn">Blog</div>
                </div>
                <div className='footer-contacts col-3'>
                    <div className="footer-contacts__title">Social Contacts</div>
                    <div className="footer-contacts__items__company-sn">Facebook</div>
                    <div className="footer-contacts__items__company-sn">Linked in</div>
                    <div className="footer-contacts__items__company-sn">Youtube</div>
                    <div className="footer-contacts__items__company-sn">Vimeo</div>
                    <div className="footer-contacts__items__company-sn">Skype</div>
                </div>
                <div className="footer-contacts col-3">
                    <div className="footer-contacts__title">Address</div>
                    <div className="footer-contacts__items__address">Sababalite LLC</div>
                    <div className="footer-contacts__items__address">Tel Aviv Dizengof Street</div>
                    <div className="footer-contacts__title__address">Follow Us</div>
                    <div className="d-flex flex-row">
                        <div className="footer-contacts__icon-sn d-flex flex-row justify-content-center"><img
                            src={facebookLogo} alt="facebook"/></div>
                        <div className="footer-contacts__icon-sn d-flex flex-row justify-content-center"><img src={skypeLogo}
                                                                                                              alt="skype"/>
                        </div>
                        <div className="footer-contacts__icon-sn d-flex flex-row justify-content-center"><img src={linkedInLogo}
                                                                                                              alt="linked in"/></div>
                        <div className="footer-contacts__icon-sn d-flex flex-row justify-content-center"><img src={instagramLogo}
                                                                                                              alt="instagram"/></div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
