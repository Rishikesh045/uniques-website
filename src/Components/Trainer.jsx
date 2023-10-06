import React from "react";
import image1 from "../Assets/sonali.png";
import image2 from "../Assets/hello.png";

const Trainer = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <section className="section section--situation">
                            <div className="qp situation">
                                <div className="max-container">
                                    <div className="situation__wrapper">
                                        <div className="situation__content">
                                            <figure>
                                                <img
                                                    src="https://quipli.com/wp-content/themes/quipli-v2/assets/img/situation-icon.svg"
                                                    loading="lazy"
                                                    alt="Situation Icon"
                                                    width={36}
                                                    height={36}
                                                />
                                            </figure>
                                            <article>
                                                <h2 className="content__head">Our Trainers</h2>
                                                <p style={{ color: "black" }}>
                                                    She is an exceptional trainer for frontend development
                                                    and graphics designing. With a wealth of experience
                                                    and expertise in these fields, she brings a unique
                                                    blend of technical knowledge and artistic flair to her
                                                    training sessions. As a frontend development trainer,
                                                    she is well-versed in the latest web development
                                                    technologies, including HTML, CSS and JavaScript. She
                                                    possesses a deep understanding of frontend
                                                    architecture, user experience (UX), and responsive
                                                    design principles. Her ability to break down complex
                                                    concepts into simple, digestible lessons makes her an
                                                    effective communicator and mentor for aspiring
                                                    frontend developers. In the realm of graphics
                                                    designing, Mrs. Sonali showcases an impressive
                                                    creative prowess. She has a keen eye for aesthetics
                                                    and a deep understanding of design principles, colour
                                                    theory, typography, and composition. She is proficient
                                                    in industry-standard software such as Adobe Photoshop,
                                                    Illustrator, and InDesign, enabling her to teach
                                                    students the necessary skills to create visually
                                                    stunning and impactful designs.
                                                </p>
                                                <p></p>
                                                <p style={{
                                                    color: "black"
                                                }}>
                                                    <strong>MRS. SONALI KAPOOR</strong>
                                                </p>
                                            </article>
                                        </div>
                                        <div className="situation__img">
                                            <picture className="q-mask">
                                                <source
                                                    srcSet="https://quipli.com/wp-content/themes/quipli-v2/assets/img/home/situation-img.webp"
                                                    type="image/webp"
                                                />
                                                <source
                                                    srcSet="https://quipli.com/wp-content/themes/quipli-v2/assets/img/home/situation-img.jpg"
                                                    type="image/jpg"
                                                />
                                            </picture>
                                            <img
                                                src={image1}
                                                loading="lazy"
                                                alt="Situation Image"
                                                width={396}
                                                height={339}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="carousel-item">
                        <section className="section section--situation">
                            <div className="qp situation">
                                <div className="max-container">
                                    <div className="situation__wrapper">
                                        <div className="situation__content">
                                            <figure>
                                                <img
                                                    src="https://quipli.com/wp-content/themes/quipli-v2/assets/img/situation-icon.svg"
                                                    loading="lazy"
                                                    alt="Situation Icon"
                                                    width={36}
                                                    height={36}
                                                />
                                            </figure>
                                            <article>
                                                <h2 className="content__head">Our Trainers</h2>
                                                <p style={{ color: "black" }}>
                                                    He is a highly skilled professional trainer
                                                    specializing in MERN stack development. With extensive
                                                    experience in the industry, he brings a wealth of
                                                    knowledge and expertise to his classes. Having
                                                    previously worked at leading tech companies such as
                                                    Google and Facebook, Vishwanath has a strong
                                                    background in developing robust and scalable web
                                                    applications. His time at Meta (formerly known as
                                                    Facebook) allowed him to gain insights into
                                                    cutting-edge technologies and industry best practices.
                                                    As a result, he stays up-to-date with the latest
                                                    advancements in MERN stack development, ensuring that
                                                    his students receive the most relevant and valuable
                                                    instruction. His teaching style is engaging and
                                                    hands-on enabling students to grasp complex concepts
                                                    effectively. He provides comprehensive explanations
                                                    practical examples, and real-world case studies to
                                                    enhance the learning experierice. With his industry
                                                    experience, he often shares valuable insights and
                                                    anecdotes giving students a glimpse into the
                                                    challenges and opportunities they may encounter in
                                                    their careers
                                                </p>
                                                <p></p>
                                                <p style={{ color: "black" }}>
                                                    <strong>MR.VISHWANADH RAYAVARAPU</strong>
                                                </p>
                                            </article>
                                        </div>
                                        <div className="situation__img">
                                            <picture className="q-mask">
                                                <source
                                                    srcSet="https://quipli.com/wp-content/themes/quipli-v2/assets/img/home/situation-img.webp"
                                                    type="image/webp"
                                                />
                                                <source
                                                    srcSet="https://quipli.com/wp-content/themes/quipli-v2/assets/img/home/situation-img.jpg"
                                                    type="image/jpg"
                                                />
                                            </picture>
                                            <img
                                                src={image2}
                                                loading="lazy"
                                                alt="Situation Image"
                                                width={396}
                                                height={339}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Trainer;