import React from "react";

import styles from "./Maincontent.module.css";
import { getImageUrl } from "../../utils";

export const Maincontent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prateek</h1>
        <p className={styles.description}>
          I'm a full-stack developer having experience in React and NodeJS.
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:prateekbala28@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("about/Maincontent.webp")}
        alt="Hero image of me"
        className={styles.DesktopImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
