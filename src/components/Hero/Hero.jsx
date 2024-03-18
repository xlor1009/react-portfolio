import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amin</h1>
        <p className={styles.description}>
       
A skilled student at The Ohio State University, specializing in Computer Information Science. 
With expertise in programming languages like Python, Java, and C++, alongside practical experience in internships at Ticketmaster and Billtrust, 
I bring a blend of technical prowess and business acumen.</p>
<p className={styles.description}> <t>From leading important projects to creating machine learning models for house price prediction,
I thrive on delivering impactful solutions. Let's collaborate and drive innovation together.</t>
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
