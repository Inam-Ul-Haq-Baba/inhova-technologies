import React from 'react';
import ContactHero from "./contact/ContactHero";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

export default function Contact() {
    return (
        <>
            <ContactHero />
            <div className='flex flex-col md:flex-row px-3'>
                <ContactInfo />
                <ContactForm />
            </div>  
        </>
    );
}