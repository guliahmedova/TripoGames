import { useEffect } from "react";
import AOS from 'aos';
export default function Hero() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <section className="games-parallax-sec">
            <div className="gradient"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card" data-aos="fade-up">
                            <div className="card-header">
                                <img src="./images/home/p_1.webp" alt="" />
                                <div>
                                    <h1>Kipon</h1>
                                    <p>Casual - Free</p>
                                </div>
                            </div>
                            <div className="card-body">
                                <p>A One-of-a-Kind Game <br /> That Offers Endless <br /> Excitement at Your <br /> Fingertips.</p>
                            </div>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                                <br /> Just click “Edit Text” or double click me to add your own content and
                                <br /> make changes to the font. I’m a great place for you to tell a story and
                                <br /> let your users know a little more about you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}