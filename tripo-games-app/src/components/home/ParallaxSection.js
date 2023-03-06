import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';

export default function ParallaxSection() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <section className="parralex-sec"
        >
            <div className="top-parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title" data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="300"
                                data-aos-offset="0">
                                <span>Join Our Team</span>
                                <h1>It takes the world's best talent <br /> to change the game.</h1>
                                <Link to="/careers">Explore Careers</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-parallax">
                <div className="gradient"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-side">
                                <div className="title">
                                    <h1>Get in Touch</h1>
                                    <p>I'm a paragraph. Click here to add <br /> your own text and edit me.</p>
                                </div>
                                <form action="#">
                                    <div className="names">
                                        <div className="mb-3 frm">
                                            <label htmlFor="firstName">First Name *</label>
                                            <input type="text" name="firstName" />
                                        </div>
                                        <div className="mb-3 frm">
                                            <label htmlFor="lastName">Last Name *</label>
                                            <input type="text" name="lastName" />
                                        </div>
                                    </div>
                                    <div className="email">
                                        <label htmlFor="email">Email *</label>
                                        <input type="email" name="Email" />
                                    </div>
                                    <div className="msj">
                                        <label htmlFor="message">Leave us a message...</label>
                                        <textarea name="message"></textarea>
                                    </div>
                                    <button className="btn" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-side">
                                <img  src="./images/home/mouse.webp" alt="" />
                                <div className="send-email">
                                    <h1>Subscribe to Our Newsletter</h1>
                                    <form action="#">
                                        <div className="email">
                                            <label htmlFor="email">Email *</label>
                                            <input type="email" name="Email" />
                                        </div>
                                        <button type="submit">Join</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}