import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
import axios from 'axios';

const RepleWrite = () => {
    const [reple, setReple] = useState("");
    // const user = useSelector((state) => state.user);

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!reple) {
            return alert("댓글 내용을 채워주세요!!!");
        }

        let body = {
            reple: reple,
            // uid: user.uid,
            // postId: props.postId
        }

        axios.post("/api/reple/submit", body).then((response) => {
            if (response.data.success) {
                alert("댓글 작성이 성공하였습니다.");
                window.location.reload();
            } else {
                alert("댓글 작성이 실패했습니다.");
            }
        })
    }

    return (
        <>
            <input className="name-input" placeholder="Your Name" />
            <input
                className="comment-input"
                placeholder="Input Comment"
                text="text"
                value={reple}
                onChange={(e) => { setReple(e.currentTarget.value) }}
            />
            <button className="submit" onClick={(e) => { SubmitHandler(e) }}>등록</button>
        </>
    )
}

export default RepleWrite