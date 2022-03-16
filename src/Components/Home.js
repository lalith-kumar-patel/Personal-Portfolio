import React, { useState, useEffect } from 'react';
import './Home.css';
import image from './images/photo1.jpg';

function Home() {

    window.addEventListener("scroll", function(){
        const header = this.document.querySelector("header");
        header.classList.toggle("sticky", this.window.scrollY > 0);
    });

    const [scrollTopBtn, setScrollTopBtn] = useState(null);

    useEffect(() => {
        setScrollTopBtn(document.querySelector(".scrollToTop-btn"));
        
        const isSupported = scrollTopBtn && scrollTopBtn.addEventListener;
        if (!isSupported) return;
    
        window.addEventListener("scroll", function() {
            scrollTopBtn.classList.toggle("active", this.window.scrollY > 500);
        });
        
        scrollTopBtn.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop =0;
        });

    }, [scrollTopBtn]);

    // Navigation menu item active on page scroll
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            let sectionHeight = current.offsetHeight;
            let sectionTop = current.offsetTop - 50;
            let id = current.getAttribute("id");

            if( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
                document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
            }
            else{
                document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
            }
        });
    });

    // Dark/light theme
    const [themeBtn, setThemeBtn] = useState(null);

    useEffect(() => {
        setThemeBtn(document.querySelector(".theme-btn"));

        const isSupported = themeBtn && themeBtn.addEventListener;
        if (!isSupported) return;

        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            themeBtn.classList.toggle("sun");

            localStorage.setItem("saved-theme", getCurrentTheme());
            localStorage.setItem("saved-icon", getCurrentIcon());
        });

        const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
        const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" :"moon";

        const savedTheme = localStorage.getItem("saved-theme");
        const savedIcon = localStorage.getItem("saved-icon");

        if(savedTheme){
            document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
            themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
        }

    }, [themeBtn]);

    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");
    const navItems = document.querySelectorAll(".nav-items a");
    
    const isSupported = menuBtn && menuBtn.addEventListener && closeBtn && closeBtn.addEventListener 
            && navigation && navigation.addEventListener && (navItems.length!==0) && (navItems.addEventListener!=="undefined");
            
    if(isSupported){
        
        menuBtn.addEventListener("click", () => {
            navigation.classList.add("active");
        });
        
        closeBtn.addEventListener("click", () => {
            navigation.classList.remove("active");
        });

        navItems.forEach((navItem) => {
            navItem.addEventListener("click", () => {
                navigation.classList.remove("active");
            });
        });  
    }

    return (
        <>
            <header>
                <div className='nav-bar'>
                    <a href='#' className='logo'>Lalith Kumar Patel</a>
                    <div className='navigation'>
                        <div className='nav-items'>
                            <div className='nav-close-btn'></div>
                            <a className='active' href='#home' >Home</a>
                            <a href='#about' >About</a>
                            <a href='#skills' >Skills</a>
                            <a href='#project' >Project</a>
                            <a href='#contact' >Contact</a>
                        </div>
                    </div>
                    <div className='nav-menu-btn'></div>
                </div>
            </header>
            <section className='home flex-center' id='home'>
                <div className='home-container'>
                    <div className='media-icons'>
                        <a href='https://github.com/lalith-kumar-patel' target='_blank' ><i class="fa-brands fa-github"></i></a>
                        <a href='https://linkedin.com/in/lalith-kumar-patel' target='_blank' ><i class="fa-brands fa-linkedin"></i></a>
                        <a href='https://www.facebook.com/lalithkumarpatel.chavan' target='_blank' ><i className='fab fa-facebook-f'></i></a>
                        <a href='https://www.instagram.com/itsl_a_lith/' target='_blank' ><i className='fab fa-instagram'></i></a>
                    </div>
                    <div className='info'>
                        <h2>Hi, I'm</h2>
                        <h2>Lalith Kumar Patel</h2>
                        <h3>Full Stack Angular SpringBoot Developer</h3>
                        <a href='#contact' className='btn'>Contact Me <i className='fas fa-arrow-circle-right'></i></a>
                    </div>
                    <div className='home-img'>
                        <img src={image} alt='no image'/>    
                    </div> 
                </div>
                <a href='#about' className='scroll-down' >Scroll Down <i className='fas fa-arrow-down'></i></a>
            </section>
            <div className='scrollToTop-btn flex-center'>
                <i className='fas fa-arrow-up'></i>
            </div>
            <div className='theme-btn flex-center'>
                <i className='fas fa-moon'></i>
                <i className='fas fa-sun'></i>
            </div>
        </>
    )
}

export default Home;