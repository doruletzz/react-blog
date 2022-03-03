import React from 'react';


import {Card} from 'react-bootstrap';

const BlogPostCard = ({title, summary, date, time}) => {
  return (
    <Card>
      
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{date.toString()} - {time} min</Card.Subtitle>
            <Card.Text>{summary}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default BlogPostCard;