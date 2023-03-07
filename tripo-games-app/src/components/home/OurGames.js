import OurGamesData from "../../datas/OurGamesData";
import OurGamesCard from "./OurGamesCard";
import { useEffect } from "react";
import AOS from 'aos';

export default function OurGames() {
    const ourGamesCards = OurGamesData.map((item) => {
        return <OurGamesCard key={item.id} {...item} />
    })

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    
    return (
        <section className="our-games-sec"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <div className="title mb-5">
                            <h1>Our Games</h1>
                            <p>I'm a paragraph. Click here to add your own text and edit me.
                                I’m a great place for you to <br /> tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    {ourGamesCards}
                    <div className="img-card" data-aos="fade-right">
                        <img src="./images/home/p_4.webp" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}