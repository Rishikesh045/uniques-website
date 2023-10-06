import React from 'react';
import ab from '../Assets/contactus.gif';

const Contactus = () => {
    return (
        <div className="container" style={{ paddingBottom: "4%" }}>
            <div className="row">
                <div className='col-lg-12'>
                    <img src={ab} alt="About Header" width="85%" />
                </div>
            </div>
        </div>
    );
};

export default Contactus;
