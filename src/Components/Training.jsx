import React from 'react';
import '../Components/content.css'

const Content = () => {
    return (
        <section id="call-to-action" className="call-to-action">
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <h3>Our Work Implementation</h3>
                        <p>The Uniques Batch is a unique learning program that empowers individuals in web development, graphics design, and digital marketing. It combines theory, hands-on projects, and mentorship for holistic skill development. Structured training modules, interactive lessons, and practical exercises enhance understanding. Participants work on real client projects to apply skills, gaining experience and client collaboration abilities. Mentorship from experienced professionals fosters practical insights and guidance. The program cultivates proficient and effective skill implementation in a collaborative learning environment.</p>
                        <a className="cta-btn" href="#">Know More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
