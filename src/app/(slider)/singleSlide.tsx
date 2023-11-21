import styles from "./singleSlide.module.css";
import { useState, useEffect, useRef } from "react";

export function SingleSlide(props: any) {
  const [isActive, setActive] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (props.activeIndex !== props.objectIndex) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [props.activeIndex]);

  useEffect(() => {
    if (props.isAudioMuted) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  }, [props.isAudioMuted]);

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
      {isActive && props.audioURL != "" && (
        <audio
          ref={audioRef}
          src={props.audioURL}
          autoPlay={props.isAudioMuted ? false : true}
        />
      )}

      <div className={styles.text}>
        <b>{props.title}</b>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}
