import { ISlide } from "@/types/definitions";
import styles from "./singleSlide.module.css";
import { useState, useEffect, useRef } from "react";

export function SingleSlide(props: any) {
  const [isActive, setActive] = useState<boolean>(false);
  useEffect(() => {
    if (props.activeIndex !== props.objectIndex) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [props.activeIndex]);

  return (
    <div
      className={`${isActive ? styles.active : styles.hidden} ${styles.slide}`}
    >
      <picture>
        <source srcSet={props.imageURL} />
        <img
          src={props.imageFallbackURL}
          alt={props.imageAltText}
          loading="eager"
        />
      </picture>
      <div className={styles.shadow}></div>
      {isActive && <audio src={props.audioURL} />}

      <div className={styles.text}>
        <b>{props.title}</b>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}
