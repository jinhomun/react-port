import React, { useEffect } from 'react'
import gsap from 'gsap';

import arrow from '../assets/img/Arrow11.svg'
import imgVite from '../assets/img/vite.png'

const Vite = () => {
    useEffect(() => {

        gsap.set(".item.i1 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i7 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i9 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i5 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i3 .item__inner", {
            opacity: 0,
            y: 30
        });
        gsap.set(".item.i4 .item__inner", {
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




        gsap.to(".item.i1 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 0.3
        });
        gsap.to(".item.i7 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 0.6
        })
        gsap.to(".item.i9 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 0.9
        })
        gsap.to(".item.i5 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.2
        })
        gsap.to(".item.i3 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.5
        });
        gsap.to(".item.i4 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.5
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
        gsap.to(".item.i6 .item__bg", {
            height: "0%",
            ease: "power3.inOut",
            delay: 1.9
        })
        // gsap.to(".item.i10 .item__bg", {
        //     height: "0%",
        //     ease: "power3.inOut",
        //     delay: 1.9
        // })
        // gsap.to(".item.i13 .item__bg", {
        //     height: "0%",
        //     ease: "power3.inOut",
        //     delay: 1.9
        // })
        // gsap.to(".item.i2 .item__bg", {
        //     height: "0%",
        //     ease: "power3.inOut",
        //     delay: 2.1
        // })
        // gsap.to(".item.i4 .item__bg", {
        //     height: "0%",
        //     ease: "power3.inOut",
        //     delay: 2.1
        // })
        // gsap.to(".item.i5 .item__bg", {
        //     height: "0%",
        //     ease: "power3.inOut",
        //     delay: 2.1
        // })



        gsap.to(".item.i1 .item__inner", {
            opacity: 1,
            delay: 0.6,
            y: 0
        });
        gsap.to(".item.i7 .item__inner", {
            opacity: 1,
            delay: 0.9,
            y: 0
        });
        gsap.to(".item.i9 .item__inner", {
            opacity: 1,
            delay: 1.2,
            y: 0
        });
        gsap.to(".item.i5 .item__inner", {
            opacity: 1,
            delay: 1.5,
            y: 0
        });
        gsap.to(".item.i3 .item__inner", {
            opacity: 1,
            delay: 1.8,
            y: 0
        });
        gsap.to(".item.i4 .item__inner", {
            opacity: 1,
            delay: 1.8,
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

        const linkClickHandler = (linkSelector, destination) => {
            document.querySelector(linkSelector).addEventListener('click', (event) => {
                event.preventDefault(); // Prevent the default behavior of the link

                gsap.to(".item__bg", {
                    height: "100%",
                    ease: "power3.inOut",
                    onComplete: () => {
                        // Navigate to the link after the animation completes
                        window.location.href = destination;
                    },
                });
            });
        };

        // // Call the linkClickHandler function for each link with the correct destination
        // linkClickHandler(".item.i1 .list a", "/gsap","/quiz","/search");
        linkClickHandler(".item.i3 a", "/");
        linkClickHandler(".item.i4 a", "/vite");

        // ...

    }, []);
    return (
        <>
            <div id="item__wrap2" className="fixed">

                <div className="item i1 title">
                    <div className="item__inner">
                        {/* <ul>
                        <li><a href="/wpoint">1</a></li>
                        <li className="active"><a href="/vite">2</a></li>
                    </ul> */}
                        <h2>vite site</h2>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i2">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i3 home">
                    <div className="item__inner">
                        <a href="/">
                            <p>HOME</p>
                            <img src={arrow} alt="화살표"></img>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i4 noR home">
                    <div className="item__inner">
                        <a href="/wpoint">
                            <p>W.POINT</p>
                            <img src={arrow} alt="화살표"></img>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i5 skill">
                    <div className="item__inner">
                        <h3>skill</h3>
                        <p className="desc">
                            VSC | VITE <br />
                            HTML | CSS <br />
                            GSAP | Git
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i6">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i7 noR img">
                    <div className="item__inner">
                        <img src={imgVite} alt="wpoint01" />
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i8">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i9 black">
                    <div className="item__inner">
                        <p className="desc1">
                            Vite는 뛰어난 개발 경험을 제공하는 프론트엔드 도구로, <br />
                            빠른 화면 갱신과 실시간 변경 반영을 통해 빠른 개발 속도를 지원합니다.<br />
                            Esbuild를 사용하여 프로젝트를 빌드하므로 높은 빌드 성능을 보여주며, <br />
                            파일 단위 모듈 개발과 ES 모듈 기반으로 코드를 모듈화하고 의존성을 효과적으로 관리할 수 있습니다. <br />
                            주요 프레임워크의 플러그인을 내장하여 편리한 개발 환경을 제공하며 TypeScript 지원과 함께 안정적이고 효율적인 개발이 가능합니다. <br />
                            또한 기능 모듈 동적 로딩과 웹 에셋 최적화를 통해 번들 크기를 최적화하고 프로덕션 빌드 최적화 기능으로 성능을 향상시킵니다.<br />
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i10 noB">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i11">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i12 noR">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i13 noB">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i14 noB">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i15 noB title">
                    <div className="item__inner">
                        <h3>code view</h3>
                        <p className="desc">
                            skill를 이용하여 만든 소스를
                            깃을 통해 볼 수 있습니다.
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="item i16 noR noB title">
                    <div className="item__inner">
                        <h3>site view</h3>
                        <p className="desc">
                            깃에 올린 파일을 직접 볼 수 있습니다.
                        </p>
                    </div>
                    <div className="item__bg"></div>
                </div>
            </div>
        </>
    )
}

export default Vite