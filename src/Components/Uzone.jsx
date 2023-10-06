import React from "react";
import uzone from "../Assets/uzone.png"

const Uzone = () => {
    return (
        <div>

            <div className="padding-global" style={{ paddingBottom: "2rem", paddingTop: "3rem" }}>
                <div className="container-large">
                    <div className="padding-section-large yap" style={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
                        <div className="w-layout-grid layout1_component">
                            <div className="layout1_content">
                                <div className="layout1_title-wrapper">
                                    <div className="heading-style-h6">
                                        Our Incubation Center
                                    </div>
                                    <h2 className="heading-style-h2">U-ZONE</h2>
                                </div>
                                <p className="text-size-medium">
                                    An incubation center located within a college provides an
                                    environment that fosters entrepreneurship and innovation
                                    among students. It serves as a hub where students can access
                                    training, resources, and mentorship to transform their
                                    innovative ideas into successful ventures. The incubation
                                    center is designed to create a conducive learning
                                    environment that encourages collaboration and teamwork among
                                    students. It features state-of-the-art facilities such as a
                                    workspace, high-speed internet, meeting rooms, and equipment
                                    for prototyping and testing ideas. These resources provide
                                    students with everything they need to develop and refine
                                    their projects. The incubation center offers training
                                    programs that equip students with the skills they need to
                                    succeed in the modern job market. The training programs
                                    cover various aspects of business development, including
                                    market research, business planning, financial management,
                                    and marketing.
                                </p>
                                <div className="button-group">
                                    <a
                                        href="/about"
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
                            <div className="layout1_image-wrapper">
                                <div className="layout1_image-ratio _1-1">
                                    <img
                                        src={uzone}
                                        loading="lazy"
                                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 86vw, 38vw"
                                        alt="Yap"
                                        className="layout1_image"
                                        style={{ width: "85%", height: "90%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Uzone;
