import React from 'react';
import '../Components/content.css'

const Content = () => {
    return (
        <section id="call-to-action" className="call-to-action">
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h3>We Enhance the Essence of Work.</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <a className="cta-btn" href="/contact">Know More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
