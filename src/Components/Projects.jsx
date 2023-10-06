import React from 'react'
import "../Components/Projects.css"
import image1 from "../Assets/code.png"
import image2 from "../Assets/tech.png"
import image3 from "../Assets/go.png"
import image4 from "../Assets/click.png"
import image5 from "../Assets/gdg.png"
import image6 from "../Assets/icta.png"
import image7 from "../Assets/success.png"


const Projects = () => {
    return (
        <section className="Hero">
            <div className="hero-text">
                <div className="container">
                    <div>
                        <img src={image2} alt="TECHLEARNS" />
                    </div>
                    <div className="boxi">
                        <h1>
                            <span>TECH</span>LEARNS
                        </h1>
                        <p>
                            TechLearns is an educational platform which is available to everyone,
                            everywhere. We wish to uplift the educational standards of not only
                            our city or country but globally. Join us in this noble to cause to
                            make education reach to those in need of it.
                        </p>
                        <button id="btn-1">View More</button>
                    </div>
                </div>
                <div className="container">
                    <div className="boxi">
                        <h1>
                            <span style={{ color: 'go-color' }}>GO</span> DIGITIFY
                        </h1>
                        <p>
                            GoDigitify is considered to be one of the best digital marketing
                            agency in the whole nation. Providing a wide variety of services in a
                            unique and state-of-the-art way, we fulfil our client’s need in the
                            best way possible. The company has worked for 30+ brands and has
                            created a unique space for themselves in the market
                        </p>
                        <button id="btn-2">View More</button>
                    </div>
                    <div>
                        <img src={image3} alt="Go Digitify" />
                    </div>
                </div>
                <div className="container">
                    <div>
                        <img src={image4} alt="Click Masters" />
                    </div>
                    <div className="boxi">
                        <h1>
                            <span id="color-click">CLICK</span>MASTERS
                        </h1>
                        <p>
                            TechLearns is an educational platform which is available to everyone,
                            everywhere. We wish to uplift the educational standards of not only
                            our city or country but globally. Join us in this noble to cause to
                            make education reach to those in need of it.
                        </p>
                        <button id="btn-3">View More</button>
                    </div>
                </div>
                <div className="container">
                    <div className="boxi">
                        <h1>
                            <span id="color-code">CODE</span>CRUSADE
                        </h1>
                        <p>
                            The uniques batch organized logic building for first year students of
                            B Tech CSE. In this students not only learned about programming
                            language but also interacted with seniors. The program was all about
                            logic building for C++ language. More than 150+ students enrolled in
                            it and we had great review from their side.
                        </p>
                        <button id="btn-4">View More</button>
                    </div>
                    <div>
                        <img src={image1} alt="Code Crusades" />
                    </div>
                </div>
                <div className="container">
                    <div>
                        <img src={image7} alt="Success Mantra" />
                    </div>
                    <div className="boxi">
                        <h1>
                            <span id="color-mantra">SUCCESS</span>MANTRA
                        </h1>
                        <p>
                            Success Mantra is an event where successful entrepreneurs are invited
                            to speak in front of college students and share their experiences,
                            insights, and strategies for success. The aim of the event is to
                            motivate and inspire students to pursue entrepreneurship and become
                            successful business leaders in the future. They also share their
                            personal stories of challenges, failures, and triumphs, which helps
                            the students to understand the real-world complexities of
                            entrepreneurship.
                        </p>
                        <button id="btn-5">View More</button>
                    </div>
                </div>
                <div className="container">
                    <div className="boxi">
                        <h1 id="text-4b">
                            <span id="color-google">GOOGLE </span>DEVELOPER GROUP
                        </h1>
                        <p>
                            GDG I/O Extended in our campus is a testament to our commitment to
                            promoting technology education and fostering innovation. By hosting
                            this event, we aim to inspire and empower individuals with the
                            knowledge and resources needed to thrive in the digital age. Whether
                            you are a student, a developer, or simply passionate about technology,
                            GDG IO Extended offers a unique platform to engage, learn, and grow in
                            a vibrant tech community.
                        </p>
                        <button id="btn-6">View More</button>
                    </div>
                    <div>
                        <img src={image5} alt="Google Developer Group" />
                    </div>
                </div>
                <div className="container">
                    <div>
                        <img src={image6} alt="ICTA" />
                    </div>
                    <div className="boxi">
                        <h1>
                            <span id="color-icta">ICTA</span> 2023
                        </h1>
                        <p>
                            Aims at Bringing together the Researcher, scientists, engineers and
                            scholars in the area of Engineering and Technology. ICTA provide a
                            National Forum for the Dissemination of original research results, new
                            ideas and practical development experiences which concentrates on both
                            theory and practices.
                        </p>
                        <button id="btn-7">View More</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Projects