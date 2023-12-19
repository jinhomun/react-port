import React from 'react'

const Home = () => {
    return (
        <>
            <div id="item__wrap" className="fixed">
                <div className="item black">
                    <p className="desc">
                        디지털 정보통신을 전공으로 공부하였고, 코로나 시국에 대학교를 다니면서 나의 적성에 맞는 일을 찾고자 노력을 했습니다. 다니던 대학교를 졸업하고
                        국비지원학원에서 약 6개월간의 여정을시작했습니다.
                    </p>
                </div>
                <div className="item"></div>
                <div className="item title">
                    <h3>script<em>javascript</em></h3>
                    <p className="desc">
                        gsap효과, 퀴즈효과, 서치효과까지 자바스크립트를 이용하여 공부하였으며, 알고리즘을 통하여 깊이를 더하다.
                    </p>
                    <div className="list">
                        <ul>
                            <li><a className="pageLink" href="../section/gsap.html">1</a></li>
                            <li><a className="pageLink" href="../section/quiz.html">2</a></li>
                            <li><a className="pageLink" href="../section/search.html">3</a></li>
                        </ul>
                    </div>
                </div>
                <div className="item noR"></div>
                <div className="item"></div>
                <div className="item title">
                    <h3>site<em>coding</em></h3>
                    <p className="desc">
                        웹 표준에 충실한 코딩에서 시작하여, 정교한 레이아웃과 반응형 디자인을 완성하고, 패럴랙스 스크롤링 기법을 통해 웹사이트 개발의 깊이를 더했습니다. 이러한 과정을
                        통해, 저는 사이트 코딩의 모든 측면을 섬세하게 다루는 전문성을 키워왔습니다</p>
                    <div className="list">
                        <ul>
                            <li><a className="pageLink" href="../section/w.point.html">1</a></li>
                            <li><a href="section/vite.html">2</a></li>
                            {/* <li><a href="section/w.point.html">3</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className="item noR title">
                    <h2>portfolio</h2>
                </div>
                <div className="item"></div>
                <div className="item title">
                    <h3>work<em>coding</em></h3>
                    <p className="desc">
                        "'GYOBOK SITE': PHP로 구축한 사용자 맞춤형 웹 경험."<br />
                        "'YOUTUBE SITE': React와 API를 통한 빠르고 동적인 콘텐츠."<br />
                        "'MOVIE SITE': Vue.js와 API로 혁신적인 영화 탐색."</p>
                    <div className="list">
                        <ul>
                            <li><a className="pageLink" href="../section/gyobok.html">1</a></li>
                            <li><a className="pageLink" href="../section/youtube.html">2</a></li>
                            <li><a className="pageLink" href="../section/movie.html">3</a></li>
                        </ul>
                    </div>
                </div>
                <div className="item noB left">
                    <h3>WELCOME</h3>
                </div>
                <div className="item black__about">
                    <img src="process.env.PUBLIC_URL + ../assets/img/about1.png " alt="이미지" />
                </div>
                <div className="item noR">
                    <p className="desc">
                        새로운 기술에 대한 열린 마음과 지속적인 학습의지를 가지고 있어, 새로운 도전에 대한 준비가 되어 있습니다.
                        저의 포트폴리오를 통해 더 자세한 정보를 확인하실 수 있습니다.
                        함께 일하고 성장하는 기회가 있다면 기쁘게 참여하겠습니다.</p>
                </div>
                <div className="item noB__kr">
                    <img src="../assets/img/KOR.png" alt="태극기" />
                    <h3>KOR</h3>
                </div>
                <div className="item noB">

                </div>
                <div className="item noB title">
                    <a className="pageLink" href="../section/aboutme.html">
                        <h3>ABOUT ME</h3>
                        <p className="desc">
                            안녕하세요!<br />
                            저는 열정적이고 창의적인 프론트엔드 개발자 문진호 입니다</p>
                    </a>
                </div>
                <div className="item noR noB">
                    <a href="https://www.instagram.com/coding_jinho/">
                        <img src="../assets/img/insta.svg" alt="" />
                    </a>
                    <a href="https://github.com/jinhomun">
                        <img src="../assets/img/github.svg" alt="" />
                    </a>
                    <a href="mailto:answlsgh95@gmail.com">
                        <img src="../assets/img/mail.svg" alt="" />
                    </a>
                    <a className="pageLink" href="../section/contact.html">
                        <img src="../assets/img/comment.svg" alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Home