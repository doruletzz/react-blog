import BlogPost from "./BlogPost";
import { connect } from 'react-redux';
import { find } from 'lodash';
import { fetchPost } from '../redux/actions';
import { useParams } from "react-router";

interface OwnProps {
    slug: string
}

const mapStateToProps = (state , ownProps : OwnProps) => {
    const { slug } = ownProps;
    const post = find(state.posts.items, { slug });

    return {
        post, slug
    };
};

const mapDispatchToProps = dispatch => ({
    fetchPost: (slug : string) => dispatch(fetchPost(slug)),
});


const wrapper = connect(mapStateToProps, mapDispatchToProps);
const BlogPostWrapper = wrapper(BlogPost);
const BlogPostContainer = () => {
    const { slug } = useParams();
    return (<BlogPostWrapper slug={slug} />);
};

export default BlogPostContainer;