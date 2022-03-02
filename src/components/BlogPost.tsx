import React, { useEffect } from 'react';


const BlogPost = ({ fetchPost, id, post, slug }) => {

    useEffect({
        if(!post) {
            fetchPost(id, slug);
        }
    }, []);


    return (
        <div>
            BlogPost


        </div>
    )
}

export default BlogPost;