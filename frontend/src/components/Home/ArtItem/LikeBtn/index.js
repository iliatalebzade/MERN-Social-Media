import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from 'react-redux';

import likeImg from '../../../../assets/images/like.png'
import unlikeImg from '../../../../assets/images/unlike.png'

import { likePost } from "../../../../redux/posts/actions";



const LikeBtn = ({ state }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  return (
    <Button variant="contained" className="likeBtn" onClick={() => dispatch(likePost(state._id))}>
            {state.likes.find((like) => like === (user?.result?.googleId || user?.result?._id)) ? (
                <img src={likeImg} alt="like image" />
            ) : (
                <img src={unlikeImg} alt="like image" />
            )}
            <span className="num_of_likes">{state.likes.length}</span>
    </Button>
  );
};

export default LikeBtn;
