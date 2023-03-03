import Header from "../components/home/Header";
import HomeAboutSec from "../components/home/HomeAboutSec";
import OurGames from "../components/home/OurGames";
import ParallaxSection from "../components/home/ParallaxSection";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
           <Header/>
           <HomeAboutSec/>
           <OurGames/>
           <ParallaxSection/>
           <Footer/>
        </>
    )
}