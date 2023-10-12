import React from 'react'
import SingleBlog from './SingleBlog'

const AllBlogs = ({ blogs }) => {
    return (
        <div className="container">
            <div className="row">
                <SingleBlog />
                {blogs.map(blog => (<SingleBlog title={blog.title} desc={blog.desc} content={blog.content} image={blog.image} author={blog.author} date={blog.date} />))}
            </div>
        </div>
    )
}
export default AllBlogs