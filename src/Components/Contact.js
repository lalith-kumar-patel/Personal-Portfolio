import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className='contact section' id='contact'>
            <div className='container flex-center'>
                <h1 className='section-title-01'>Contact Me</h1>
                <h2 className='section-title-02'>Contact Me</h2>
                <div className='content'>
                    <div className='contact-left'>
                        <h2>Let's discuss your project</h2>
                        <ul className='contact-list'>
                            <li>
                                <h3 className='item-list'><i className='fas fa-phone'></i>Phone</h3>
                                <span>7660037769</span>
                            </li>
                            <li>
                                <h3 className='item-list'><i className='fas fa-envelope'></i>Email Address</h3>
                                <span><a href='lalithkumarpatel1997@gmail.com'>lalithkumarpatel1997@gmail.com</a></span>
                            </li>
                            <li>
                                <h3 className='item-list'><i className='fas fa-map-marker-alt'></i>Official Address</h3>
                                <span>Visakhapatnam</span>
                            </li>
                        </ul>
                    </div>
                    <div className='contact-right'>
                        <p>I'm always open for discussing project<br/> <span>development work</span></p>
                        <form action='' className='contact-form'>
                            <div className='first-row'>
                                <input type='text' placeholder='Name' />
                            </div>
                            <div className='second-row'>
                                <input type='email' placeholder='Email' />
                                <input type='text' placeholder='Subject' />
                            </div>
                            <div className='third-row'>
                               <textarea name='message' id='' rows='7' placeholder='Message'></textarea>
                            </div>
                            <button className='btn' type='submit'>Send Message<i className='fas fa-paper-plane'></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;