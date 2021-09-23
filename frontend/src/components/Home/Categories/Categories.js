import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import CollapseItem from '../../../assets/images/CollapseItem';

import './Categories.css';

const Categories = () => {

    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    return (
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/artworks">
                    Art Works
                </Link>
            </li>
            <li>
                <Link to="/artists">
                    Artists
                </Link>
            </li>
            <li>
                <Link to="/articles">
                    Articles
                </Link>
            </li>
            <li>
                <Link to="/channels">
                    Channels
                </Link>
            </li>
            {user &&
                <>
                    <li className="loggedInUserActions">
                        <Link to="/createpost">
                            Add Post
                        </Link>
                    </li>
                    <li className="loggedInUserActions">
                        <Link to="/channels">
                            My Posts
                        </Link>
                    </li>
                </>
            }
        </ul>
    )
}

export default Categories
