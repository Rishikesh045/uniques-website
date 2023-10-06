import React, { useEffect, useRef } from 'react';
import 'jquery'; // Import jQuery before Owl Carousel
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel';
import './Carousel.css';
import testimonials from './testimonials.json'; // Import the JSON file

const Carousel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        if (typeof window.$ !== 'undefined' && typeof window.$.fn.owlCarousel !== 'undefined') {
            // Initialize Owl Carousel here
            window.$(carouselRef.current).owlCarousel({
                loop: true,
                center: true,
                margin: 0,
                responsiveClass: true,
                nav: false,
                autoplay: true, // Enable autoplay
                autoplayTimeout: 3000, // Set autoplay interval to 3 seconds
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    680: {
                        items: 2,
                        nav: false,
                        loop: false
                    },
                    1000: {
                        items: 3,
                        nav: true
                    }
                }
            });
        }
    }, []);

    return (
        <div className="gtco-testimonials">
            <h2> Testimonials Carousel </h2>
            <div ref={carouselRef} className="owl-carousel owl-carousel1 owl-theme">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="card text-center">
                        <img
                            className="card-img-top"
                            src={testimonial.image}
                            alt=""
                        />
                        <div className="card-body">
                            <h5>
                                {testimonial.name} <br />
                                <span> {testimonial.position} </span>
                            </h5>
                            <p className="card-text">{testimonial.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
