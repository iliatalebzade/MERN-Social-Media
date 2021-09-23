import React from 'react'
import { Link } from "react-router-dom";

// assets
import CollapseItem from '../../../assets/images/CollapseItem';
import CollapseItemMobile from '../../../assets/images/CollapseiconMobile';
import OpenItem from '../../../assets/images/OpenItem';
import OpenItemMobile from '../../../assets/images/OpenItemMobile';


import "./Logo.css";

const Logo = ({ showCollapse, isNavOpen, setIsNavOpen }) => {
    return (
        <div className="logoDiv">
            {showCollapse ? (
                <div onClick={() => setIsNavOpen((prevstate)=> !prevstate)} className="logoDiv__menuBtn">
                {isNavOpen ? (
                    <>
                        <div className="desktopVersion">
                            <CollapseItem />
                        </div>
                        <div className="MobileVersion">
                            <CollapseItemMobile />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="desktopVersion">
                            <OpenItem />
                        </div>
                        <div className="MobileVersion">
                            <OpenItemMobile />
                        </div>
                    </>
                )}
            </div>
            ) : null}
            <div className={showCollapse ? "logoDiv__logoDiv" : "full_logoDiv_logoDiv"}>
                <Link to="/"><h1>ART<span>STATION</span></h1></Link>
            </div>
        </div>
    )
}

export default Logo
