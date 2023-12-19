import React from 'react'

const Contact = () => {
    return (
        <>
        <div id="item__wrap4" className="fixed">
        <div className="item black title">
            <h2>Contact me</h2>
        </div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item home">
            <a href="/">
                <p>HOME</p>
                <img src="../assets/img/Arrow 12.svg" alt="화살표"></img>
            </a>
        </div>
        <div className="item comment">
            <h3>COMMENT LIST</h3>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요 안녕하세요 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
            <div className="comment__container">
                <p className="name">작성자: 문**</p>
                <p className="text">댓글: 안녕하세요</p>
            </div>
        </div>
        <div className="item"></div>
        <div className="item commentinfo">
            <h3>COMMENT</h3>
            <input className="name-input" placeholder="Your Name" />
            <input className="comment-input" placeholder="Input Comment"/>
            <button className="submit">등록</button>
        </div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item noB icon">
            <a href="https://www.instagram.com/coding_jinho/">
                <img src="../assets/img/insta.svg" alt=""/>
            </a>
            <a href="https://github.com/jinhomun">
                <img src="../assets/img/github.svg" alt=""/>
            </a>
            <a href="mailto:answlsgh95@gmail.com">
                <img src="../assets/img/mail.svg" alt=""/>
            </a>
            <a href="contact.html">
                <img src="../assets/img/comment.svg" alt=""/>
            </a>
        </div>
        <div className="item"></div>
        <div className="item contact">
            <h3>CONTACT</h3>
            <form method="POST" action="https://formspree.io/answlsgh95@gmail.com">
                <input type="text" name="username" placeholder="Your Name"/>
                <input type="email" name="email" placeholder="Your Email"/>
                <input className="message" name="message" placeholder="Message"/>
                <button type="submit">전송</button>
            </form>
        </div>
        <div className="item">

        </div>
    </div>
    </>
    )
}

export default Contact