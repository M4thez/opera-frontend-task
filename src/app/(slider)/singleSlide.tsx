import { ISlide } from "@/types/definitions";

export function SingleSlide(props: ISlide) {
  return (
    <div>
      {props.title}
      {props.imageURLs?.length > 0 && (
        <picture>
          <source srcSet={props.imageURLs[0]} type="image/webp" />
          <img
            src={props.imageURLs[1]}
            alt="A description of the image."
            width="400"
          ></img>
        </picture>
      )}
    </div>
  );
}
