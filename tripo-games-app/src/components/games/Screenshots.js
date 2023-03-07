import { useEffect } from "react";
import AOS from 'aos';
export default function Screenshots() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <section className="screenshots-sec my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 my-5">
                        <h1 className="title">Screenshots</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-5">
                        <div className="img" data-aos="fade-up-right">
                            <div className="gradient"></div>
                            <img src="./images/games/Screenshotsfirst.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="img" data-aos="fade-left">
                            <div className="gradient"></div>
                            <img src="./images/games/Screenshotssec.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}