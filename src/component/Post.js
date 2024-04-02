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


    return(
        <>
            <div className="postbackground">
            </div>
            <Modal />
            <div className="postElement">
                <div className="postprofile"></div>
                <div className="postname">doong_yi_nuna</div>
                <div className="postpic"></div>
                <img className='options' src={options}/>
                <div className="posticon">
                    <HeartButton/>
                    <img className='share' src={share}/>
                    <img className='save' src={save}/>
                </div>
                <div className="posttext">
                    <div className="textname">doong_yi_nuna</div>
                    <div className="text">hello my friends!</div>
                </div>
                <Comment />
            </div>
        </>
    );
};

export default Post;