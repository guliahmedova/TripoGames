import { Link } from "react-router-dom"

export default function HomeAboutSec() {
    return (
        <section className="home-about-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-content">
                            <h2>About Tripo</h2>
                            <h1>Your Source for Mobile <br /> Entertainment</h1>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                                click “Edit <br /> Text” or double click me to add your own content and make changes to the font. I’m a <br /> great place for you
                                to tell a story and let your users know a little more about you.</p>
                            <div className="learn-more">
                                <Link to="/about">Learn More</Link>
                            </div>
                            <div className="imgs">
                                <div className="gradient"></div>
                                <img className="main-img" src="./images/home/abtrsecbg.webp" alt="" />
                                <img className="goat" src="./images/home/goat.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}