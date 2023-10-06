import React from 'react'
import '../Components/teams.css'

export const Teams = () => {
    return (
        <>
            <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Team</h2>
                        <p>
                            Teamwork is at the heart of our success. We firmly believe that when
                            individuals come together, unified by a common goal and a shared
                            vision, remarkable things can be achieved. Each member of our team
                            brings unique skills, perspectives, and strengths, and it is through
                            collaboration and cooperation that we are able to reach new heights.
                            We value open communication, trust, and mutual respect, knowing that
                            together we can overcome challenges, innovate, and deliver exceptional
                            results. Our commitment to teamwork fuels our passion and drives us
                            towards excellence in everything we do.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
                            <div
                                id="carouselExampleRide1"
                                className="carousel slide"
                                data-bs-ride="true"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="member d-flex align-items-start">
                                            <div className="pic">
                                                <img
                                                    src="https://theuniques.in/wp-content/uploads/2023/05/Ronit-1-1024x1024.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="member-info">
                                                <h4>Ronit JaiPrakash</h4>
                                                <span>B.Tech CSE 3rd Year</span>
                                                <p>
                                                    Full Stack Web Developer
                                                </p>
                                                <div className="social">
                                                    <a href="">
                                                        {" "}
                                                        <i className="fa fa-linkedin" />{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="member d-flex align-items-start">
                                            <div className="pic">
                                                <img
                                                    src="https://theuniques.in/wp-content/uploads/2023/05/Mantasha-1-1024x1024.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="member-info">
                                                <h4>Mantash Tabassum</h4>
                                                <span>B.Tech CSE 3rd Year</span>
                                                <p>
                                                    Graphic Designer <br /> Web Developer
                                                </p>
                                                <div className="social">
                                                    <a href="">
                                                        {" "}
                                                        <i className="fa fa-linkedin" />{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="member d-flex align-items-start">
                                            <div className="pic">
                                                <img
                                                    src="https://theuniques.in/wp-content/uploads/2023/05/priyanshi-1-1024x1024.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="member-info">
                                                <h4>Priyanshi Sharma</h4>
                                                <span>B.Tech CSE 3rd Year</span>
                                                <p>
                                                    Full Stack Web Developer
                                                </p>
                                                <div className="social">
                                                    <a href="">
                                                        {" "}
                                                        <i className="fa fa-linkedin" />{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleRide1"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleRide1"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 mt-4 mt-lg-0"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <div
                                id="carouselExampleRide2"
                                className="carousel slide"
                                data-bs-ride="true"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="member d-flex align-items-start">
                                            <div className="pic">
                                                <img
                                                    src="https://theuniques.in/wp-content/uploads/2023/05/Aryan-2-1024x1024.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="member-info">
                                                <h4>Aryan Kamboj</h4>
                                                <span>B.Tech CSE 2nd Year</span>
                                                <p>
                                                    Web Developer <br /> Graphic Designer
                                                </p>
                                                <div className="social">
                                                    <a href="">
                                                        {" "}
                                                        <i className="fa fa-linkedin" />{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="member d-flex align-items-start">
                                            <div className="pic">
                                                <img
                                                    src="https://theuniques.in/wp-content/uploads/2023/05/Nishant-1-1024x1024.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="member-info">
                                                <h4>Nishant Singh</h4>
                                                <span>B.Tech CSE 2nd Year</span>
                                                <p>
                                                    Web Developer <br /> Motion Graphics
                                                </p>
                                                <div className="social">
                                                    <a href="">
                                                        {" "}
                                                        <i className="fa fa-linkedin" />{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="member d-flex align-items-start">
                                            <div className="pic">
                                                <img
                                                    src="https://theuniques.in/wp-content/uploads/2023/05/Krishna-2-1024x1024.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="member-info">
                                                <h4>Krishna Bansal</h4>
                                                <span>B.Tech CSE 2nd Year</span>
                                                <p>
                                                    Web Developer <br /> Graphic Designer
                                                </p>
                                                <div className="social">
                                                    <a href="">
                                                        {" "}
                                                        <i className="fa fa-linkedin" />{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleRide2"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleRide2"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 mt-4"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                    ></div>
                    <div
                        className="col-lg-6 mt-4"
                        data-aos="zoom-in"
                        data-aos-delay={400}
                    ></div>
                </div>
            </section>
            {/* End Team Section */}
        </>
    )
}
export default Teams;