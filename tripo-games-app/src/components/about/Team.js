import TeamCard from "./TeamCard";
import teamCardsData from "../../datas/teamCardsData";

export default function Team() {
    const teamCards = teamCardsData.map((item) => {
        return <TeamCard key={item.id} {...item} />
    })
    return (
        <section className="team-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="title">
                            Meet the Founders
                        </h1>
                    </div>
                </div>
                <div className="row">
                    {teamCards}
                </div>
            </div>
        </section>
    )
}