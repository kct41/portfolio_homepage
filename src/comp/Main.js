import React from 'react';
import {FullPage, Slide} from 'react-full-page';
import Typed from 'typed.js';

import img from '../img/KakaoTalk_Photo_2023-10-04-14-29-41.png';
import img2 from '../img/KakaoTalk_20231010_183406059.png';
import img3 from '../img/KakaoTalk_20231010_191219995.jpg';

function Main() {

    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['성실 빼면 시체', '책임감 있는', '웹퍼블리셔',],
            typeSpeed: 70,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="content">
            <FullPage controls controlsProps={{className: "navigation"}}>
                <Slide>
                    <div className="bg">
                        <section className="home">
                            <div>
                                <div>
                                    <div className="img_circle">
                                        <img className="i1" alt="img" src={img}/>
                                    </div>
                                </div>
                                <div className="text_box">반가워요!<br/>
                                    저는<br/>
                                    <span ref={el}/><br/>
                                    김소미입니다.
                                </div>
                            </div>
                        </section>
                    </div>
                </Slide>
                <Slide>
                    <div className="bg">
                        <section className="about">
                            <div>
                                <div className="img_box">
                                    <span></span>
                                    <img src={img3}/>
                                </div>
                                <div className="info_box">
                                    <h2 className="title">PROFILE</h2>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <th>이름</th>
                                            <td>김소미</td>
                                        </tr>
                                        <tr>
                                            <th>생년월일</th>
                                            <td>1996.04.01</td>
                                        </tr>
                                        <tr>
                                            <th>학력</th>
                                            <td>서울여자대학교 중어중문학과 졸업&nbsp; | &nbsp;2015.03-2021.08</td>
                                        </tr>
                                        <tr>
                                            <th>기타자격</th>
                                            <td>웹디자인 기능사 취득&nbsp; | &nbsp;2021.10</td>
                                        </tr>
                                        <tr>
                                            <th>경력</th>
                                            <td>(주)피디정보통신 웹디자이너/퍼블리셔 재직&nbsp; | &nbsp;2021.11-2023.07</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <h2 className="title">SKILL</h2>
                                    <div className="container">
                                        <div className="box">
                                            <div className="circle html">
                                                <h2>90%</h2>
                                            </div>
                                            <h3>HTML/CSS</h3>
                                        </div>
                                        <div className="box">
                                            <div className="circle js">
                                                <h2>70%</h2>
                                            </div>
                                            <h3>JavaScript</h3>
                                        </div>
                                        <div className="box">
                                            <div className="circle figma">
                                                <h2>60%</h2>
                                            </div>
                                            <h3>Figma</h3>
                                        </div>
                                        <div className="box">
                                            <div className="circle react">
                                                <h2>50%</h2>
                                            </div>
                                            <h3>React</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Slide>
                <Slide>
                    <div className="bg">
                        <section className="portfolio">
                            <h1>portfolio section</h1>
                        </section>
                    </div>
                </Slide>
            </FullPage>
        </div>
    )

}

export default Main;