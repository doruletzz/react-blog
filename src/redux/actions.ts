import faker from '@faker-js/faker';

const {
    date: { past },
    lorem: { paragraph, paragraphs, slug, words },
    random: { uuid },
} = faker;

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const FETCH_POSTS = "FETCH_POSTS";


const receivePosts = (count = 1, options = {}) => {

    const posts = Array(count)
        .fill({})
        .map(() => {
            const summary = paragraph();
            return {
                id:uuid().split('-')[0],
                title: words(),
                summary,
                content: `${summary}\n${paragraphs()}`,
                date: past(),
                slug: slug()
            };
        });

    return {
        type: RECEIVE_POSTS,
        posts
    };

}


const POST_COUNT = 10;
/**
 * Fetches 10 posts.
 */
export const fetchPosts = () => {
    return dispatch => {
        // emulate api request
        setTimeout(() => dispatch(receivePosts(POST_COUNT)), 1000);
    };
};

/**
 * Fetches post.
 *
 * @param {String} slug
 */
export const fetchPost = (slug : string) => {
    return dispatch => {
        // emulate api request
        setTimeout(() => dispatch(receivePosts(1, { slug })), 1000);
      };
};

