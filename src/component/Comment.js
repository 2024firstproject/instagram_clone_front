import React, { useState } from 'react';

function Comment(props) {
    const [comment, setComment] = useState('');
    const [commentArray, setCommentArray] = useState([]);

    const onChange = event => setComment(event.target.value);

    const onSubmit = event => {
        event.preventDefault();
        if (comment === '') {
            return;
        }
        const userName = props.commentName; // 사전에 설정된 이름
        const newComment = { name: userName, text: comment }; // 사용자 이름과 댓글을 객체로 생성
        setCommentArray(commentValueList => [newComment, ...commentValueList]);
        setComment('');
    };

    return (
        <div className="commentContainer">
            <ul className="comment_ul_1">
                {commentArray.map((commentObj, index) => (
                    <li key={index}>{`${commentObj.name}: ${commentObj.text}`}</li> // 사용자 이름과 댓글 내용을 함께 표시
                ))}
            </ul>
            <form className="commentWrap" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="댓글달기…"
                    value={comment}
                    onChange={onChange}
                />
                <button type="submit" className="commentBtn">enter</button>
            </form>
        </div>
    );
};

export default Comment;

