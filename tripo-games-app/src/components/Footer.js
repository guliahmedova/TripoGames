import footerData from "../datas/footerData";
import FooterCard from "./home/FooterCard";

export default function Footer() {
    const footerCards = footerData.map((item) => {
        return <FooterCard key={item.id}  {...item} />
    })

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title">
                            <div className="logo"><a href="#">Tripo Games</a></div>
                            <p>An Immersive Gaming Experience</p>
                        </div>
                    </div>
                </div>
                <hr className="hr my-5" />
                <div className="row">
                    {footerCards}
                    <div className="col-lg-3">
                        <div className="footer-card">
                            <h1>Find Us On</h1>
                            <div className="imgs">
                                <a href="#"><img src="./images/home/applestore.webp" alt="" /></a>
                                <a href="#"><img src="./images/home/googleplay.webp" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="hr my-5" />
                <div className="row">
                    <div className="text mb-5">
                        <p>
                            © 2035 by Tripo. Powered and secured by <a href="#">Wix</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}