import React from 'react';
import TT from '../Assets/abouthead.gif';

const Aboutheader = () => {
    return (
        <div className="container" style={{ paddingBottom: "0%" }}>
            <div className="row">
                <div className='col-lg-12'>
                    <img src={TT} alt="About Header" width="85%" />
                </div>
            </div>
        </div>
    );
};

export default Aboutheader;
