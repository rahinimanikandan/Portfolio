import React from 'react';
import "./contact.css";
import { Mail, MapPin, Phone } from 'lucide-react';

function Contact() {
    return (
        <div className="contact-page-wrapper">
            <div className="contact-head">
                <h2>Get in touch</h2>
            </div>
            
            <div className="contact-container">
                <div className="contact-grid">
                    <div className="contact-card">
                        <MapPin size={42} />
                        <p>TamilNadu<br />India</p>
                    </div>
                    
                    <div className="contact-card">
                        <Phone size={42} />
                        <p>+91-9080905757</p>
                    </div>
                    
                    <div className="contact-card">
                        <Mail size={42} />
                        <p>rahinimanikandan39@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;