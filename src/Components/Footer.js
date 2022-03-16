import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='about group'>
                    <h2>Lalith</h2>
                    <p>Full Stack Angular SpringBoot developer</p>
                    <a href='#about'>About Me</a>
                </div>
                <div className='hr'></div>
                <div className='info group'>
                    <h3>More</h3>
                    <ul>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#project'>Project</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className='hr'></div>
                <div className='follow group'>
                    <h3>Follow</h3>
                    <ul>
                        <li><a href='https://github.com/lalith-kumar-patel' target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></li>
                        <li><a href='https://linkedin.com/in/lalith-kumar-patel' target='_blank' rel="noopener noreferrer" ><i class="fa-brands fa-linkedin"></i></a></li>
                        <li><a href='https://www.facebook.com/lalithkumarpatel.chavan' target='_blank' rel="noopener noreferrer" ><i className='fab fa-facebook-f'></i></a></li>
                        <li><a href='https://www.instagram.com/itsl_a_lith/' target='_blank' rel="noopener noreferrer"><i className='fab fa-instagram'></i></a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-copyright group'>
                <p>Made by Lalith with <i class="fa-solid fa-heart"></i></p>
            </div>
        </footer>
    )
}

export default Footer;