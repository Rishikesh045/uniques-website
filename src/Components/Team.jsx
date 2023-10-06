import React from 'react'
import image from '../Assets/team-1.jpg'
import '../Components/log.css'


export const Team = () => {
    return (
        <div>

            <section id="team" className="team">

                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                        <h2 className="text-center" style={{ paddingTop: "5%" }}>Our Team</h2>
                        <p className="text-center" style={{ paddingBottom: "3%" }}>Our hard working team</p>
                    </header>

                    <div className="row gy-4">

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="member">
                                <div className="member-img">
                                    <img src={image} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a to="/"><i className="fa fa-twitter"></i></a>
                                        <a to="/"><i className="fa fa-facebook"></i></a>
                                        <a to="/"><i className="fa fa-instagram"></i></a>
                                        <a to="/"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                    <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="member">
                                <div className="member-img">
                                    <img src={image} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a to="/"><i className="fa fa-twitter"></i></a>
                                        <a to="/"><i className="fa fa-facebook"></i></a>
                                        <a to="/"><i className="fa fa-instagram"></i></a>
                                        <a to="/"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                    <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="member">
                                <div className="member-img">
                                    <img src={image} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a to="/"><i className="fa fa-twitter"></i></a>
                                        <a to="/"><i className="fa fa-facebook"></i></a>
                                        <a to="/"><i className="fa fa-instagram"></i></a>
                                        <a to="/"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                    <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={image} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a to="/"><i className="fa fa-twitter"></i></a>
                                        <a to="/"><i className="fa fa-facebook"></i></a>
                                        <a to="/"><i className="fa fa-instagram"></i></a>
                                        <a to="/"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    <p>Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}
export default Team