import { Link } from "react-router-dom";

export default function OurGamesCard(props) {
    return (
        <div className={`card mt-5 card-${props.id}`}>
            <div className="card-header">
                <Link to={props.to} >
                    <img src={props.avatar} alt="" className="img" />
                </Link>
                <div className="names">
                    <Link to={props.to}>{props.name}</Link>
                    <p>{props.title}</p>
                </div>
            </div>

            <div className="card-content">
                <div className="desc my-4">
                    <p>I'm a paragraph. Click here to add your <br /> own text and edit me. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.    </p>
                </div>
                <div className="imgs">
                    <a href="#">
                        <img src={props.app_store} alt="" />
                    </a>
                    <a href="#">
                        <img src={props.google_play} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}