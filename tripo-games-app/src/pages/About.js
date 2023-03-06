import Hero from "../components/about/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutCardsSec from "../components/about/AboutCardsSec";
import Team from "../components/about/Team";
import OurOffices from "../components/about/OurOffices";

export default function About() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutCardsSec/>
            <Team/>
            <OurOffices/>
            <Footer />
        </>
    )
}