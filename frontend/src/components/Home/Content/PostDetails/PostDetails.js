import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost, likePost } from '../../../../redux/posts/actions';
import { Button } from '@material-ui/core'

import "./PostDetails.css" 
import LikeBtn from '../../ArtItem/LikeBtn';

const PostDetails = () => {
    
    const state = useSelector((state) => state.posts.postItem);
    const dispatch = useDispatch();
    const { id } = useParams();

    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        dispatch(getPost(id));
    }, [id])

    return (
        <div className="postDetails">
            {!!Object.entries(state).length ? (
                <>
                    <img className="postImage" src={state.artWork} alt="artworkImage" />
                    <div>
                        <h3>By: {state.name}</h3>
                        <p>{state.caption}</p>
                        <div className="tagsDiv">
                            {state.tags.map((item, index) => (
                                <div className="tagItem">
                                    <span><span>#</span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="buttonGroupDiv">
                        {user?.token &&
                                <LikeBtn state={state}/>
                        }
                        </div>
                    </div>
                    <a href={state.artWork} download>Download</a>
                </>
            ) : (
                <h4></h4>
            )}
        </div>
    )
}

export default PostDetails
