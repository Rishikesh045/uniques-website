import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddBlog = ({ onAddBlog }) => {
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        content: '',
        image: '',
        author: '',
        date: '',
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make the POST request using Axios
            const response = await axios.post('http://localhost:8000/server/blog', formData);

            // Assuming the backend returns the created blog in the response data,
            // you can use onAddBlog to update your UI with the new blog.
            onAddBlog(response.data);

            // Clear the form fields after successful post
            setFormData({
                title: '',
                desc: '',
                content: '',
                image: '',
                author: '',
                date: '',
            });
        } catch (error) {
            console.error('Error during blog creation:', error);
            // Handle the error scenario here, for example, show an error message to the user.
        }
        navigate('/blogs')
    };

    return (
        <div className="container my-5 py-2">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="desc"
                        name="desc"
                        value={formData.desc}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">
                        Content
                    </label>
                    <textarea
                        className="form-control"
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                        Image URL
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">
                        Author
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                        Date
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Blog
                </button>
            </form>
        </div>
    );
};

export default AddBlog;