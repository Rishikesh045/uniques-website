import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = ({ blogs }) => {
    return (
        <div className="row">
            {blogs.map((blog) => (
                <div className="col-md-4" key={blog.title}>
                    <div className="card custom-card">
                        <img src={blog.imgg} className="card-img-top" alt="Blog Image" />
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text text-black">{blog.desc || blog.para}</p>
                            <Link to="/" className="btn btn-primary">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SingleBlog;
