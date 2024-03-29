import React from "react";
import './MainSide.css';

function MainSide() {
    return(
        <>
            <div className="sideback"></div>
            <div className="sideprofil">
                <div className="sideproname">doong_yi_nuna</div>
                <div className="sideprosub">seyoung</div>
                <div className="sidepropic"></div>
                <div className="sidechange">Change</div>
            </div>
            <div className="suggtext">Suggestions for you</div>
            <div className="suggestion">
                <div className="suggname">ojysns</div>
                <div className="suggsub">suggestion for you</div>
                <div className="suggpic"></div>
                <div className="suggfollow">Follow</div>
            </div>
            <div className="sideinfo">
            Information · Help · Prisoner · API · Job · Privacity<br/> · Conditions · Locations · Trending accounts · Hashtags · <br/>Language
            </div>
        </>
    )
};

export default MainSide;