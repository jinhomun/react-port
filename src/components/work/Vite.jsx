import React from 'react'

const Vite = () => {
    return (
        <>
        <div id="item__wrap2" className="fixed">
        <div className="item title">
            <ul>
                <li><a href="/wpoint">1</a></li>
                <li className="active"><a href="/vite">2</a></li>
                {/* <li><a href="../section/w.point.html">3</a></li> */}
            </ul>
            <h2>vite site</h2>
        </div>
        <div className="item"></div>
        <div className="item home">
            <a href="/">
                <p>HOME</p>
                <img src="../assets/img/Arrow 12.svg" alt="화살표"></img>
            </a>
        </div>
        <div className="item noR home">
            <a href="/wpoint">
                <p>W.POINT</p>
                <img src="../assets/img/Arrow 12.svg" alt="화살표"></img>
            </a>
        </div>
        <div className="item skill">
            <h3>skill</h3>
            <p className="desc">
                VSC | VITE <br />
                HTML | CSS <br />
                GSAP | Git</p>
        </div>
        <div className="item"></div>
        <div className="item noR img">
            <img src="../assets/img/vite.png" alt="wpoint01" />
        </div>
        <div className="item"></div>
        <div className="item black">
            <p className="desc1">
                Vite는 뛰어난 개발 경험을 제공하는 프론트엔드 도구로, <br />
                빠른 화면 갱신과 실시간 변경 반영을 통해 빠른 개발 속도를 지원합니다.<br />
                Esbuild를 사용하여 프로젝트를 빌드하므로 높은 빌드 성능을 보여주며, <br />
                파일 단위 모듈 개발과 ES 모듈 기반으로 코드를 모듈화하고 의존성을 효과적으로 관리할 수 있습니다. <br />
                주요 프레임워크의 플러그인을 내장하여 편리한 개발 환경을 제공하며 TypeScript 지원과 함께 안정적이고 효율적인 개발이 가능합니다. <br />
                또한 기능 모듈 동적 로딩과 웹 에셋 최적화를 통해 번들 크기를 최적화하고 프로덕션 빌드 최적화 기능으로 성능을 향상시킵니다.<br />
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
                깃에 올린 파일을 직접 볼 수 있습니다.</p>
        </div>
    </div>
    </>
    )
}

export default Vite