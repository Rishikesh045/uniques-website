import React from 'react';
import ef from '../Assets/project-head.jpg';

const Projecthead = () => {
    return (
        <div className="container-fluid" style={{ paddingBottom: "0%" }}>
            <div className="row">
                <div className='col-lg-12'>
                    <img src={ef} alt="About Header" width="100%" />
                </div>
            </div>
        </div>
    );
};

export default Projecthead;
