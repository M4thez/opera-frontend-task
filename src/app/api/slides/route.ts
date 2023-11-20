import { ISlide } from "@/types/definitions";

export async function GET(request: Request) {
  return Response.json({ slidesData });
}

const slidesData: ISlide[] = [
  {
    id: 1,
    imageURL: "/images/spiderman-nyc.webp",
    imageFallbackURL: "/images/spiderman-nyc.jpg",
    imageAltText: "Into the spiderverse's Spider-Man falling in Times Square",
    audioURL: "/audio/alexander-nakarada-hero-trim.mp3",
    title: "Marvel's Spider-Man: Miles Morales",
    subtitle: "Some text about into the spider-verse spider-man",
  },
  {
    id: 2,
    imageURL: "/images/ragnarok-eclipse.webp",
    imageFallbackURL: "/images/ragnarok-eclipse.jpg",
    imageAltText: "God of War characters watching the sun eclipse",
    audioURL: "/audio/darren-curtis-witch-by-the-sea-trim.mp3",
    title: "God of War Ragnarök",
    subtitle: "Some text about the game",
  },
  {
    id: 3,
    imageURL: "/images/ragnarok-wall.webp",
    imageFallbackURL: "/images/ragnarok-wall.jpg",
    imageAltText: "Atreus looking at a massive wall in Asgard",
    audioURL: "/audio/alexander-nakarada-village-ambiance-trim.mp3",
    title: "God of War Ragnarök",
    subtitle: "Some text about the game",
  },
  {
    id: 4,
    imageURL: "/images/got-japan.webp",
    imageFallbackURL: "/images/got-japan.jpg",
    imageAltText:
      "Lonely samurai looking at the victims of war in the presence of colorful scenery",
    audioURL: "/audio/arthur-vyncke-red-forest-trim.mp3",
    title: "Ghost of Tsushima",
    subtitle: "Some text about the game",
  },
  {
    id: 5,
    imageURL: "/images/uncharted4-dark.webp",
    imageFallbackURL: "/images/uncharted4-dark.jpg",
    imageAltText: "Two men in a mysterious cave with a majestic contraption",
    audioURL: "/audio/alexander-nakarada-suspensify-trim.mp3",
    title: "Uncharted 4: A Thief's End",
    subtitle: "Some text about the game",
  },
];
