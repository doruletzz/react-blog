import BlogPost from "./BlogPost";
import { connect } from 'react-redux';
import { find } from 'lodash';

const mapStateToProps = (state, { id, slug }) => {
    const post = find(state.posts.items, { id });
    return {
        id, post, slug
    };
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPost(id, slug)),
});


const wrapper = connect(mapStateToProps, mapDispatchToProps);
const BlogPostListContainer = wrapper(BlogPost);

export default BlogPostListContainer;