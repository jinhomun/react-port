import React, { useEffect } from 'react'
import gsap from 'gsap';

import arrow from '../assets/img/Arrow11.svg'
import imgGsap from '../assets/img/gsap.png'

const Gsap = () => {

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
        linkClickHandler(".item.i4 a", "/quiz");

        // ...

    }, []);
    return (
        <>
            <div id="item__wrap2" class="fixed">
                <div className="item i1 title">
                    <div className="item__inner">
                        {/* <div className="list">
                            <ul>
                                <li className="active"><a href="/gsap">1</a></li>
                                <li><a href="/quiz">2</a></li>
                                <li><a href="/search">3</a></li>
                            </ul>
                        </div> */}
                        <h2>gsap</h2>
                    </div>
                    <div className='item__bg'></div>
                </div>
                <div className="item i2">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i3 home ">
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
                        <a href="quiz">
                            <p>QUIZ</p>
                            <img src={arrow} alt="화살표"></img>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i5 skill">
                    <div className="item__inner">
                        <h3>skill</h3>
                        <p className="desc">
                            VSC | JavaScript<br />
                            HTML | CSS<br />
                            gsap | Git</p>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i6">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i7 noR img">
                    <div className="item__inner">
                        <img src={imgGsap} alt="gsap01" />
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i8">
                    <div className="item__inner"></div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i9 black">
                    <div className="item__inner">
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
                        <a href="https://github.com/jinhomun/webs2024/tree/main/javascript/gsap">
                            <p className="desc">
                                skill를 이용하여 만든 소스를
                                깃을 통해 볼 수 있습니다.
                            </p>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i16 noR noB title">
                    <div className="item__inner">
                        <h3>site view</h3>
                        <a href="https://github.com/jinhomun/webs2024/tree/main/javascript/gsap">
                            <p className="desc">
                                깃에 올린 파일을 직접 볼 수 있습니다.
                            </p>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>
            </div>
        </>
    )
}

export default Gsap