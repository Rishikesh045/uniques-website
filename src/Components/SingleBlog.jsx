import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../Assets/blogsss.jpg'

const SingleBlog = ({ title, desc, image }) => {
    return (

        <div className='col-md-4'>
            <div className="card custom-card">
                <img src={image} className="card-img-top" alt="..." />````
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-black">{desc}</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
