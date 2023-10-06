import React from 'react'
import "../Components/news.css"

const NewsLetter = () => {
    return (
        <div id='news'>
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center man">
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        </div>
                        <div className="col-lg-6">
                            <form action="" method="post" />
                            <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            <form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter