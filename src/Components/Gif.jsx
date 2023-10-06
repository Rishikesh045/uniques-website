import React from 'react'
import video from '../Assets/hello.gif';

export const Gif = () => {
    return (
        <div className='container-fluid'>
            <img src={video}></img>
        </div>
    );
}
export default Gif;
