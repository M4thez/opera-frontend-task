"use client";

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { SingleSlide } from "./singleSlide";
import { ISlide } from "@/types/definitions";

export default function Home() {
  const [slidesData, setSlidesData] = useState<ISlide[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    fetch("/api/slides")
      .then((res) => res.json())
      .then((data) => setSlidesData(data.slidesData));
  }, []);

  // Carousel behaviour, images slider loops around, fun never stops
  function nextSlide() {
    if (activeIndex < slidesData.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (activeIndex === slidesData.length - 1) {
      setActiveIndex(0);
    }
  }

  function previousSlide() {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (activeIndex === 0) {
      setActiveIndex(slidesData.length - 1);
    }
  }

  const slides = slidesData.map((slide, index) => (
    <SingleSlide
      key={slide.id}
      id={slide.id}
      imageURL={slide.imageURL}
      audioURL={slide.audioURL}
      imageFallbackURL={slide.imageFallbackURL}
      imageAltText={slide.imageAltText}
      title={slide.title}
      subtitle={slide.subtitle}
      activeIndex={activeIndex}
      objectIndex={index}
    />
  ));

  return (
    <main className={styles.main}>
      <div className={styles["slider"]}>{slides}</div>
      <div className={styles["slider-buttons"]}>
        <button onClick={previousSlide}>&lsaquo;</button>
        <button onClick={nextSlide}>&rsaquo;</button>
      </div>
    </main>
  );
}
