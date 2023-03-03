import OurGamesData from "../../datas/OurGamesData";
import OurGamesCard from "./OurGamesCard";

export default function OurGames() {
    const ourGamesCards = OurGamesData.map((item) => {
        return <OurGamesCard key={item.id} {...item} />
    })
    return (
        <section className="our-games-sec">
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
                    <div className="img-card">
                        <img src="./images/home/p_4.webp" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}