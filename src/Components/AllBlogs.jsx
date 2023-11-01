import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = ({ title, desc, image }) => {
    return (
        <div className="col-md-4">
            <div className="card custom-card">
                <img src={image} className="card-img-top" alt="Blog Image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-black">{desc}</p>
                    <Link to="/" className="btn btn-primary">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
