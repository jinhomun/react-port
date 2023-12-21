import React, { useEffect } from 'react'
import gsap from 'gsap';

import arrow from '../../assets/img/Arrow11.svg'
import imgWpoint from '../../assets/img/wpoint.png'


const Wpoint = () => {
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
                        <li className="active"><a href="/wpoint">1</a></li>
                        <li><a href="/vite">2</a></li>
                    </ul> */}
                        <h2>w.point</h2>
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
                        <a href="/vite">
                            <p>SITE</p>
                            <img src={arrow} alt="화살표"></img>
                        </a>
                    </div>
                    <div className="item__bg"></div>
                </div>
                <div className="item i5 skill">
                    <div className="item__inner">
                        <h3>skill</h3>
                        <p className="desc">
                            VSC | JavaScript <br />
                            HTML | CSS <br />
                            swiper | Git
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
                        <img src={imgWpoint} alt="wpoint01" />
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
                            "Swiper"는 주로 웹 개발에서 사용되는 JavaScript 라이브러리 중 하나입니다. <br />
                            Swiper는 모바일 터치 슬라이드 및 스와이프 기능을 구현하는 데에 중점을 둔 라이브러리로, <br />
                            웹 페이지나 모바일 애플리케이션에서 이미지 갤러리, 카루셀, 슬라이드쇼 등을 만들 때 유용하게 사용됩니다.<br />
                            <br />
                            1. 터치 이벤트 지원: Swiper는 터치 스크린에서의 사용을 감안하여 설계되었으며, 사용자가 스와이프 또는 터치 제스처를 사용하여 콘텐츠를 이동할 수 있도록 지원합니다.<br />
                            2. 다양한 슬라이드 유형: 이미지 뿐만 아니라 텍스트, 비디오, HTML 요소 등 다양한 유형의 콘텐츠를 슬라이드로 표시할 수 있습니다.<br />
                            3. 자동 재생 및 자동 높이 조절: Swiper는 슬라이드를 자동으로 재생하거나, 슬라이드의 높이를 자동으로 조절하는 등 다양한 기능을 제공합니다.<br />
                            4. 반응형 디자인 지원: 다양한 디바이스 및 화면 크기에 대응하기 위한 반응형 디자인을 지원하여 웹 페이지나 앱이 다양한 환경에서 동작할 수 있도록 합니다.
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

export default Wpoint