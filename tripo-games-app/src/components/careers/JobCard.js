export default function JobCard(props) {
    return (
        <div className="col-lg-3">
            <div className="card mb-5">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        I'm a paragraph. Click here to add 
                        your own text and edit me. I’m a 
                        great place for you to tell a story
                        and let your users know a little 
                        more about you.
                    </p>
                    <a href="Home.js" className="btn stretched-link">Apply</a>
                </div>
            </div>
        </div>
    )
}