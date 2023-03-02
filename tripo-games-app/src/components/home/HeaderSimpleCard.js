import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs"


export default function HeaderSimpleCard() {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Link to="/test" className="custom-card">
                <div className="card-footer">
                    <h2>Explore Our <br />  Games</h2>
                    <p><BsArrowDown /></p>
                </div>
            </Link>
        </div>
    )
}