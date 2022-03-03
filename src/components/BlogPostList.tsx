import React from 'react'
import { Row, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Waypoint } from 'react-waypoint';

import BlogPostCard from './BlogPostCard';


const BlogPostList = ({ fetchPosts, isLoading, posts }) => {
    return (
        <>
            <Container fluid className="pt-2">
                {posts.map(({ title, summary, date, slug }, idx) => (
                    <Row key={idx} className="mt-4">
                        <Link to={`/blog/${slug}`}>
                        <BlogPostCard title={title} summary={summary} date={date} time="1 min" />
                        </Link>
                    </Row>
                ))}

                {!isLoading && <Waypoint onEnter={fetchPosts} />}

                <Row className="text-center pt-2">
                    <div className="text-center">
                        <Spinner animation="border" />
                    </div>
                </Row>

            </Container>

        </>
    )
}

export default BlogPostList;

