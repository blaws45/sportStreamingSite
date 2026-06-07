import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import Navbar from "./Navbar";
import horsesImg from "./horses.jpg";
import playersImg from "./images/playersImg.png";
import purplePattern from "./images/purplePattern.png";
import purpleHero from "./images/purplePlayers.png";
import zoomedPlayers from "./images/purplePlayersZoomed.png";
import "./subscriptions.css";

function Subscriptions() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <div className={"container"}>
                <Navbar />
                <img className={"mainImg"} src={zoomedPlayers} alt={"Sports Players"} />
                {/*<div id={"Suboverlay"}></div>*/}
                <div className={"titleOverlay"}>
                    <h1>Subscriptions</h1>
                </div>

                <div className={"subscriptionPanel"}>
                    <SubscriptionCard />
                    <SubscriptionCard />
                    <SubscriptionCard />
                    <SubscriptionCard />
                </div>
            </div>
        </div>
    )
}

export default Subscriptions;