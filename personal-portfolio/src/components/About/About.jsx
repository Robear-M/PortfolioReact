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
                            src={getImageUrl("about/serverIcon.png")} 
                            alt="Cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>Built and maintained back-end systems and APIs to facilitate secure communication in an efficient manner, ensuring high-quality results to end-users.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/cursorIcon.png")} 
                            alt="Server Icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>Designed a variety of front-end solutions including both browser extensions and websites, to provide users with a tailored experience.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/cursorIcon.png")} 
                            alt="Cursor Icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Machine Learning</h3>
                            <p>Pursuing further education with a focus in deep learning topics, while continuing working on enterprise solutions that utilize NLP and generative AI technologies.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}