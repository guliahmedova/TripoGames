import { AiFillStar } from "react-icons/ai";

export default function Reviews() {
    return (
        <section className="reviews-sec">
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-12">
                        <div className="title">
                            <div className="range-box">
                                <div className="range">
                                    <div>
                                        <span className="range-span"><AiFillStar /><p>4.1 Rating</p></span>
                                    </div>
                                </div>
                            </div>
                            <h1>Reviews</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card">
                            <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>
                            <h1>Wang Wai</h1>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card">
                            <p>
                                “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”
                            </p>
                            <h1>Jose Pablo</h1>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card">
                            <p>
                                “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”
                            </p>
                            <h1>
                                Priya Gunga
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}