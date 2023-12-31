export interface ISlide {
  id?: number;
  imageURL: string;
  imageFallbackURL: string;
  imageAltText?: string;
  audioURL: string;
  title: string;
  subtitle?: string;
}

export type LoadingStates = "loading" | "complete" | "error";
