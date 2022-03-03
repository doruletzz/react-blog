import React, { useEffect } from 'react';


const BlogPost = ({ fetchPost, post, slug }) => {
    useEffect(() => {
        if (!post)
            fetchPost(slug);
    }, []);


    return (
        <div>
            <h1>
                {post.title}
            </h1>
            <br />
            <br />
            <p>
                {post.content}
            </p>

        </div>
    )
}

export default BlogPost;