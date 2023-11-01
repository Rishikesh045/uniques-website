import React from 'react';
import "../Components/Projects.css"
import img1 from '../Images/4-2.png'
import img2 from '../Images/3-1-1024x1024.png'
import img3 from '../Images/5-1.png'
import img4 from '../Images/1-1-1024x1024.png'
import img5 from '../Images/success-mantra.png'
import img6 from '../Images/8-3-1024x1024.png'
import img7 from '../Images/5-5.png'
function TUSection() {

    return (
        <div>
            <div className='main-section'>
                <div className='box-container'>
                    <div className='column'>
                        <img src={img1} />
                    </div>
                    <div className='column content'>
                        <h2 className='box-headd'><span style={{ color: '#ffa601' }}>TECH</span>LEARNS</h2>
                        <p>TechLearns is an educational platform which is available to everyone, everywhere. We wish to
                            uplift the educational
                            standards of not only our city or country but globally. Join us in this noble to cause to make
                            education reach to those
                            in need of it.</p>
                        <button className='tl tap'><a href='https://techlearnsacademy.com/' className='vm'>View More</a></button>
                    </div>
                </div>
                <div className='spacerh'></div>
                <div className='box-container r2'>
                    <div className='column content'>
                        <h2 className='box-headd'><span style={{ color: '#f8cf52' }}>GO</span>DIGITIFY</h2>
                        <p >GoDigitify is considered to be one of the best digital marketing agency in the whole nation. Providing a wide variety of services in a unique and state-of-the-art way, we fulfil our client’s need in the best way possible. The company has worked for 30+ brands and has created a unique space for themselves in the market</p>
                        <button className='gd tap'><a href='#' className='vm'>View More</a></button>
                    </div>
                    <div className='column image'>
                        <img src={img2} />
                    </div>
                </div>
                <div className='spacerh'></div>
                <div className='box-container'>
                    <div className='column'>
                        <img src={img3} />
                    </div>
                    <div className='column content'>
                        <h2 className='box-headd'><span style={{ color: '#9e346c' }}>CLICK</span>MASTER</h2>
                        <p>At ClickMaster, we understand the importance of preserving precious memories. That's why we've curated a team of skilled and experienced photographers ready to cater to your event photography needs. Whether it's a wedding, birthday, corporate event, or any other special occasion, our platform allows you to effortlessly book a talented cameraman online, ensuring your moments are captured beautifully and professionally.</p>
                        <button className='cm tap'><a href='#' className='vm'>View More</a></button>
                    </div>
                </div>
                <div className='spacerh'></div>
                <div className='box-container r2'>
                    <div className='column content'>
                        <h2 className='box-headd'><span style={{ color: '#bd0505' }}>CODE</span>CRUSADE</h2>
                        <p >The uniques batch organized logic building for first year students of B Tech CSE. In this
                            students not only learned
                            about programming language but also interacted with seniors. The program was all about logic
                            building for C++ language.
                            More than 150+ students enrolled in it and we had great review from their side.</p>
                        <button className='cc tap'><a href='#' className='vm'>View More</a></button>
                    </div>
                    <div className='column image'>
                        <img src={img4} />
                    </div>
                </div>
                <div className='spacerh'></div>
                <div className='box-container'>
                    <div className='column'>
                        <img src={img5} />
                    </div>
                    <div className='column content'>
                        <h2 className='box-headd'><span style={{ color: '#d03036' }}>SUCCESS</span>MANTRA</h2>
                        <p>Success Mantra is an event where successful entrepreneurs are invited to speak in front of
                            college students and share
                            their experiences, insights, and strategies for success. The aim of the event is to motivate and
                            inspire students to
                            pursue entrepreneurship and become successful business leaders in the future. They also share
                            their personal stories of
                            challenges, failures, and triumphs, which helps the students to understand the real-world
                            complexities of
                            entrepreneurship.</p>
                        <button className='sm tap'><a href='icta' className='vm'>View More</a></button>
                    </div>
                </div>
                <div className='spacerh'></div>
                <div className='box-container r2'>
                    <div className='column content'>
                        <h2 className='box-headd'><span style={{ color: '#545148' }}>GOOGLE</span> DEVELOPER GROUP</h2>
                        <p >GDG I/O Extended in our campus is a testament to our commitment to promoting technology education and fostering innovation. By hosting this event, we aim to inspire and empower individuals with the knowledge and resources needed to thrive in the digital age. Whether you are a student, a developer, or simply passionate about technology, GDG IO Extended offers a unique platform to engage, learn, and grow in a vibrant tech community.</p>
                        <button className='gdg tap'><a href='#' className='vm'>View More</a></button>
                    </div>
                    <div className='column image'>
                        <img src={img6} />
                    </div>
                </div>
                <div className='spacerh'></div>
                <div className='box-container'>
                    <div className='column'>
                        <img src={img7} />
                    </div>
                    <div className='column content'>
                        <h2 className='box-headd'><span style={{ color: '#f68c33' }}>ICTA</span> 2023</h2>
                        <p>Aims at Bringing together the Researcher, scientists, engineers and scholars in the area of
                            Engineering and Technology.
                            ICTA provide a National Forum for the Dissemination of original research results, new ideas and
                            practical development
                            experiences which concentrates on both theory and practices.</p>
                        <button className='ic tap'><a href='#' className='vm'>View More</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TUSection;