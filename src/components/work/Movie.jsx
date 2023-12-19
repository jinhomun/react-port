import React from 'react'

const Movie = () => {
    return (
        <>
        <div id="item__wrap2" class="fixed">
        <div className="item title">
            <ul>
                <li><a href="/gyobok">1</a></li>
                <li><a href="/youtube">2</a></li>
                <li className="active"><a href="/movie">3</a></li>
            </ul>
            <h2 className="long">movie site</h2>
        </div>
        <div className="item"></div>
        <div className="item home">
            <a href="/">
                <p>HOME</p>
                <img src="../assets/img/Arrow 12.svg" alt="화살표"></img>
            </a>
        </div>
        <div className="item noR home">
            <a href="/gyobok">
                <p>GYOBOK.S</p>
                <img src="../assets/img/Arrow 12.svg" alt="화살표"></img>
            </a>
        </div>
        <div className="item skill">
            <h3>skill</h3>
            <p className="desc2">
                VSC | HTML <br />
                VITE | VUE.js <br />
                sass | API<br />
                Netlify | Postman <br />
                Git</p>
        </div>
        <div className="item"></div>
        <div className="item">
            <div className="sliderWrap">
                <div className="slider">
                    <a href="/">
                        <img src="../assets/img/movie1.png" alt="movie01" />
                    </a>
                </div>
                <div className="slider">
                    <a href="/">
                        <img src="../assets/img/movie2.png" alt="movie02" />
                    </a>
                </div>
                <div className="slider">
                    <a href="/">
                        <img src="../assets/img/movie3.png" alt="movie03" />
                    </a>
                </div>
            </div>
        </div>
        <div className="item"></div>
        <div className="item black">
            <p className="desc">
                vue.js를 이용해서 ON MOVIE라는 사이트를 만들었습니다.<br />
                ON movie는 영화 팬들을 위한 완벽한 플랫폼입니다.<br />
                우리는 수많은 영화 데이터베이스를 통합하여 여러 소스의 정보를 한 곳에서 손쉽게 찾아볼 수 있게 했습니다.<br />
                최신 영화 소식, 평점, 리뷰, 예고편, 그리고 더 많은 콘텐츠를 여기서 만나보세요!<br />
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

export default Movie