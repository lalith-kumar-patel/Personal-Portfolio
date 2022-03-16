import React from 'react';
import './About.css';
import image from './images/photo2.jpg'

function About() {
    return (
        <section className='about section' id='about'>
            <div className='container flex-center'>
                <h1 className='section-title-01' >About Me</h1>
                <h2 className='section-title-02' >About Me</h2>
                <div className='content flex-center' >
                    <div className='about-img' >
                        <img src={image} alt='' /> 
                    </div>
                    <div className='about-info'>
                        <div className='description' >
                            <h3>Hey folks ! This is Lalith Kumar Patel</h3>
                            <h4>A Senior Systems Engineer <span>Full Stack Developer</span> based in <span>india</span></h4>
                            <p>A 25 years old young passionate Web developer and living in Visakhapatnam, India. I am a Computer 
                                Science Engineer, currently working with an amazing team at Infosys. I have around 2.3 years of 
                                hands-on experience in efficiently coding websites and 
                                applications using modern HTML, CSS and JavaScript / TypeScript in Angular Framework and Backend on 
                                Java SpringBoot Framework. I am always excited to do work related to Web 
                                Development so just ping me or send your message from Contact page.
                            </p>
                        </div>
                        <ul className='professional-list'>
                            <li className='list-item'>
                                <h3>2+</h3>
                                <span>Years of experience</span>
                            </li>
                            <li className='list-item'>
                                <h3>5+</h3>
                                <span>No. of Projects</span>
                            </li>
                        </ul>
                        <a href='#about' className='btn' >Download Resume<i className='fas fa-download'></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
