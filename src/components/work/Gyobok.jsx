import React from 'react'
import arrow from '../../assets/img/Arrow11.svg'
import imgGyobok1 from '../../assets/img/gyobok1.png'
import imgGyobok2 from '../../assets/img/gyobok2.png'
import imgGyobok3 from '../../assets/img/gyobok3.png'
import SliderScript from '../../assets/script/SliderScript'

const Gyobok = () => {
    return (
        <>
            <div id="item__wrap2" className="fixed">
                <div className="item title">
                    <ul>
                        <li className="active"><a href="/gyobok">1</a></li>
                        <li><a href="/youtube">2</a></li>
                        <li><a href="/movie">3</a></li>
                    </ul>
                    <h2 className="long">gyobok site</h2>
                </div>
                <div className="item"></div>
                <div className="item home">
                    <a href="/">
                        <p>HOME</p>
                        <img src={arrow} alt="화살표"></img>
                    </a>
                </div>
                <div className="item noR home">
                    <a href="/youtube">
                        <p>YOUTUBE.S</p>
                        <img src={arrow} alt="화살표"></img>
                    </a>
                </div>
                <div className="item skill">
                    <h3>skill</h3>
                    <p className="desc1">
                        VSC | JavaScript<br />
                        HTML| CSS<br />
                        PHP | PHPMyAdmin<br />
                        jQuery | Git</p>
                </div>
                <div className="item"></div>
                <div className="item">
                    <SliderScript />
                    <div className="sliderWrap">
                        <div className="slider">
                            <a href="/">
                                <img src={imgGyobok1} alt="gyobok01" />
                            </a>
                        </div>
                        <div className="slider">
                            <a href="/">
                                <img src={imgGyobok2} alt="gyobok02" />
                            </a>
                        </div>
                        <div className="slider">
                            <a href="/">
                                <img src={imgGyobok3} alt="gyobok03" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item"></div>
                <div className="item black">
                    <p className="desc">
                        전국에 있는 고등학교 교복을 모아둔 교복소개 사이트 입니다.
                        직장인 커뮤니티, 대학생 커뮤니티 “왜 청소년을 위한 커뮤니티는 없을까?” 라는 생각에서
                        진행하게 된 프로젝트입니다!<br />
                        학교에서 얻을 수 없는 독특한 정보를 제공하고자, <br />
                        전국 고등학교의 교복을 소개하는 커뮤니티 사이트를 제작하였습니다.<br />
                        전국의 교복을 구격하며 투표를 할 수 있고, 그에 대한 평가는 댓글로도 자유롭게 논할 수 있습니다.<br />
                        투표가 진행된 해당 학교의 교복은 인기 순위로 매겨지고 <br />
                        각 조회수, 좋아요, 싫어요 순으로 순위를 확인할 수 있습니다.<br />
                        또, “수다방” 커뮤니티에서 학생들만의 이야기로 수다의 꽃을 피울 수 있습니다!
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

export default Gyobok