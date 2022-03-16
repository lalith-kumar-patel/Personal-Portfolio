import React, { useEffect } from 'react';
import './Project.css';
import image from './images/personal_portfolio.png';
import image1 from './images/sorting_animator.png';
import image2 from './images/profitable_goals.png';
import image3 from './images/game.png';

function Project() {
    
    useEffect(() => {
        const portfolioModals = document.querySelectorAll(".portfolio-model");
        const imgCards = document.querySelectorAll(".img-card");
        const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");
        
        const isSupported = (portfolioModals.length!==0) && (portfolioModals.addEventListener!=="undefined") && (imgCards.length!==0) && 
        (imgCards.addEventListener!=="undefined") && (portfolioCloseBtns.length!==0) && (portfolioCloseBtns.addEventListener!=="undefined");
        
        if(!isSupported) return;

        var portfolioModal = function(modalClick) {
            portfolioModals[modalClick].classList.add("active");
        }

        imgCards.forEach((imgCard, i) => {
            imgCard.addEventListener("click", () => {
                portfolioModal(i);
            });
        });

        portfolioCloseBtns.forEach((portfolioCloseBtn, i) => {
            portfolioCloseBtn.addEventListener("click", () => {
                portfolioModals.forEach((portfolioModalView) => {
                    portfolioModalView.classList.remove("active");
                });
            });
        });
    }, );

    return (
        <section className='portfolio section' id="project">
            <div className='container flex-center'>
                <h1 className='section-title-01'>Projects</h1>
                <h2 className='section-title-02'>Projects</h2>
                <div className='content'>
                    <div className='portfolio-list'>
                        <div className='img-card-container'>
                            <div className='img-card'>
                                <div className='overlay'></div>
                                <div className='info'>
                                    <h3>Personal Portfolio</h3>
                                    <span>React</span>
                                </div>
                                <img src={image} alt=''/>
                            </div>
                            <div className='portfolio-model flex-center'>
                                <div className='portfolio-model-body'>
                                    <i className='fas fa-times portfolio-close-btn'></i>
                                    <h3>Personal Portfolio</h3>
                                    <a href='https://github.com/lalith-kumar-patel' target='_blank' rel="noopener noreferrer"><img src={image} alt='' /></a>
                                    <p>Personal portfolio website Developed using HTML, CSS, React and ParticleJS </p>
                                </div>
                            </div>
                        </div>
                        <div className='img-card-container'>
                            <div className='img-card'>
                                <div className='overlay'></div>
                                <div className='info'>
                                    <h3>Profitable Goals</h3>
                                    <span>Angular & SpringBoot</span>
                                </div>
                                <img src={image2} alt=''/>
                            </div>
                            <div className='portfolio-model flex-center'>
                                <div className='portfolio-model-body'>
                                    <i className='fas fa-times portfolio-close-btn'></i>
                                    <h3>Profitable Goals</h3>
                                    <a href='https://github.com/lalith-kumar-patel' target='_blank' rel="noopener noreferrer"><img src={image2} alt='' /></a>
                                    <p>Developed a web application that helps users to trade and build a team and manage their 
                                        profiles. Implemented functionality like payment history, withdrawal, personal settings, 
                                        bank details, change password, logout, Admin panel. Tech involved: HTML5, CSS3, Typescript, Angular,
                                         Material UI. </p>
                                </div>
                            </div>
                        </div>
                        <div className='img-card-container'>
                            <div className='img-card'>
                                <div className='overlay'></div>
                                <div className='info'>
                                    <h3>Sorting Animator</h3>
                                    <span>Javascript</span>
                                </div>
                                <img src={image1} alt=''/>
                            </div>
                            <div className='portfolio-model flex-center'>
                                <div className='portfolio-model-body'>
                                    <i className='fas fa-times portfolio-close-btn'></i>
                                    <h3>Sorting Animator</h3>
                                    <a href='https://lalith-kumar-patel.github.io/SortingAnimator.io/' target='_blank' rel="noopener noreferrer"><img src={image1} alt='' /></a>
                                    <p>Developed a web application that helps users to visualize the sorting techniques. it is built with the 
                                        purpose to work with Javascript (Live).Implemented some sorting algorithms and functionality like Size
                                        of the array, Speed of sorting.</p>
                                </div>
                            </div>
                        </div>
                        <div className='img-card-container'>
                            <div className='img-card'>
                                <div className='overlay'></div>
                                <div className='info'>
                                    <h3>Hand Cricket Game</h3>
                                    <span>Java</span>
                                </div>
                                <img src={image3} alt=''/>
                            </div>
                            <div className='portfolio-model flex-center'>
                                <div className='portfolio-model-body'>
                                    <i className='fas fa-times portfolio-close-btn'></i>
                                    <h3>Hand Cricket Game</h3>
                                    <a href='https://github.com/lalith-kumar-patel' target='_blank' rel="noopener noreferrer"><img src={image3} alt='' /></a>
                                    <p>Developed hand cricket game application where users can play visually. Tech involved: JAVA through NetBeans </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Get in touch */}
            <div className='get-in-touch sub-section'>
                <div className='container'>
                    <div className='content flex-center'>
                        <div className='contact-card flex-center'>
                            <div className='title'>
                                <h4>Let's Talk</h4>
                                <h3>About Your</h3>
                                <h2>Next Project</h2>
                            </div>
                            <div className='contact-btn'>
                                <a href='#contact' className='btn'>Get In Touch<i className='fas fa-paper-plane'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Project;