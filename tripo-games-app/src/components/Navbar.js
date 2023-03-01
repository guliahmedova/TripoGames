import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Navbar() {
    const [mobile, setMobile] = useState(false);

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav className={`navbar animate__animated animate__slideInDown  ${!show && 'animate'}`}>
            <div className="container">
                <div className={`logo ${mobile ? "logo-none" : ""}`}><Link to="/">Tripo Games</Link></div>
                <ul className={mobile ? "nav-links-mobile" : "nav-links"}>
                    <li className="item active-red"><Link to="/home">Home</Link></li>
                    <li className="item"><Link to="/game">Game</Link></li>
                    <li className="item"><Link to="/careers">Careers</Link></li>
                    <li className="item"><Link to="/about">About</Link></li>
                    <li className="item"><Link to="/contact">Contact</Link></li>
                </ul>

                <button className="mobile-menu-icon"
                    onClick={() => setMobile(!mobile)}>
                    {mobile ? <ImCross /> : <FaBars />}
                </button>
            </div>
        </nav >
    )
}