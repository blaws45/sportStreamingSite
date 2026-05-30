import React from "react";
import styles from "./styles/subscriptionCard.module.css"


function SubscriptionCard ()  {
    return (
        <div className={styles.subscriptionCard}>
            <h2>Subscription</h2>
            <h3>$123.45/month</h3>
            <ul className={styles.details}>
                <li>details 1</li>
                <li>details 2</li>
                <li>details 3</li>
            </ul>
            <button className={styles.buyButton}>Buy</button>
        </div>
    )
}

export default SubscriptionCard;