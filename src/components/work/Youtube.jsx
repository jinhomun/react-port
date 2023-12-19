import React from 'react'

const Youtube = () => {
    return (
        <>
        <div id="item__wrap2" className="fixed">
        <div className="item title">
            <ul>
                <li><a href="/gyobok">1</a></li>
                <li className="active"><a href="/youtube">2</a></li>
                <li><a href="/movie">3</a></li>
            </ul>
            <h2 className="long">youtube site</h2>
        </div>
        <div className="item"></div>
        <div className="item home">
            <a href="/">
                <p>HOME</p>
                <img src="../assets/img/Arrow 12.svg" alt="화살표"></img>
            </a>
        </div>
        <div className="item noR home">
            <a href="/movie">
                <p>MOVIE.S</p>
                <img src="../assets/img/Arrow 12.svg" alt="화살표"></img>
            </a>
        </div>
        <div className="item skill">
            <h3>skill</h3>
            <p className="desc2">
                VSC | React<br />
                sass | API <br />
                Netlify | Postman<br />
                Git</p>
        </div>
        <div className="item"></div>
        <div className="item noR img">
            <img src="../assets/img/youtube.png" alt="youtube01"/>
        </div>
        <div className="item"></div>
        <div className="item black">
            <p className="desc">
                축구를 좋아해서 react, axios, swiper, api를 이용해서 soccer youtube를 만들었습니다.<br/>
                soccer youtube는 축구 팬들을 위한 전용 유튜브 사이트 입니다.<br/>
                우리는 최신 축구 소식, 트렌드 , 전략, 그리고 멋진 순간들을 모두 모았습니다.<br/>
                여기에서는 세계 각지에서 벌어지는 축구 경기의 하이라이트 부터,<br/>
                선수들의 인터뷰, 팀의 훈련 영상까지 다양한 콘텐츠를 즐길 수 있습니다.<br/>
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
                netrify에 올린 파일을 직접 볼 수 있습니다.</p>
        </div>
    </div>
    </>
    )
}

export default Youtube