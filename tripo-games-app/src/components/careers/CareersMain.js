import jobCards from "../../datas/jobCards";
import JobCard from "./JobCard";
import { useEffect } from "react";
import AOS from 'aos';

export default function CareersMain() {
    const jobCardElements = jobCards.map((item) => {
        return <JobCard key={item.id} {...item} />
    })

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>
            <section className="hiring-sec" data-aos="fade-right">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Help Us Change the Way People Play</p>
                            <h1>We’re Hiring</h1>
                            <p className="p">I'm a paragraph. Click here to add your own text and edit me. It’s easy. <br />
                                Just click “Edit Text” or double click me to add your own content and <br />
                                make changes to the font. I’m a great place for you to tell a story and <br />
                                let your users know a little more about you.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="job-cards-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Job Openings</h1>
                        </div>
                    </div>
                    <div className="row">
                        {jobCardElements}
                    </div>
                </div>
            </section>

            <section className="parallax-job-sec">
                <div className="container">
                    <div className="gradient"></div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="title" data-aos="fade-up"
                                data-aos-duration="3000">
                                <p>Didn’t Find the Position You’re Looking For? </p>
                                <h1>Send Us Your CV</h1>
                                <a className="btn" href="#">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}