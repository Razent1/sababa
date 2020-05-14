import React from 'react';
import './App.css';
import './main/main.sass';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Home} from "./Home/Home";
import About from "./About/About";

const App = () => {
    return (
        <div className='main'>
            <div className='content'>
                <Header/>
                <About/>
                {/*<Home/>*/}
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>

    )
};
export default App;