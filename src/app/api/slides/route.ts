import { ISlide } from "@/types/definitions";

export async function GET(request: Request) {
  return Response.json({ slidesData });
}

const slidesData: ISlide[] = [
  {
    id: 0,
    imageURL: "/images/welcome-message.webp",
    imageFallbackURL: "/images/welcome-message.jpg",
    imageAltText: "Colorful, decorative image",
    audioURL: "",
    title: "Multimedia Slider",
    subtitle:
      "Welcome to the multimedia slider with photos made by the website's author and music from independent musicians.",
  },
  {
    id: 1,
    imageURL: "/images/spiderman-nyc.webp",
    imageFallbackURL: "/images/spiderman-nyc.jpg",
    imageAltText: "Into the spiderverse's Spider-Man falling in Times Square",
    audioURL: "/audio/alexander-nakarada-hero-trim.mp3",
    title: "Marvel's Spider-Man: Miles Morales",
    subtitle:
      "Miles Morales in a suit from the movie ‘Into the Spider-verse’ swings in Times Square.",
  },
  {
    id: 2,
    imageURL: "/images/ragnarok-eclipse.webp",
    imageFallbackURL: "/images/ragnarok-eclipse.jpg",
    imageAltText: "God of War characters watching a solar eclipse",
    audioURL: "/audio/darren-curtis-witch-by-the-sea-trim.mp3",
    title: "God of War Ragnarök",
    subtitle:
      "Kratos and Atreus are watching a solar eclipse with wolves - Skӧll and Hati.",
  },
  {
    id: 3,
    imageURL: "/images/ragnarok-wall.webp",
    imageFallbackURL: "/images/ragnarok-wall.jpg",
    imageAltText: "Atreus looking at a massive wall in Asgard",
    audioURL: "/audio/alexander-nakarada-village-ambiance-trim.mp3",
    title: "God of War Ragnarök",
    subtitle:
      "Atreus looking at the Walls of Asgard, built by Hrimthur to protect Odin from the Giants.",
  },
  {
    id: 4,
    imageURL: "/images/got-japan.webp",
    imageFallbackURL: "/images/got-japan.jpg",
    imageAltText:
      "Lonely samurai looking at the victims of war in the presence of colorful scenery",
    audioURL: "/audio/arthur-vyncke-red-forest-trim.mp3",
    title: "Ghost of Tsushima",
    subtitle:
      "Jin Sakai, a former samurai looking at the victims of war with Mongols, on Tsushima Island.",
  },
  {
    id: 5,
    imageURL: "/images/uncharted4-dark.webp",
    imageFallbackURL: "/images/uncharted4-dark.jpg",
    imageAltText: "Two men in a mysterious cave with a majestic contraption",
    audioURL: "/audio/alexander-nakarada-suspensify-trim.mp3",
    title: "Uncharted 4: A Thief's End",
    subtitle: "Two brothers uncovering the mysteries behind secret treasures.",
  },
];
