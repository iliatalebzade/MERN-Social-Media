// tools and utils
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../../redux/posts/actions';
import { useLocation } from "react-router-dom";

// components
import ArtItem from '../../ArtItem/ArtItem';

// assets
import bannerUrl from '../../../../assets/images/banner.jpg';

// styling
import "./HomeContent.css";


const HomeContent = () => {
    const postsState = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const location = useLocation();
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        dispatch(getPosts());
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [dispatch, location, postsState])



    return (
        <>
            {/* BannersPart ======================================== */}
            <div className="bannerspart__banner">
                <img src={bannerUrl} alt="banner" />

                <div className="overlay">
                    <h2>Your Creativity is the only Limit when it comes to <span>ART</span></h2>
                </div>
            </div>
            <div className="exploreartslist">
            <h2>Explore</h2>
                {
                    postsState.posts === 'No Posts'
                    ? (
                        <>
                            <h3>No avalible Posts at the moment</h3>
                            <div className="homearts__np">
                                <button href={user ? '/createpost' : 'signin'} variant="contained" color="primary">{user ? 'Add Post' : 'Log In'}</button>
                                <h4>{user ? 'try adding one so we can show it to everyone' : 'Sign In to share your Artworks with everyone'}</h4>
                            </div>
                        </>
                    ) : postsState.posts.length > 0
                    ? (
                        <div className="itemsContainer">
                            <div className="inner__itemsContainer">
                                {postsState.posts.map((item, index) => (
                                    <>
                                        <ArtItem item={item} key={index} />
                                    </>
                                ))
                                }
                            </div>
                        </div>
                    )
                    : (
                        <div className="itemsContainer">
                            <ArtItem />
                            <ArtItem />
                            <ArtItem />
                            <ArtItem />
                            <ArtItem />
                            <ArtItem />
                            <ArtItem />
                            <ArtItem />
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default HomeContent
