export default function TeamCard(props) {
    return (
        <div className="col-lg-3 pb-5">
            <div className="card">
                <img src={props.img} alt="" />
                <div className="gradient"></div>
                <h1>{props.name}</h1>
                <p>{props.job}</p>
            </div>
        </div>
    )
}
