import img from '../img/KakaoTalk_Photo_2023-10-04-14-29-41.png';
import {ScrollToTopOnMount, SectionsContainer, Section} from 'react-fullpage';
import Typed from 'typed.js';
import React from 'react';

function Content() {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['성실 빼면 시체', '책임감 있는', '웹퍼블리셔',],
            typeSpeed: 70,
            backSpeed: 30,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    let options = {
        sectionClassName: 'section',
        anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
        scrollBar: false,
        navigation: true,
        verticalAlign: false,
        sectionPaddingTop: '0px',
        sectionPaddingBottom: '0px',
        arrowNavigation: true,
    };

    return (
        <SectionsContainer  {...options}>
            <Section>
                <section className="home">
                    <div>
                        <div>
                            <div className="img_circle">
                                <img alt="img" src={img}/>
                            </div>
                        </div>
                        <div className="text_box">안반가워요!<br/>
                            저는<br/>
                            <span ref={el}/><br/>
                            김소미입니다.
                        </div>
                    </div>
                </section>
            </Section>
            <Section>
                <section className="home">
                    <div>
                        <div>
                            <div className="img_circle">
                                <img alt="img" src={img}/>
                            </div>
                        </div>
                        <div className="text_box">
                        </div>
                    </div>
                </section>
            </Section>
            <Section>Page 3</Section>
        </SectionsContainer>
    )
}

export default Content;