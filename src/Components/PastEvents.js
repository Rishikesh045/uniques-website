import React from 'react';
import data from '../Components/Response.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Events() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1800,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Breakpoint for mobile devices
                settings: {
                    slidesToShow: 1, // Show one card at a time on mobile
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='container mt-5'>
            <h2 className='text-center fw-400 fs-1 pt-3 pb-3'>EVENTS</h2>
            <p className='text-center fw-100'>"Inspire, Connect, Celebrate"</p>
            <Slider {...settings} className='p-3 text-center'>
                {data.map((d) => (
                    <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                        <div className="card">
                            <img src={d.imgg} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{d.title}</h5>
                                <p className="card-text">{d.para}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Events;
