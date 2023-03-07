export default function Hero() {
    window.addEventListener("scroll", function () {
        let pageY = window.pageYOffset;
        let main = document.querySelector('.hero');
        main.style.backgroundPosition = `-${pageY * .25}px -100px`
    })
    return (
        <main>
            <div className="hero">
                <h1>Made to Be Played</h1>
                <p>The Very Best in Mobile Gaming
                    <div className="imgs">
                        <img src="./images/home/applestore.webp" alt="" />
                        <img src="./images/home/googleplay.webp" alt="" />
                    </div>
                </p>
                <div className="bar"></div>
            </div>
        </main>
    )
}

/* pageYOffset - pageYOffset is a read-only window property that returns the number of pixels 
the document has been scrolled vertically. */