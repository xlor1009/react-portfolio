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
              <h3>Technical Innovator</h3>
              <p><br></br>
              As a dynamic software engineer, I specialize in full-stack development, 
              crafting responsive and optimized websites that captivate users. 
              My proficiency extends to Java, C++, and Python, enabling me to deliver innovative solutions that push boundaries.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Fanatic</h3>
              <p><br></br>
              With a fervent passion for data analysis, I bring a wealth of experience in Python, SQL, and Scikit-learn to the table. 
              My background in building predictive models and extracting actionable insights equips me to drive informed decision-making and fuel business growth.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Leadership Enthusiast</h3>
              <p><br></br>
              As an Assistant Director at Riverside Education Center, I've honed my leadership prowess through managing website development projects and advertising campaigns. 
              My strategic approach has led to a notable 20% increase in enrollment, showcasing my dedication to driving results and fostering growth.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
