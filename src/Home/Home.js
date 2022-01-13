import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import flower from '../Assets/flower.svg';
import another from '../Assets/another.svg';

function Home() {
    return (
        <div className='home'>
            <Header />
            <div className="container">
                <div className="container1">
                    <div className="text-line" id='kim'>
                        <p>Kim</p>
                    </div>
                    <div className="txt-line line bottom" id='dmitrii'>
                        <p>Dmitrii</p>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="left-side-quote">
                <p>I create digital experiences that merge art <br /> direction,branding, creative strategy, web <br /> design, prototeyping, and digital interactions.</p>
            </div>
            <div className="container">
                <div></div>
                <div className="container1">
                    <div className="txt-line" id="digital">
                        <p>Digital</p>
                    </div>
                    <div className="txt-line line-bottom" id="designer">
                        <p>Designer</p>
                    </div>
                </div>
            </div>
            <div className="flower-svg">
                <img src={flower} alt="" />
            </div>
            <div className="short-about">
                <div className="main-h1-short-about">
                    <h1 className="main-short-about">
                        Shortly
                    </h1>
                    <h1 className="main-short-about">
                        About
                    </h1>
                    <h1 className="main-short-about">
                        MySelf
                    </h1>
                </div>
                <div className="sub-main-p-short-about">
                    <p className="sub-main-short-about">
                        I BELIEVE THAT EVERY PROGECT THAT I DO SHOULD HAVE AN OVERVALUE.
                    </p>
                    <p className="sub-main-short-about">
                        I ALWAYS TRY TO FIND THE OPTIMAL SOLUTION TO THE CLIENT'S TASK.
                    </p>
                </div>
                <div className="another-svg">
                    <img src={another} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
