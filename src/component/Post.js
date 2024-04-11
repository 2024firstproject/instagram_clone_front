import React from "react";
import Comment from "./Comment.js";
import './PostComment.css'
import './Post.css';
import share from '../image/share.png';
import save from '../image/save.png';
import options from '../image/options.png';
import HeartButton from "./HeartButton.js";
import Modal from './Modal.js';

function Post(props) {
    const { postName, textName, postText} = props;

    return(
        <>
            <div className="postbackground">
            </div>
            <Modal comcount="10"/>
            <div className="postElement">
                <div className="postprofile"></div>
                <div className="postname">{postName}</div>
                <div className="postpic"></div>
                <img className='options' src={options}/>
                <div className="posticon">
                    <HeartButton/>
                    <img className='share' src={share}/>
                    <img className='save' src={save}/>
                </div>
                <div className="posttext">
                    <div className="textname">{textName}</div>
                    <div className="text">{postText}</div>
                </div>
                <Comment commentName="doong_yi_nuna" />
            </div>
        </>
    );
};

export default Post;
