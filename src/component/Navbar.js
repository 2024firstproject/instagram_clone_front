import React, { useState } from 'react';
import './Navbar.css';
import LOGO from '../image/LOGO.png';
import search from '../image/search.png';
import homeactive from '../image/homeactive.png';
import msg from '../image/msg.png';
import add from '../image/add.png';
import trends from '../image/trends.png';
import likes from '../image/likes.png';
import Ellipse1 from '../image/Ellipse1.png';
import { useNavigate } from "react-router-dom"
import MainPage from './MainPage';

function Navbar() {
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    const navigate = useNavigate();
    
    const goToMain = () =>{
        navigate(<MainPage/>);
    }
    return (
        <>
            <div className='Navbar'>
            </div>
            <div className='NavElement'>
                <img className='navlogo' src={LOGO}/>
                {/* focus시 돋보기 아이콘 삭제 */}
                <div className={`search_form ${isInputFocused ? 'focused' : ''}`}>
                    {isInputFocused ? null : <img className='search' src={search}/>}
                    <input
                        className="search-bar_input"
                        type="search"
                        placeholder="Search"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </div>
                <div className='Navicon'>
                    <img className='homeactive' src={homeactive} onClick={goToMain}/>
                    <img className='msg' src={msg}/>
                    <img className='add' src={add}/>
                    <img className='trends' src={trends}/>
                    <img className='likes' src={likes}/>
                    <img className='Ellipse1' src={Ellipse1}/>
                </div>
            </div>
        </>
    );
}

export default Navbar;
