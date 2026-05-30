import React from "react";
import styles from "./styles/sportCard.module.css";
import nbaThumbnail from "./images/nba_thumbnail.png";
import rugbyThumbnail from "./images/rugby_thumbnail.jpeg";
import soccerThumbnail from "./images/soccer_thumbnail.jpg";
import swimmingThumbnail from "./images/swimming_thumbnail.jpeg";
import volleyballThumbnail from "./images/volleyball_thumbnail.jpeg";

type Sport = "nba" | "rugby" | "soccer" | "swimming" | "volleyball";

type Props = {
    sport: Sport;
};

const images: Record<Sport, string> = {
    nba: nbaThumbnail,
    rugby: rugbyThumbnail,
    soccer: soccerThumbnail,
    swimming: swimmingThumbnail,
    volleyball: volleyballThumbnail,

}

function SportCard({ sport }: Props) {

    return (
        <div className={styles.mainCard}>
            <img src={images[sport]} alt={`${sport} thumbnail`} />
            <p>{sport}</p>
        </div>
    )
}

export default SportCard;