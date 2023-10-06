import React from "react";
import "../Components/Step.css";
import image from "../Assets/features-2.png";
const Step = () => {
    return (
        <div>
            <section id="features" className="features">
                <div className="container">
                    {/* Feature Tabs */}
                    <div className="row feture-tabs">
                        <div className="col-lg-6">
                            <h3>
                                Steps to Get in
                            </h3>
                            {/* Tabs */}
                            <ul className="nav nav-pills mb-3">
                                <li>
                                    <a
                                        className="nav-link active"
                                        data-bs-toggle="pill"
                                        href="#tab1"
                                    >
                                        Step One
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" data-bs-toggle="pill" href="#tab2">
                                        Step Two
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" data-bs-toggle="pill" href="#tab3">
                                        Step Three
                                    </a>
                                </li>
                            </ul>
                            {/* End Tabs */}
                            {/* Tab Content */}
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab1">
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2" />
                                        <h4>
                                            Pen-Paper Test
                                        </h4>
                                    </div>
                                    <p>

                                        In the first phase of evaluation, we will delve into your proficiency across academic disciplines such as physics, mathematics, and chemistry. Additionally, we will administer an aptitude test to gauge your problem-solving and analytical abilities.
                                    </p>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2" />

                                    </div>

                                </div>
                                {/* End Tab 1 Content */}
                                <div className="tab-pane fade show" id="tab2">
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2" />
                                        <h4>

                                        </h4>
                                    </div>
                                    <p>

                                    </p>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2" />
                                        <h4>Technical Test</h4>
                                    </div>
                                    <p>
                                        The second stage of assessment involves a technical examination. This round will encompass a comprehensive evaluation of your familiarity with fundamental computer concepts and programming languages such as C and C++. You will be expected to showcase your understanding of computer basics, as well as your proficiency in these programming languages. This test will provide us with insights into your technical aptitude and your ability to work with foundational tools in the field of computer science.
                                    </p>
                                </div>
                                {/* End Tab 2 Content */}
                                <div className="tab-pane fade show" id="tab3">
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2" />
                                        <h4>
                                            Interview
                                        </h4>
                                    </div>
                                    <p>

                                        During the third phase, candidates will have the opportunity to participate in an interview conducted by our experienced mentors. This interview aims to provide a platform for students to engage in insightful discussions, showcase their knowledge and skills, and interact with mentors who possess valuable expertise in their respective fields. The interview process not only allows candidates to demonstrate their potential but also offers a chance for them to gain valuable insights and guidance from our accomplished mentors.
                                    </p>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-check2" />
                                        <h4></h4>
                                    </div>

                                </div>
                                {/* End Tab 3 Content */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={image} className="img-fluid" alt="" />
                        </div>
                    </div>
                    {/* End Feature Tabs */}
                </div>
            </section>
        </div>
    );
};

export default Step;