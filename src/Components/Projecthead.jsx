import React from 'react';
import ef from '../Assets/projectss.gif';

const Projecthead = () => {
    return (
        <div className="container-fluid" style={{ paddingBottom: "4%" }}>
            <div className="row">
                <div className='col-lg-12'>
                    <img src={ef} alt="About Header" width="100%" />
                </div>
            </div>
        </div>
    );
};

export default Projecthead;
