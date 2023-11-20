import { ISlide } from "@/types/definitions";
import styles from "./singleSlide.module.css";

export function SingleSlide(props: ISlide) {
  return (
    <div className={styles.slide}>
      <picture>
        <source srcSet={props.imageURL} />
        <img src={props.imageFallbackURL} alt={props.imageAltText} />
      </picture>
      <div className={styles.shadow}></div>
      <audio src={props.audioURL} autoPlay />
      <div className={styles.text}>
        <b>{props.title}</b>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}
