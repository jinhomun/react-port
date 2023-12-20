import React from 'react'
import arrow from '../assets/img/Arrow11.svg'
import imgAboutme from '../assets/img/about1.png'
import insta from '../assets/img/insta.svg'
import github from '../assets/img/github.svg'
import mail from '../assets/img/mail.svg'
import comment from '../assets/img/comment.svg'

const Aboutme = () => {
    return (
        <>
            <div id="item__wrap3" className="fixed">
                <div className="item black__img">
                    <img src={imgAboutme} alt="이미지" />
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item noR home">
                    <a href="/">
                        <p>HOME</p>
                        <img src={arrow} alt="화살표"></img>
                    </a>
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item noR img"></div>
                <div className="item noR title">
                    <h3>PASSION</h3>
                    <p className="desc">
                        새로운 기술에 대한 열린 마음과 지속적인 학습의지를 가지고 있어, 새로운 도전에 대한 준비가 되어 있습니다.
                        저의 포트폴리오를 통해 더 자세한 정보를 확인하실 수 있습니다.
                        함께 일하고 성장하는 기회가 있다면 기쁘게 참여하겠습니다.</p>
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item noR title">
                    <h3>try</h3>
                    <p className="desc">
                        풍부한 경험과 깊은 관심을 토대로, 현대적이고 사용자 친화적인 웹 애플리케이션을 만들기 위해 노력하고 있습니다.
                        전공에서 얻은 지식과 실무 경험을 바탕으로, 사용자 경험을 최적화하고 최신 웹 개발 동향을 따라가며
                        항상 성장하고자 노력하고 있습니다.</p>
                </div>
                <div className="item noB icon">
                    <a href="https://www.instagram.com/coding_jinho/">
                        <img src={insta} alt="" />
                    </a>
                    <a href="https://github.com/jinhomun">
                        <img src={github} alt="" />
                    </a>
                    <a href="mailto:answlsgh95@gmail.com">
                        <img src={mail} alt="" />
                    </a>
                    <a href="/contact">
                        <img src={comment} alt="" />
                    </a>
                </div>
                <div className="item noB title">
                    <a className="pageLink" href="contact.html">
                        <h3>CONTACT ME</h3>
                        <p className="desc">안녕하세요!
                            저는 열정적이고 창의적인 프론트엔드 개발자 문진호 입니다.</p>
                    </a>
                </div>
                <div className="item noB title">
                    {/* <!-- <h3>code view</h3>
            <p className="desc">
                skill를 이용하여 만든 소스를
                깃을 통해 볼 수 있습니다.
            </p> --> */}
                </div>
                <div className="item noR noB title">
                    <h2>about me</h2>
                </div>
            </div>
        </>
    )
}

export default Aboutme