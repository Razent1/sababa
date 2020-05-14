import React, {useState} from "react";
import './header.sass';
import logo from '../logo/Logo.svg';
import iconSearch from "../icons/search.svg"


const Header = () => {
    const headerPoint = <div className='row  header-menu__point'></div>;
    const [pointHome, setPointHome] = useState(true);
    const [pointAbout, setPointAbout] = useState(false);
    const [pointBlog, setPointBlog] = useState(false);

    const homeItemOnClick = () => {
        if (pointHome === false) {
            setPointHome(true);
            setPointAbout(false);
            setPointBlog(false);
        }
    };
    const aboutItemOnClick = () => {
        if (pointAbout === false) {
            setPointAbout(true);
            setPointHome(false);
            setPointBlog(false);
        }
    };
    const blogItemOnClick = () => {
        if (pointBlog === false) {
            setPointBlog(true);
            setPointHome(false);
            setPointAbout(false);
        }
    };


    return (
        <header className='container'>
            <div className='row'>
                <div className="header-menu col-12 col-md-6">
                    <div className='header-logo d-flex flex-row'>
                        <img className='mobile-logo' src={logo} alt="logo"/>
                    </div>
                    <div className='mobile-items row'>
                        <div onClick={homeItemOnClick}
                             className="header-menu__item">Home {pointHome ? headerPoint : ''}</div>
                        <div onClick={aboutItemOnClick}
                             className="header-menu__item">About {pointAbout ? headerPoint : ''}</div>
                        <div onClick={blogItemOnClick}
                             className="header-menu__item">Blog {pointBlog ? headerPoint : ''}</div>
                    </div>
                </div>
                <div className="header-search col-12 col-md-6">
                    <div className="header-search">
                        <form action="#" className='form'>
                            <div className='row '>
                                <div className='form-block hidden-mobile'>
                                    <i className="form__icon"><img src={iconSearch} alt="search"/></i>
                                    <input className='form__input' type='search' placeholder='Search Here'/>
                                </div>
                                <button className='button  button-light hidden-mobile' type='submit'>Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;