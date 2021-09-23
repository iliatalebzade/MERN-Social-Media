// tools and utils
import React from 'react';
import { Switch, Route } from "react-router-dom";

// components
import Categories from './Categories/Categories';
import HomeContent from './Content/HomeContent/HomeContent';
import ArtWorks from './Content/ArtWorks/ArtWorks';
import Artists from './Content/Artists/Artists';
import Articles from './Content/Articles/Articles';
import Channels from './Content/Channels/Channels';
import CreatePost from './Content/CreatePost/CreatePost';
import PostDetails from './Content/PostDetails/PostDetails';

// assets

// styling
import './Home.css';
import AppNavbar from '../Navbar/AppNavbar/AppNavbar';

const Home = ({ isNavOpen }) => {
    return (
        <>
            <div className={isNavOpen ? 'openNav' : 'closedNav'}>
                <>  
                    <Categories />
                    <AppNavbar />
                </>
            </div>
            <div className={isNavOpen ? 'openNavHomecontent' : 'closedNavHomecontent'}>
                <div className={isNavOpen ? 'openNavMOBILE' : 'closedNavMOBILE'}>  
                    <Categories />
                    <AppNavbar />
                </div>
                <Switch>
                    <Route exact path="/" component={HomeContent} />
                    <Route exact path="/artworks" component={ArtWorks} />
                    <Route exact path="/artists" component={Artists} />
                    <Route exact path="/articles" component={Articles} />
                    <Route exact path="/channels" component={Channels} />
                    <Route exact path="/createpost" component={CreatePost} />
                    <Route exact path="/post/:id" component={PostDetails} />
                </Switch>
            </div>
        </>
    )
}

export default Home
