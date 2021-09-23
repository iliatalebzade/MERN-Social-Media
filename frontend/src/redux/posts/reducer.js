import { FETCH_ALL, FETCH_ONE_POST, CREATE, UPDATE } from './constants';

const initialState = {
    posts: [],
    postItem: {},
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return { ...state, posts: action.payload }
        case FETCH_ONE_POST:
            return { ...state, postItem: action.payload }
        case CREATE:
            return { ...state, posts: [ ...state.posts, action.payload ] }
        case UPDATE:
            console.log("REDUCER STARTED")
            const updatedPosts = {
                ...state,
                posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post),
                postItem: action.payload
            }
            console.log("THE CREATED OBJECT: ", updatedPosts)
            return updatedPosts
        default:
            return state;
    }
};

export default reducer;