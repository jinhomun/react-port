import React from 'react'

const Gsap = () => {
    return (
        <>
            <div id="item__wrap2" class="fixed">
                <div className="item title">
                    <div className="list">
                        <ul>
                            <li className="active"><a href="/gsap">1</a></li>
                            <li><a href="/quiz">2</a></li>
                            <li><a href="/search">3</a></li>
                        </ul>
                    </div>
                    <h2>gsap</h2>
                </div>
                <div className="item display"></div>
                <div className="item home ">
                    <a className="pageLink" href="/">
                        <p>HOME</p>
                        <img src="../assets/img/Arrow 12.svg" alt="화살표"></img>
                    </a>
                </div>
                <div className="item noR home">
                    <a className="pageLink" href="/quiz">
                        <p>QUIZ</p>
                        <img src="../assets/img/Arrow 12.svg" alt="화살표"></img>
                    </a>
                </div>
                <div className="item skill">
                    <h3>skill</h3>
                    <p className="desc">
                        VSC | JavaScript<br />
                        HTML | CSS<br />
                        gsap | Git</p>
                </div>
                <div className="item"></div>
                <div className="item noR img">
                    <img src="../assets/img/gsap.png" alt="gsap01" />
                </div>
                <div className="item"></div>
                <div className="item black">
                    <p className="desc">
                        GSAP(또는 GreenSock Animation Platform)은 웹 애니메이션을 구축하는 데 사용되는 강력한 JavaScript 라이브러리 중 하나입니다. GSAP은 다양한
                        애니메이션 효과를 구현하는 데 도움이 되며,
                        그 중에서도 "Parallax"는 특정 요소가 스크롤됨에 따라 다르게 움직이는 효과를 지칭합니다.
                        "Parallax"는 여러 요소가 서로 다른 속도로 움직이는 효과를 나타내는 디자인 기법입니다.
                        GSAP을 사용하여 Parallax 효과를 만들 수 있습니다.<br />
                        <br />
                        애니메이션 기본 효과, Pin 애니메이션, 배경 고정시키기 ,이질감 효과 ,나타나기 효과,<br />
                        텍스트 효과,배경색 효과, 진행바 효과,메뉴 이동 효과,메뉴 축소 효과,<br />
                        메뉴 숨기기 효과,가로 효과,가로 세로 효과,나타나기 효과 ,스무스 효과<br />
                    </p>
                </div>
                <div className="item noB"></div>
                <div className="item"></div>
                <div className="item noR"></div>
                <div className="item noB"></div>
                <div className="item noB"></div>
                <div className="item noB title">
                    <h3>code view</h3>
                    <a href="https://github.com/jinhomun/webs2024/tree/main/javascript/gsap">
                        <p className="desc">
                            skill를 이용하여 만든 소스를
                            깃을 통해 볼 수 있습니다.
                        </p>
                    </a>
                </div>
                <div className="item noR noB title">
                    <h3>site view</h3>
                    <a href="https://github.com/jinhomun/webs2024/tree/main/javascript/gsap">
                        <p className="desc">
                            깃에 올린 파일을 직접 볼 수 있습니다.
                        </p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Gsap