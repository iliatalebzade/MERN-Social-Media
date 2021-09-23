import React from 'react';
import { useHistory } from 'react-router-dom';

import './ArtItem.css';

const ArtItem = ({ item }) => {

    const history = useHistory();

    const goToItemPage = () => history.push(`post/${item._id}`);

    return (
        <>
            {item? (
                <div onClick={goToItemPage} className="loaded_homearts__artItem">
                    <img src={item.artWork} alt="artwork"/>
                </div>
            ) : (
                <div className="homearts__artItem"></div>
            )}
        </>
    )
}

export default ArtItem;