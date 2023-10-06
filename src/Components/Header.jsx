import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS if you haven't already
import Isotope from 'isotope-layout'; // Import Isotope library
import '../Components/header.css'
import { Link } from 'react-scroll'; // Import react-scroll for smooth scrolling
import image from '../Assets/herocar.svg'

const HeroAnimated = () => {
    useEffect(() => {
        // Auto generate the hero carousel indicators
        const heroCarouselIndicators = document.querySelector('#hero .carousel-indicators');
        if (heroCarouselIndicators) {
            const heroCarouselItems = document.querySelectorAll('#hero .carousel-item');

            heroCarouselItems.forEach((item, index) => {
                if (index === 0) {
                    heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}" class="active"></li>`;
                } else {
                    heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}"></li>`;
                }
            });
        }

        // Porfolio isotope and filter
        const portfolionIsotope = document.querySelector('.portfolio-isotope');
        if (portfolionIsotope) {
            const portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') || '*';
            const portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') || 'masonry';
            const portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') || 'original-order';

            const portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
                itemSelector: '.portfolio-item',
                layoutMode: portfolioLayout,
                filter: portfolioFilter,
                sortBy: portfolioSort
            });

            const menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
            menuFilters.forEach(function (el) {
                el.addEventListener('click', function () {
                    document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
                    this.classList.add('filter-active');
                    portfolioIsotope.arrange({
                        filter: this.getAttribute('data-filter')
                    });
                    if (typeof aos_init === 'function') {
                        aos_init();
                    }
                }, false);
            });
        }

        // Animation on scroll function and init
        function aos_init() {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
        }

        aos_init();

    }, []); // Run this effect only once after component mount

    return (
        <section id="hero-animated" className="hero-animated d-flex align-items-center">
            <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
                data-aos="zoom-out">
                <img src={image} className="img-fluid animated" alt="Hero Image" />
                <h2>Welcome to <span>HeroBiz</span></h2>
                <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>
                <div className="d-flex">
                    <Link to="about" smooth={true} className="btn-get-started scrollto">Get Started</Link>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                        className="glightbox btn-watch-video d-flex align-items-center">
                        <i className="bi bi-play-circle"></i><span>Watch Video</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroAnimated;
