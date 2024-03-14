import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amin</h1>
        <p className={styles.description}>
        As a senior at The Ohio State University majoring in Geographic Information Science with a minor in Computer Information Science, I am deeply passionate about harnessing the power of data to drive informed decision-making across various sectors. My academic journey and internships have equipped me with robust Python, SQL, Scikit-learn, pandas, numpy, and Excel skills.
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
