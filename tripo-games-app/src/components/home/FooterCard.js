import { Link } from "react-router-dom";
export default function FooterCard(props) {

    const footerMenus = props.list.map(item => {
        return <li key={item.id}><Link to={item.to}>{item.name}</Link></li>
    })

    return (
        <div className="col-lg-3">
            <div className="footer-card">
                <h1>{props.name}</h1>
                <ul className="footer-menu">
                    {footerMenus}
                </ul>
            </div>
        </div>
    )
}