import React from 'react'
import TU from '../Assets/T.mp4'
const HomeHeader = () => {
    return (
        <div className="container">
            <div className="row">
                <div className='col-lg-12'>
                    <video autoPlay loop muted={true} width="100%">
                        <source src={TU} type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader