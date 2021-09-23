import { FETCH_ALL, FETCH_ONE_POST, CREATE, DELETE, UPDATE } from './constants';
import * as api from '../../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPosts();

        if (data.length) {
            dispatch({ type: FETCH_ALL, payload: data });
        } else {
            dispatch({ type: FETCH_ALL, payload: "No Posts" });
        }
    } catch (error) {
        console.log(error);
    }
};

export const getPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.getPost(id);

        dispatch({ type: FETCH_ONE_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post, history) => async (dispatch) => {
    try {
        const { data } = api.createPost(post);

        dispatch({ type: CREATE, payload: data });

        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: UPDATE, payload: data });
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}