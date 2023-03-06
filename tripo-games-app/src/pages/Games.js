import Hero from "../components/games/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Screenshots from "../components/games/Screenshots";
import Reviews from "../components/games/Reviews";
import Parallax from "../components/games/Parallax";
export default function Games() {
    return (
        <>
            <Navbar />
            <Hero />
            <Screenshots/>
            <Reviews/>
            <Parallax/>
            <Footer />
        </>
    )
}