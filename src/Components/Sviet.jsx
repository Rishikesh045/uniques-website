import React from "react";
import uzone from "../Assets/uzone.png";

const Uzone = () => {
    return (
        <div>
            <section id="yap" className="section_home-yap">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-large yap" style={{ paddingBottom: "0rem" }}>
                            <div className="w-layout-grid layout1_component">
                                <div className="layout1_image-wrapper">
                                    <div className="layout1_image-ratio _1-1">
                                        <img
                                            src={uzone}
                                            loading="lazy"
                                            sizes="(max-width: 479px) 100vw, (max-width: 991px) 86vw, 38vw"
                                            alt="Yap"
                                            className="layout1_image" style={{ width: "79%", height: "83%" }}
                                        />
                                    </div>
                                </div>
                                <div className="layout1_content">
                                    <div className="layout1_title-wrapper">
                                        <div className="heading-style-h3">About Sviet</div>
                                        <h6 className="heading-style-h6">Great initiative by Swami Vivekananda Institute of Engineering And Technology!</h6>
                                    </div>
                                    <p className="text-size-medium">
                                        SVGOI gives you the right direction towards a successful career track. SVGOI is working hard to provide remarkable academics and extra curriculum activities for their students.The initiative of creating “The Uniques” batch by SVGOI is to make their students industry ready and work on live projects by 3rd semester. Investigate and respond to an authentic & complex challenges and go beyond learning with project based learning while experiencing enriching experiences.
                                    </p>
                                    <div className="button-group">
                                        {/* Learn more buttons */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Uzone;
