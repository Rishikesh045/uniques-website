import React from "react";
import image1 from "../Assets/uzone.png"

const Company = () => {
    return (
        <div>

            <div className="padding-global" style={{ backgroundColor: "#f9fafa" }}>
                <div className="container-large">
                    <div className="padding-section-large yap" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
                        <div className="w-layout-grid layout1_component">
                            <div className="layout1_content">
                                <div className="layout1_title-wrapper">
                                    <div className="heading-style-h6">
                                        Creating a Difference
                                    </div>
                                    <h2 className="heading-style-h2 text-uppercase text-danger">
                                        From College to Corporate
                                    </h2>
                                </div>
                                <p className="text-size-medium">
                                    Form a habit to think out of the box, try to find an easier
                                    and more competitive way of performing a task. If you can
                                    provide a company with a method to save on expenditure or
                                    increase their profit, you have better chances of getting
                                    hired and finding your way up the ladder. In this
                                    competitive world, the secret of survival and growth of any
                                    company is to find and implement efficient ways of doing
                                    things.
                                </p>
                                <div className="button-group">
                                    <a
                                        href="#goal"
                                        className="button is-secondary hide-mobile w-button"
                                    >
                                        Learn more
                                    </a>
                                    <a
                                        href="#goal-mobile"
                                        className="button is-secondary hide-desktop w-button"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                            <div className="layout1_image-wrapper" style={{ width: "85%", borderRadius: "20rem" }}>
                                <div
                                    id="carouselExampleAutoplaying"
                                    className="carousel slide"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img
                                                src={image1}
                                                className="d-block w-100"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://theuniques.in/wp-content/uploads/2023/05/6-2.png"
                                                className="d-block w-100"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://theuniques.in/wp-content/uploads/2023/05/3-3.png"
                                                className="d-block w-100"
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleAutoplaying"
                                        data-bs-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleAutoplaying"
                                        data-bs-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Company;