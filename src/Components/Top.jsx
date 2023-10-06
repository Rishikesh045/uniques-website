import React from "react";
import image from "../Assets/sir.png";
import image1 from "../Assets/hello1.png";
import image2 from "../Assets/top.png";
import image3 from "../Assets/top2.png";
import image4 from "../Assets/urmi.png";

const Visit = () => {
    return (
        <div className="container">
            <h3 className="text-center" style={{ textDecoration: "underline", paddingTop: "6%" }}>
                TOP NOTCH PERSONALITY VISIT TO U ZONE
            </h3>
            <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner pt-1">
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <img src={image} className="d-block w-90" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <img src={image1} className="d-block w-90" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-90" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-90" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image4} className="d-block w-90" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Visit;