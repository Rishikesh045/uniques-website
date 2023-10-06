import React from 'react'
import image1 from '../Assets/gdsc.png'
import image2 from '../Assets/code.png'

const Programs = () => {
    return (
        <div className='container'>
            <div className="row">
                <h2 className='text-center' style={{ paddingTop: '3%' }}>Upcoming Events</h2>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <img src={image1} alt="" srcset="" width="100%" />
                </div>
                <div className="col-lg-6 d-flex align-items-center ">
                    <div>
                        <div className='row'>
                            <h2>GDSC - SVIET</h2>
                            <p>
                                "WebCraft Essentials: Pioneering Your Digital Odyssey"
                            </p>
                        </div>
                        <div className="row">
                            Welcome to the Google Developers Student Club (GDSC) at SVIET , a dynamic community of aspiring developers and tech enthusiasts. GDSC is an official student-led program supported by Google, aimed at empowering students to learn, share, and collaborate on innovative projects using Google technologies. At GDSC, we believe in the power of technology to transform lives and create positive change. Our club provides a platform for students to explore the world of software development, gain practical skills, and connect with like-minded individuals.
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 d-flex align-items-center">
                    <div>
                        <div className='row'>
                            <h2>Code Crusades 2.0</h2>
                            <p>
                                "Rising Beyond Limits: Mastering MERN for Web Excellence"
                            </p>
                        </div>
                        <div className="row" >

                            Code Crusades 2.0
                            Code Crusades 2.0: Unleash Your Logical Coding Prowess
                            Are you ready to embark on a journey that will not only sharpen your coding skills but also foster meaningful interactions with experienced seniors? Introducing Code Crusades 2.0, an upgraded edition of our highly successful logic-building program for first-year B Tech CSE students. About Code Crusades 2.0: Code Crusades 2.0 is not your typical programming course. It’s a transformative experience designed to equip you with the tools, techniques, and mindset needed to excel in the world of coding and logic building. We understand that mastering a programming language like C++ is just the beginning. True success comes from understanding the art of logic, problem-solving, and effective communication.
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={image2} alt="" srcset="" width="100%" />
                </div>

            </div>
        </div>
    )
}

export default Programs