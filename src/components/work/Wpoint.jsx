import React from 'react'

const Wpoint = () => {
    return (
        <>
        <div id="item__wrap2" className="fixed">
        <div className="item title">
            <ul>
                <li className="active"><a href="/wpoint">1</a></li>
                <li><a href="/vite">2</a></li>
                 {/* <li><a href="../section/w.point.html">3</a></li> */}
            </ul>
            <h2>w.point</h2>
        </div>
        <div className="item"></div>
        <div className="item home">
            <a href="/">
                <p>HOME</p>
                <img src="../assets/img/Arrow 12.svg" alt="화살표"></img>
            </a>
        </div>
        <div className="item noR home">
            <a href="/vite">
                <p>SITE</p>
                <img src="../assets/img/Arrow 12.svg" alt="화살표"></img>
            </a>
        </div>
        <div className="item skill">
            <h3>skill</h3>
            <p className="desc">
                VSC | JavaScript <br />
                HTML | CSS <br />
                swiper | Git</p>
        </div>
        <div className="item"></div>
        <div className="item noR img">
            <img src="../assets/img/wpoint.png" alt="wpoint01" />
        </div>
        <div className="item"></div>
        <div className="item black">
            <p className="desc1">
                "Swiper"는 주로 웹 개발에서 사용되는 JavaScript 라이브러리 중 하나입니다. <br />
                Swiper는 모바일 터치 슬라이드 및 스와이프 기능을 구현하는 데에 중점을 둔 라이브러리로, <br />
                웹 페이지나 모바일 애플리케이션에서 이미지 갤러리, 카루셀, 슬라이드쇼 등을 만들 때 유용하게 사용됩니다.<br/>
                <br />
                1. 터치 이벤트 지원: Swiper는 터치 스크린에서의 사용을 감안하여 설계되었으며, 사용자가 스와이프 또는 터치 제스처를 사용하여 콘텐츠를 이동할 수 있도록 지원합니다.<br />
                2. 다양한 슬라이드 유형: 이미지 뿐만 아니라 텍스트, 비디오, HTML 요소 등 다양한 유형의 콘텐츠를 슬라이드로 표시할 수 있습니다.<br />
                3. 자동 재생 및 자동 높이 조절: Swiper는 슬라이드를 자동으로 재생하거나, 슬라이드의 높이를 자동으로 조절하는 등 다양한 기능을 제공합니다.<br />
                4. 반응형 디자인 지원: 다양한 디바이스 및 화면 크기에 대응하기 위한 반응형 디자인을 지원하여 웹 페이지나 앱이 다양한 환경에서 동작할 수 있도록 합니다.
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

export default Wpoint