import React from 'react'
import './footerstyle.css'
import dark from '../Assets/logo.png'

const Footer = () => {
    return (
        <div>
            <section className='footer-section'>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='py-4 footer-section2'>
                                <img src={dark} alt="" srcset="" width="200px" className='py-2 my-2' />
                                <p className='footer-desc py-2'>
                                    TheUniques is an educational platform which is available to everyone, everywhere. We wish to uplift the educational standards of not only our city or country but globally. Join us in this noble to cause to make education reach to those in need of it.
                                </p>
                                <hr className='divider' />
                                <div>
                                    <p><strong>Reach Out To Us: </strong></p>
                                    <p>Get your questions answered about learning with Unacademy</p>
                                    <p><i className='fa fa-phone'></i><strong>+91 9999 888 777</strong></p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="py-4">
                                <h3 className=' ccc py-2'>Contact</h3>
                                <p><i className='fa fa-envelope'></i> officialtheuniques@gmail.com</p>
                                <p><i className='fa fa-location-arrow'></i>  Corporate Office: 709 C Tower - 7 Trishla City Zirakpur 140603, Chandigarh</p>
                                <h3 className='ccc py-2 my-2'>Social</h3>
                                <p><i className='fa fa-instagram'></i> - Instagram</p>
                                <p><i className='fa fa-facebook'></i> - Facebook</p>
                                <p><i className='fa fa-linkedin'></i> - LinkedIn</p>
                            </div></div>

                    </div>
                </div>
                <div className="container py-2">
                    <center>
                        <div>
                            <hr />
                            © 2023 Copyright: TheUniques.in
                        </div>
                    </center>
                </div>
            </section>
        </div>
    )
}

export default Footer