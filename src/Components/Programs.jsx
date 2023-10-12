import React from 'react';
import image1 from '../Assets/inceptionn.png';
import image2 from '../Assets/elevate.png';

const Programs = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h1>Our Training Program</h1>
            </div>
            {/* Inception Section */}
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img src={image1} alt="Inception" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center">
                    <div>
                        <h2>INCEPTION</h2>
                        <p>"WebCraft Essentials: Pioneering Your Digital Odyssey"</p>
                        <p>
                            Inception marked the inaugural phase of training within the Uniques Batch, where participants embarked on their foundational journey into the realm of web development. During this initial round, essential elements of the discipline were unveiled, encompassing the fundamental trio of HTML, CSS, and JavaScript. Additionally, attendees delved into the artistic finesse of Photoshop, acquiring skills to craft visually captivating digital designs. Inception set the stage for a robust learning voyage, equipping individuals with the core tools and techniques required to navigate the dynamic world of web development.
                        </p>
                    </div>
                </div>
            </div>
            {/* Elevate Section */}
            <div className="row">
                <div className="col-lg-6 col-md-12 d-flex align-items-center">
                    <div>
                        <h2>ELEVATE</h2>
                        <p>"Rising Beyond Limits: Mastering MERN for Web Excellence"</p>
                        <p>
                            Elevate, the dynamic second phase of Uniques Batch training, propelled participants deeper into the intricate landscape of full-stack web development. This immersive round ushered them into the realm of the MERN stack, an innovative combination encompassing MongoDB, Express.js, React, and Node.js. Through Elevate, individuals embarked on a comprehensive exploration, honing their prowess in both front-end and back-end technologies, fostering a holistic understanding of creating modern and responsive web applications. This phase amplified their capabilities, enabling them to ascend to new heights in the world of web development.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img src={image2} alt="Elevate" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Programs;
