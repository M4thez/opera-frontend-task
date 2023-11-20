import { ISlide } from "@/types/definitions";
import styles from "./singleSlide.module.css";

export function SingleSlide(props: ISlide) {
  return (
    <div className={styles.slide}>
      <picture>
        <source srcSet={props.imageURL} />
        <img src={props.imageFallbackURL} alt={props.imageAltText}></img>
      </picture>
      <audio src={props.audioURL} controls />
      <b>{props.title}</b>
      <p>{props.subtitle}</p>
    </div>
  );
}
