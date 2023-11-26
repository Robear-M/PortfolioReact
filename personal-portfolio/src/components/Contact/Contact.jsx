import React from "react";
import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils";


export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                    <a href="mailto:rmalloy1@usf.edu">rmalloy1@usf.edu</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
                    <a href="https://www.linkedin.com/in/robert-malloy-3538021ba/">linkedin.com/in/robert-a-malloy/</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                    <a href="https://github.com/Robear-M/">github.com/Robear-M/</a>
                </li>
            </ul>
        </footer>
    );
}