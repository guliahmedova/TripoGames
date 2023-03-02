import { Link } from "react-router-dom"
export default function HeaderCard(props) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Link to={props.to} className="card">
                <div className="gradient"></div>
                <img src={props.img} alt="" />
                <div className="card-footer">
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                </div>
            </Link>
        </div>
    )
}