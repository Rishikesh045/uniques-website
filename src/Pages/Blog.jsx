import React from 'react'
import AllBlogs from '../Components/AllBlogs'
import Bloghead from '../Components/Bloghead'
import blogdata from '../Components/blogData'

const Blog = () => {
    return (
        <div>
            <Bloghead />
            <AllBlogs blogs={blogdata} />


        </div>
    )
}

export default Blog