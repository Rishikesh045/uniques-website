import React from "react";
import '../Components/founder.css'
import image from '../Assets/Ankursir.jpg'
import image1 from "../Assets/vishalsir.jpg";

const Founders = () => {
    return (
        <div>
            <>
                <header className="bg-light py-5">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center justify-content-center">
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <div className="my-5 text-center text-xl-start">
                                    <h1 className="display-5 fw-bolder text-black mb-2">
                                        Mr. Ankur Gill
                                    </h1>
                                    <p className="lead fw-normal text-black-50 mb-3">
                                        As a mentor I need three things from your side Discipline,
                                        Honesty &amp; Dedications. No matter how big or small your
                                        daily actions, activities and encounters this all will
                                        ultimately determine your performance. If you want to move
                                        to a new level in your life, you must break through your
                                        comfort zone and practice doing things that are unbearable.
                                    </p>
                                    <strong>
                                        {" "}
                                        <p className="text-black text-uppercase">
                                            Director of Operations
                                        </p>
                                    </strong>
                                </div>
                            </div>
                            <div className="col-xl-4 col-xxl-6 d-none d-xl-block text-center">
                                <img
                                    className="img-fluid rounded-3 my-5"
                                    src={image}
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                </header>
                <header className="bg-light py-5">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center justify-content-center">
                            <div className="col-xl-4 col-xxl-6 d-none d-xl-block text-center">
                                <img
                                    className="img-fluid rounded-3 my-5"
                                    src={image1}
                                    alt="..."
                                />
                            </div>
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <div className="my-5 text-center text-xl-start">
                                    <h1 className="display-5 fw-bolder text-black mb-2">
                                        Mr. Vishal Garg
                                    </h1>
                                    <p className="lead fw-normal text-black-50 mb-4">
                                        Success starts from within. Whether you want to have a
                                        healthy body, booming business or flourishing relationships,
                                        the first step is to rewire your brain and cultivate your
                                        peak mindset.
                                    </p>
                                    <strong>
                                        {" "}
                                        <p className="text-black text-uppercase">
                                            Director Secretarial
                                        </p>
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        </div>
    );
};

export default Founders;