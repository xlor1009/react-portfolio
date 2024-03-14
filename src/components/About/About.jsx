import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engenieer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Expert</h3>
              <p>
              I am deeply passionate about harnessing the power of data to drive informed decision-making across various sectors. My academic journey and internships have equipped me with robust Python, SQL, Scikit-learn, pandas, numpy, and Excel skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Assisant Director</h3>
              <p>
               As Assistant Director at Riverside Education Center, my role has honed my leadership abilities, 
               where I've successfully directed website and advertising campaigns, resulting in a significant 20% enrollment increase. I thrive on challenges and continuously seek opportunities to grow professionally and innovate within the tech and data landscapes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
