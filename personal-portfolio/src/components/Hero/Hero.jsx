import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./hero.module.css"

// RENAME ALL HERO Related things
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Robert</h1>
                <p className={styles.description}>
                    I'm a full-stack developer with 2 years of experience using
                    various web technologies. Reach out if you'd like to learn more!
                </p>
                <a href="mailto:rmalloy1@usf.edu" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}