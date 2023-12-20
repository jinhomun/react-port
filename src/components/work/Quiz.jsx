import React from 'react'
import arrow from '../../assets/img/Arrow11.svg'
import imgQuiz from '../../assets/img/quiz.png'


const Quiz = () => {
    return (
        <>
            <div id="item__wrap2" class="fixed">
                <div className="item title">
                    <ul>
                        <li><a href="/gsap">1</a></li>
                        <li className="active"><a href="/quiz">2</a></li>
                        <li><a href="/search">3</a></li>
                    </ul>
                    <h2>quiz</h2>
                </div>
                <div className="item"></div>
                <div className="item home">
                    <a className="pageLink" href="/">
                        <p>HOME</p>
                        <img src={arrow} alt="화살표"></img>
                    </a>
                </div>
                <div className="item noR home">
                    <a href="/search">
                        <p>SEARCH</p>
                        <img src={arrow} alt="화살표"></img>
                    </a>
                </div>
                <div className="item skill">
                    <h3>skill</h3>
                    <p className="desc">
                        VSC | JavaScript <br />
                        HTML | CSS <br />
                        JSON | Git</p>
                </div>
                <div className="item "></div>
                <div className="item noR img ">
                    <img src={imgQuiz} alt="quiz01" />
                </div>
                <div className="item "></div>
                <div className="item black">
                    <p className="desc">
                        JSON(JavaScript Object Notation)은 데이터를 표현하기 위한 경량의 데이터 교환 형식입니다. JSON은 사람이 읽고 쓰기 쉽고, 기계가 해석하고 생성하기도
                        쉽습니다. 주로 웹 애플리케이션에서 데이터를 전송하거나 저장하기 위해 사용됩니다.<br />
                        <br />
                        정보처리 기능사, 웹디자인 기능사 필기 JSON 파일을 이용하여, 문제 정보와 정답을 불러와서<br />
                        선택자: querySelector(), querySelectorAll() , 매서드 : innerHTML, classNameList <br />
                        이벤트 : addEventListener() 를 이용해서 퀴즈를 만들었습니다<br />
                    </p>
                </div>
                <div className="item noB"></div>
                <div className="item"></div>
                <div className="item noR"></div>
                <div className="item noB"></div>
                <div className="item noB"></div>
                <div className="item noB title">
                    <h3>code view</h3>
                    <p className="desc">
                        skill를 이용하여 만든 소스를
                        깃을 통해 볼 수 있습니다.
                    </p>
                </div>
                <div className="item noR noB title">
                    <h3>site view</h3>
                    <p className="desc">
                        깃에 올린 파일을 직접 볼 수 있습니다.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Quiz