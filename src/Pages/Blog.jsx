import React from 'react'
import Hero from '../Components/Hero'
import AllBlogs from '../Components/AllBlogs'
import Bloghead from '../Components/Bloghead'


const Blog = ({ blogs }) => {
    return (
        <div>
            <Bloghead />
            <AllBlogs blogs={blogs} />
        </div>
    )
}

export default Blog