import React from 'react';
import Footer from '../Footer/Footer';
import GetInTouch from '../GetInTouch/GetInTouch';
import Header from '../Header/Header';
import './About.css';
import flower from '../Assets/flower.svg';

function About() {
    return (
        <div>
            <div className="about">
                <Header />
                <div className="about-container">
                    <div className="container-text">
                        <div className="container-inner-text1">
                            <p>
                                Kim
                            </p>
                        </div>
                        <div className="container-inner-text2">
                            <p>
                                Dmitrii
                            </p>
                        </div>
                    </div>
                    <div className="container-quote container-quote1">
                        I create sites and <br /> applications that cause <br /> pleasant emotions
                    </div>
                    <div className="container-quote container-quote2">
                        I specialize in frontend <br /> developing, experience websites <br /> and applications
                    </div>
                    <div className="container-image"></div>
                </div>
                <div className="about-container2">
                    <div className="about-container2-heading">
                        <div className="about-text-lower">
                            <p>Frontend developer,</p>
                        </div>
                        <div className="about-text-lower">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frontend</p>
                        </div>
                        <div className="about-text-lower">
                            <p>&nbsp;Developer&nbsp;&nbsp;&nbsp; &</p>
                        </div>
                        <div className="about-text-lower">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp; a Developer</p>
                        </div>
                    </div>
                    <div className="about-container2-p">
                        <p>Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Repellat, sit!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ipsum facilis dolore error quidem et?</p>
                        <p className="about-container2-p-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora possimus similique eum dolorem labore voluptatem voluptates recusandae necessitatibus id?
                        </p>
                        <p>Lorem ipsum dolor sit amet. <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, dolorem!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, debitis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, optio? <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, odio.</p>
                    </div>
                    <div className="about-container2-heading2">
                        <div className="about-text-lower">
                            <p>What is my feature?</p>
                        </div>
                    </div>
                    <div className="about-container2-p">
                        <p className="about-container2-p-right">
                            Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet.
                        </p>
                        <p>Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="about-container-flower">
                        <img src={flower} alt="" />
                    </div>
                </div>
                <GetInTouch />
                <Footer />
            </div>
        </div>
    )
}

export default About
