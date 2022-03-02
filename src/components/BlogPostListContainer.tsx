import React from 'react';

import { connect } from 'react-redux';
import {fetchPosts} from '../redux/actions';
import BlogPostList from './BlogPostList';


const mapStateToProps = state => {
    const { posts: { isFetching, items } } = state;
    return {
      isLoading: isFetching,
      posts: items,
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
  });


const wrapper = connect(mapStateToProps, mapDispatchToProps);
const BlogPostListContainer = wrapper(BlogPostList);

export default BlogPostListContainer;
