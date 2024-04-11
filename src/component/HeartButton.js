import React, { useState } from 'react';
import heart_col from '../image/heart_col.png';
import heart from '../image/heart.png';
import './Post.css';

function HeartButton() {
    const [isClicked, setIsClicked] = useState(false);
    const [count, setCount] = useState(0); // count를 상태로 관리

    const handleClick = () => {
        if (!isClicked) { // isClicked가 false일 때만 count 증가
            setCount(count + 1);
        } else { // 이미 클릭되어 있으면 count 감소
            setCount(count - 1);
        }
        setIsClicked(!isClicked);
    };

    return (
        <>
            <div>
                <img className="heartIcon" src={isClicked ? heart_col : heart} alt="heart" onClick={handleClick} style={{cursor: 'pointer'}} />
            </div>
            <div className="postlikes" onClick={handleClick}>{count} likes</div>
        </>
    );
}

export default HeartButton;