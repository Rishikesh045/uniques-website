import React from 'react'
import "../Components/sticky.css"

const Sticky = () => {
    return (
        <div>
            <section class="second-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 px-3 stick-section py-4">
                            <div class="px-5 m-auto">
                                <h2 class="py-2 my-2">Grow Your Business With <span>Godigitify</span> </h2>
                                <p class="py-2 my-2">The company has worked for 30+ brands and has created a unique space
                                    for themselves in
                                    the
                                    market. Every Digital Guide is beyond an employee for the company. The activities we do
                                    are
                                    strategic, creative, and at times crazy and hilarious which motivates to bring out the
                                    best.
                                </p>
                                <a href="./Services.html"><button class="btn btn-warning text-white my-2">View All
                                    Services</button></a>
                            </div>

                        </div>
                        <div class="col-lg-6 card-section">
                            <div class="row steps-cards">
                                <div class="col-12 px-3">
                                    <div class="row py-2">
                                        <img src="./New folder/icons/click.png" alt="" srcset="" class="image-icon" />
                                    </div>
                                    <div class="row py-1">
                                        <h4>Website Development</h4>
                                    </div>
                                    <div class="row py-1">
                                        <p>We take responsibility of building and maintaining your online web presence. With
                                            time to time changes and improvements, Everyday Scan & Malware Removal</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row steps-cards">
                                <div class="col-12 px-3">
                                    <div class="row py-2">
                                        <img src="./New folder/icons/search.png" alt="" class="image-icon" />
                                    </div>
                                    <div class="row py-1">
                                        <h4>Search Engine Optimization</h4>
                                    </div>
                                    <div class="row py-1">
                                        <p>Blending in those countless webpages. We help you rank on search engines for
                                            better reach and conversions.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row steps-cards">
                                <div class="col-12 px-3">
                                    <div class="row py-2">
                                        <img src="./New folder/icons/social-media (1).png" alt="" class="image-icon" />
                                    </div>
                                    <div class="row py-1">
                                        <h4>Social Media Marketing</h4>
                                    </div>
                                    <div class="row py-1">
                                        <p>Let yourself be heard above the white noise. We make sure you navigate the social
                                            stream with success, no matter what the platform.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row steps-cards">
                                <div class="col-12 px-3">
                                    <div class="row py-2">
                                        <img src="./New folder/icons/advertising.png" alt="" class="image-icon" />
                                    </div>
                                    <div class="row py-1">
                                        <h4>Digital Advertising</h4>
                                    </div>
                                    <div class="row py-1">
                                        <p>From Google Display Network to Facebook Advertising, we ensure that the correct
                                            demographic is targeted. Our team of experts ensures that the right audience is
                                            targeted for maximum conversion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Sticky