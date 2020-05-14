import React from "react";
import './_about.sass';


class About extends React.Component {
    render() {
        return (
            <div className='about container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title d-flex flex-col justify-content-center'>
                            <div > <span className='title__bold'>About</span> <span className='title__nonbold'>Repatriation</span></div>
                        </div>
                        <div className='top-text d-flex flex-col justify-content-center'>
                            <div className='d-flex flex-row'>But I must explain to you how all this mistaken idea of denouncing pleasure and
                                praising pain was born and I will give you a complete account of the system, and expound
                                the actual teachings of the great explorer of the truth, the master-builder of human
                                happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                                but because those who do not know how to.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;

