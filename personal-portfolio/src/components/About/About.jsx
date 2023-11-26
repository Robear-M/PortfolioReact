import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl('about/aboutImage.png')} 
                    alt='About Picture'
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/cursorIcon.png")} 
                            alt="Cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>Text Associated. A bunch of garbage text here at the end to extend this message please come back later and change it.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/serverIcon.png")} 
                            alt="Server Icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>TText Associated. A bunch of garbage text here at the end to extend this message please come back later and change it.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/cursorIcon.png")} 
                            alt="Cursor Icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>UI Desinger</h3>
                            <p>Text Associated. A bunch of garbage text here at the end to extend this message please come back later and change it.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}