import Navbar from "../Navbar";
import headerCardData from "../../datas/headerCartData";
import HeaderCard from "./HeaderCard";
import HeaderSimpleCard from "./HeaderSimpleCard";
import Hero from "./Hero";

export default function Header() {
    const headerCards = headerCardData.map((card) => {
        return (<HeaderCard key={card.id} {...card} />)
    })
    return (
        <header className="header">
            <Navbar />
            <Hero />
            <section className="header-card">
                <div className="container">
                    <div className="row">
                        {headerCards}
                        <HeaderSimpleCard />
                    </div>
                </div>
            </section>
        </header>
    )
}

