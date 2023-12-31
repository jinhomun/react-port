import React, { useEffect } from 'react'
import gsap from 'gsap';
// img
import imgME from '../assets/img/about1.png'
import KOR from '../assets/img/KOR.png'



const Home = () => {

    useEffect(() => {

        gsap.set(".item.i3 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i6 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i9 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i7 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i1 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i11 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i12 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i15 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i16 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i10 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i13 .item__inner", {
            opacity: 0,
            y: 30
        });



        gsap.to(".item.i3 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 0.3
        });
        gsap.to(".item.i6 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 0.6
        })
        gsap.to(".item.i9 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 0.9
        })
        gsap.to(".item.i7 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.2
        })
        gsap.to(".item.i1 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.5
        });
        gsap.to(".item.i11 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.5
        })
        gsap.to(".item.i12 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.7
        })
        gsap.to(".item.i15 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.7
        })
        gsap.to(".item.i16 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.7
        })
        gsap.to(".item.i10 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.9
        })
        gsap.to(".item.i13 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.9
        })
        gsap.to(".item.i2 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 2.1
        })
        gsap.to(".item.i4 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 2.1
        })
        gsap.to(".item.i5 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 2.1
        })



        gsap.to(".item.i3 .item__inner", {
            opacity: 1,
            delay: 0.6,
            y: 0
        });
        gsap.to(".item.i6 .item__inner", {
            opacity: 1,
            delay: 0.9,
            y: 0
        });
        gsap.to(".item.i9 .item__inner", {
            opacity: 1,
            delay: 1.2,
            y: 0
        });
        gsap.to(".item.i7 .item__inner", {
            opacity: 1,
            delay: 1.5,
            y: 0
        });
        gsap.to(".item.i1 .item__inner", {
            opacity: 1,
            delay: 1.8,
            y: 0
        });
        gsap.to(".item.i11 .item__inner", {
            opacity: 1,
            delay: 1.8,
            y: 0
        });
        gsap.to(".item.i12 .item__inner", {
            opacity: 1,
            delay: 2.1,
            y: 0
        });
        gsap.to(".item.i15 .item__inner", {
            opacity: 1,
            delay: 2.1,
            y: 0
        });
        gsap.to(".item.i16 .item__inner", {
            opacity: 1,
            delay: 2.1,
            y: 0
        });
        gsap.to(".item.i10 .item__inner", {
            opacity: 1,
            delay: 2.3,
            y: 0
        });
        gsap.to(".item.i13 .item__inner", {
            opacity: 1,
            delay: 2.3,
            y: 0
        });

        const linkClickHandler = (linkSelector, destination) => {
            const links = document.querySelectorAll(linkSelector);

            if (links.length > 0) {
                links.forEach(link => {
                    link.addEventListener('click', (event) => {
                        event.preventDefault();

                        gsap.to(".item__bg", {
                            height: "100%",
                            ease: "power3.inOut",
                            onComplete: () => {
                                // Use window.location.pathname to navigate
                                window.location.pathname = destination;
                            },
                        });
                    });
                });
            }
        };

        // 함수 호출 - 각 링크에 대해 개별적으로 호출
        linkClickHandler(".item.i3 .list li:nth-child(1) a", "/gsap");
        linkClickHandler(".item.i3 .list li:nth-child(2) a", "/quiz");
        linkClickHandler(".item.i3 .list li:nth-child(3) a", "/search");

        linkClickHandler(".item.i6 .list li:nth-child(1) a", "/wpoint");
        linkClickHandler(".item.i6 .list li:nth-child(2) a", "/vite");

        linkClickHandler(".item.i9 .list li:nth-child(1) a", "/gyobok");
        linkClickHandler(".item.i9 .list li:nth-child(2) a", "/youtube");
        linkClickHandler(".item.i9 .list li:nth-child(3) a", "/movie");

        linkClickHandler(".item.i15 a", "/aboutme");
        linkClickHandler(".item.i16 a", "/contact");
    }, []);



    return (
        <>
            <div id="item__wrap" className="fixed">
                <div className="item i1 black">
                    <div className="item__inner">
                        <p className="desc">
                            디지털 정보통신을 전공으로 공부하였고, 코로나 시국에 대학교를 다니면서 나의 적성에 맞는 일을 찾고자 노력을 했습니다. 다니던 대학교를 졸업하고
                            국비지원학원에서 약 6개월간의 여정을시작했습니다.
                        </p>

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i2">
                    <div className="item__inner">

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i3 title">
                    <div className="item__inner">
                        <h3>script<em>javascript</em></h3>
                        <p className="desc">
                            gsap효과, 퀴즈효과, 서치효과까지 자바스크립트를 이용하여 공부하였으며, 알고리즘을 통하여 깊이를 더하다.
                        </p>
                        <div className="list">
                            <ul>
                                <li><a href="/gsap">1</a></li>
                                <li><a href="/quiz">2</a></li>
                                <li><a href="/search">3</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i4 noR">
                    <div className="item__inner">

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i5">
                    <div className="item__inner">

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i6 title">
                    <div className="item__inner">
                        <h3>site<em>coding</em></h3>
                        <p className="desc">
                            웹 표준에 충실한 코딩에서 시작하여, 정교한 레이아웃과 반응형 디자인을 완성하고, 패럴랙스 스크롤링 기법을 통해 웹사이트 개발의 깊이를 더했습니다. 이러한 과정을
                            통해, 저는 사이트 코딩의 모든 측면을 섬세하게 다루는 전문성을 키워왔습니다</p>
                        <div className="list">
                            <ul>
                                <li><a href="/wpoint">1</a></li>
                                <li><a href="/vite">2</a></li>
                                {/* <li><a href="section/w.point.html">3</a></li> */}
                            </ul>
                        </div>

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i7 noR title">
                    <div className="item__inner">
                        <h2>portfolio</h2>

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i8">
                    <div className="item__inner">

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i9 title">
                    <div className="item__inner">
                        <h3>work<em>coding</em></h3>
                        <p className="desc">
                            "'GYOBOK SITE': PHP로 구축한 사용자 맞춤형 웹 경험."<br />
                            "'YOUTUBE SITE': React와 API를 통한 빠르고 동적인 콘텐츠."<br />
                            "'MOVIE SITE': Vue.js와 API로 혁신적인 영화 탐색."</p>
                        <div className="list">
                            <ul>
                                <li><a href="/gyobok">1</a></li>
                                <li><a href="/youtube">2</a></li>
                                <li><a href="/movie">3</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i10 noB left">
                    <div className="item__inner">
                        <h3>WELCOME</h3>

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i11 black__about">
                    <div className="item__inner">
                        <img src={imgME} alt="이미지" />

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i12 noR">
                    <div className="item__inner">
                        <p className="desc">
                            새로운 기술에 대한 열린 마음과 지속적인 학습의지를 가지고 있어, 새로운 도전에 대한 준비가 되어 있습니다.
                            저의 포트폴리오를 통해 더 자세한 정보를 확인하실 수 있습니다.
                            함께 일하고 성장하는 기회가 있다면 기쁘게 참여하겠습니다.</p>

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i13 noB__kr">
                    <div className="item__inner">
                        <img src={KOR} alt="태극기" />
                        <h3>KOR</h3>

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i14 noB">
                    <div className="item__inner">

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i15 noB title">
                    <div className="item__inner">
                        <a href="/aboutme">
                            <h3>ABOUT ME</h3>
                            <p className="desc">
                                안녕하세요!<br />
                                저는 열정적이고 창의적인 프론트엔드 개발자 문진호 입니다</p>
                        </a>

                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i16 noR noB">
                    <div className="item__inner">
                        <a href="/contact">
                            <h3>CONTACT ME</h3>
                            <p className="desc"></p>

                        </a>

                    </div>
                    <div className='item__bg'></div>
                </div>
            </div>
        </>
    )
}

export default Home