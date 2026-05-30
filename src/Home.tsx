import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import SubscriptionCard from "./SubscriptionCard";
import Navbar from "./Navbar";
import horsesImg from "./horses.jpg"
import { Link } from "react-router-dom"
import mainImg from "./images/mainImg.jpg";
import officeImg from "./office.jpg"
import celebrationImg from "./celebration.png"
import SportCard from "./SportCard";
import purpleHero from "./images/purpleHero.png"
import sportCard from "./SportCard";


function Home() {
    const [hovered, setHovered] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);

    useEffect(() => {

        const interval = setInterval(() => {
            const sportsScroll = scrollRef.current;
            if (!sportsScroll) return;

            const maxScroll = sportsScroll.scrollWidth - sportsScroll.clientWidth;
            if (!hovered) {
                if (sportsScroll.scrollLeft > maxScroll - 10) {
                    sportsScroll.scrollTo({
                        left: 0,
                        behavior: "smooth"
                    });
                } else {
                    sportsScroll.scrollTo({
                        left: sportsScroll.scrollLeft + (maxScroll * 0.2),
                        behavior: "smooth"
                    });
                }
            }
            console.log(hovered);
        }, 3000);

        return () => clearInterval(interval);
    }, [hovered]);

    return (
        <div>
            <div className="container">
                <img className={"mainImg"} src={purpleHero} alt={"Office"} />
                <div id={"overlay"}/>
                <div className={"titleOverlay"}>
                    <h1>Sports Streaming</h1>
                </div>
                <div className={"contentOverlay"}>
                    <p>Never miss a beat, Watch every moment live</p>
                    <Link to={"/Subscriptions"}><button id={"joinBtn"}>Join Now</button></Link>
                </div>
            </div>
            <h2>Watch sport <span style={{backgroundColor: 'red', borderRadius: '10px', paddingLeft: '5px', paddingRight: '5px'}}>live</span></h2>
            {/*sports list*/}
            <div ref={scrollRef} className={"sportsScroll"} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <SportCard sport={"nba"}></SportCard>
                <SportCard sport={"rugby"}></SportCard>
                <SportCard sport={"soccer"}></SportCard>
                <SportCard sport={"swimming"}></SportCard>
                <SportCard sport={"volleyball"}></SportCard>
                <SportCard sport={"nba"}></SportCard>
                <SportCard sport={"rugby"}></SportCard>
                <SportCard sport={"soccer"}></SportCard>
                <SportCard sport={"swimming"}></SportCard>
                <SportCard sport={"volleyball"}></SportCard>
            </div>

        </div>
    )
}

export default Home;