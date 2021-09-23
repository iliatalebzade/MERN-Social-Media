import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../../redux/posts/actions';

import background from '../../../../assets/images/formbackground.jpg';
import './CreatePost.css';

const CreatePost = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    
    const [artworkData, setArtworkData] = useState({
        title: '',
        caption: '',
        tags: '',
        artWork: ''
    })

    const user = JSON.parse(localStorage.getItem('profile'));

    const clearForm = () => {
        setArtworkData({
            title: '',
            caption: '',
            tags: '',
            artWork: ''
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const finalData = {
            ...artworkData,
            tags: artworkData.tags.split(" ")
        }

        if (artworkData.title === '' || artworkData.caption === '' || artworkData.artWork === '') {
            alert("please fill all the fileds before posting the artwork");
        } else {
            dispatch(createPost({ ...finalData, name: user?.result?.name }, history));
            clearForm();
        }

    }

    
    return (
        <div className="createpost">
            <img className="createpost__background" src={background} alt="backgroundImg" />

            {!user?.result?.name ? (
                <div className="createpost__form--div">
                    <h3>Please Sign In or Create an Account to Upload and like Artworks</h3>
                </div>
            ) : (
                <>
                    <div onSubmit={submitHandler} className="createpost__form--div">
                        <h3>Upload An Artwork</h3>
                        <form className="createpost__form">
                            <input value={artworkData.title} name="title" onChange={(e) => setArtworkData((prev) => ({ ...prev, [e.target.name]: e.target.value }))} type="text" placeholder="Title"/>
                            <input value={artworkData.caption} name="caption" onChange={(e) => setArtworkData((prev) => ({ ...prev, [e.target.name]: e.target.value }))} type="text" placeholder="Caption"/>
                            <input value={artworkData.tags} name="tags" onChange={(e) => setArtworkData((prev) => ({ ...prev, [e.target.name]: e.target.value }))} type="text" placeholder="Tags"/>
                            <label className="custom-artwork-upload">
                                <FileBase value={artworkData.artWork} type="file" multiple={false} onDone={({ base64 }) => setArtworkData((prev) => ({ ...prev, artWork: base64 }))} />
                                <span>{artworkData.artWork !== '' ? 'Change Selected File' : 'Choose Artwork'}</span>
                            </label>
                            <input type="Submit" placeholder="Submit"/>
                        </form>
                    </div>
                </>
            )}
        </div>
    )
}

export default CreatePost
