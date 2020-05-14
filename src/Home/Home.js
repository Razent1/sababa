import React from "react";
import "./_home.sass";
import floorImg from "../icons/floor.svg"
import mainImg from "../icons/clip-2/clip-2.png"

export const Home = () => {
    return (
        <main className='main-block container'>
            <div className="row">
                <div className="main-block__title col-12 ">
                    <div className='d-flex flex-row justify-content-center main-block__title__bold'>Welcome to Israel
                    </div>
                    <div className='d-flex flex-row justify-content-center main-block__title__nonbold'>First steps of
                        the new repatriate
                    </div>
                    <div className='wrapper-img d-flex flex-column flex-fill'>
                        <div className="d-flex flex-row justify-content-center main-block__info">Lorem ipsum dolor
                            sit amet, vel accumsan liberavisse ex, ea nec elaboraret
                        </div>
                        <div className="d-flex flex-row justify-content-center main-block__info">interpretaris, sed
                            diceret
                            concludaturque no.
                            Verear habemus sea ut
                        </div>
                        <div className="main-block__buttons d-flex flex-row justify-content-center">
                            <button className='button-purple' style={{marginRight: '36px'}}>Sigh up</button>
                            <button className='button-main'>
                                <div className='row justify-content-center'>Know More</div>
                            </button>
                        </div>
                        <div className=' floor d-flex flex-row flex-fill align-items-end'><img className='floor-img' src={floorImg} alt=""/></div>
                        <div className="main-img"><img className='main-img__man ' src={mainImg} alt="Main image"/></div>
                    </div>
                    {/*<div className='floor-img flex-column flex-fill align-items-end'>1</div>*/}
                </div>
            </div>
        </main>
    )
};

// export default Home;