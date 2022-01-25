import React, { useEffect, useRef } from 'react';
import Footer from '../Footer/Footer';
import GetInTouch from '../GetInTouch/GetInTouch';
import Header from '../Header/Header';
import './About.css';
import flower from '../Assets/flower.svg';
import gsap from 'gsap';

function About() {
    let text1 = useRef(null);
    let text2 = useRef(null);
    let image = useRef(null);
    let p1 = useRef(null);
    const timeline_about = gsap.timeline();

    useEffect(() => {
        timeline_about.from([text1, text2], {
            duration: .8,
            y: 600,
            skewY: 10,
            stagger: {
                amount: .4
            }
        }, "-=.5")
        timeline_about.from(image, {
            duration: 1.5,
            y: 300,
            delay: .2,
            opacity: 0
        }, "-=.5")
        timeline_about.from(p1, {
            duration: .5,
            x: 200,
            skewX: 10,
            opacity: 0
        })
    })

    return (
        <>
            <div>
                <div className="about">
                    <Header timeline={timeline_about} />
                    <div className="about-container">
                        <div className="container-text">
                            <div className="container-inner-text1">
                                <p ref={el => text1 = el}>
                                    Kim
                                </p>
                            </div>
                            <div className="container-inner-text2">
                                <p ref={el => text2 = el}>
                                    Dmitrii
                                </p>
                            </div>
                        </div>
                        <div className="container-quote container-quote1" ref={el => p1 = el}>
                            I create sites and <br /> applications that cause <br /> pleasant emotions
                        </div>
                        <div className="container-quote container-quote2">
                            I specialize in frontend <br /> developing, experience websites <br /> and applications
                        </div>
                        <div className="container-image" ref={el => image = el}></div>
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
                    <div className="about-footer">
                        <GetInTouch />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
