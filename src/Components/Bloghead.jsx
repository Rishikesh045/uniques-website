import React from 'react';
import gg from '../Assets/ourblog.gif';

const Bloghead = () => {
    return (
        <div className="container" style={{ paddingBottom: "4%" }}>
            <div className="row">
                <div className='col-lg-12'>
                    <img src={gg} alt="About Header" width="85%" />
                </div>
            </div>
        </div>
    );
};

export default Bloghead;
