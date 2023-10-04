import img from '../src/KakaoTalk_Photo_2023-10-04-14-29-41.png';
function Content(){
    return(
        <div className="Content">
            <section className="home">
                <div>
                    <div className="img_circle">
                        <img alt="img" src={img}/>
                    </div>
                    <div className="text_box">반가워요!<br/>
                        저는<br/>
                    <span>웹퍼블리셔</span><br/>
                    김소미입니다.</div>
                </div>
            </section>
            <section id="contact">content is here2</section>
            <section>content is here3</section>
        </div>
    )
}

export default Content;