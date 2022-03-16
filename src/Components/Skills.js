import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <section className='skills section' id='skills' >
            <div className='container flex-center' >
                <h1 className='section-title-01' >Skills</h1>
                <h2 className='section-title-02' >Skills</h2>
                <div className='content'>
                    <div className='skills-description'>
                        <h3>Eductions & Skills</h3>
                        {/* <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as 
                            the href value. If you cannot provide a valid href, but still need the element to resemble a link, 
                            use a button and change it with appropriate styles. </p> */}
                    </div>
                    <div className='skills-info education-all'>
                        <div className='education'>
                            <h4><label>Education</label></h4>
                            <ul className='edu-list'>
                                <li className='item'>
                                    <span className='year'>2015-2019</span>
                                    <p><span>B.tech in Raghu Institute of Technology</span>, visakhapatnam</p>
                                </li>
                                <li className='item'>
                                    <span className='year'>2013-2015</span>
                                    <p><span>Intermediate in Narayana Junior College</span>, visakhapatnam</p>
                                </li>
                                <li className='item'>
                                    <span className='year'>2013</span>
                                    <p><span>Class 10th in Gloria English Medium School</span>, visakhapatnam</p>
                                </li>
                            </ul>
                        </div>
                        <div className='education'>
                            <h4><label>Frontend</label></h4>
                            <ul className='bars'>
                                <li className='bar'>
                                    <div className='info'>
                                        <span>Html</span>
                                        <span>90%</span>
                                    </div>
                                    <div className='line html'></div>
                                </li>
                                <li className='bar'>
                                    <div className='info'>
                                        <span>CSS</span>
                                        <span>85%</span>
                                    </div>
                                    <div className='line css'></div>
                                </li>
                                <li className='bar'>
                                    <div className='info'>
                                        <span>JavaScript</span>
                                        <span>87%</span>
                                    </div>
                                    <div className='line javascript'></div>
                                </li>
                                <li className='bar'>
                                    <div className='info'>
                                        <span>TypeScript</span>
                                        <span>95%</span>
                                    </div>
                                    <div className='line typescript'></div>
                                </li>
                                <li className='bar'>
                                    <div className='info'>
                                        <span>Angular</span>
                                        <span>90%</span>
                                    </div>
                                    <div className='line angular'></div>
                                </li>
                                <li className='bar'>
                                    <div className='info'>
                                        <span>React</span>
                                        <span>55%</span>
                                    </div>
                                    <div className='line react'></div>
                                </li>
                            </ul>
                        </div>
                        <div className='education'>
                            <h4><label>Backend</label></h4>
                            <ul className='bars'>
                                <li className='bar'>
                                    <div className='info'>
                                        <span>Java</span>
                                        <span>90%</span>
                                    </div>
                                    <div className='line java'></div>
                                </li>
                                <li className='bar'>
                                    <div className='info'>
                                        <span>SpringBoot</span>
                                        <span>90%</span>
                                    </div>
                                    <div className='line springboot'></div>
                                </li>
                                <li className='bar'>
                                    <div className='info'>
                                        <span>MySql</span>
                                        <span>87%</span>
                                    </div>
                                    <div className='line mysql'></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='skills-description'>
                        <h3>Work Experience</h3>
                    </div>
                    <div className='skills-info'>
                        <div className='experience-card'>
                            <div className='upper'>
                                <h3>Sr. System Engineers</h3>
                                <h5>Full Time | Office</h5>
                                <span>2020-Present</span>
                            </div>
                            <div className='hr'></div>
                            <h4><label>Infosys</label></h4>
                            <p>I develop web applications using angular and springboot</p>
                        </div>
                        {/* <div className='experience-card'>
                            <div className='upper'>
                                <h3>Sr. System Engineer</h3>
                                <h5>Full Time | Office</h5>
                                <span>2020-2021</span>
                            </div>
                            <div className='hr'></div>
                            <h4><label>Infosys</label></h4>
                            <p>I develop web applications using angular and springboot</p>
                        </div>
                        <div className='experience-card'>
                            <div className='upper'>
                                <h3>Sr. System Engineer</h3>
                                <h5>Full Time | Office</h5>
                                <span>2020-2021</span>
                            </div>
                            <div className='hr'></div>
                            <h4><label>Infosys</label></h4>
                            <p>I develop web applications using angular and springboot</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;