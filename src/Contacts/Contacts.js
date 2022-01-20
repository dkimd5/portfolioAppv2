import React from 'react';
import Header from '../Header/Header';
import './Contacts.css';
import Footer from '../Footer/Footer';
import flower from '../Assets/flower.svg';

function Contacts() {
    return (
        <div>
            <Header />
            <div className="contact-page">
                <div className="contact-page-container">
                    <h1>
                        Let's talk about <br /> the project? <img src={flower} alt="" />
                    </h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contacts
