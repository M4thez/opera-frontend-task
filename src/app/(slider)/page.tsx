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

  function nextSlide() {
    if (activeIndex < slidesData.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }

  function previousSlide() {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }

  return (
    <main className={styles.main}>
      <h1>Image Slider</h1>
      <SingleSlide
        imageURL={slidesData[activeIndex]?.imageURL}
        audioURL={slidesData[activeIndex]?.audioURL}
        imageFallbackURL={slidesData[activeIndex]?.imageFallbackURL}
        imageAltText={slidesData[activeIndex]?.imageAltText}
        title={slidesData[activeIndex]?.title}
        subtitle={slidesData[activeIndex]?.subtitle}
      />
      <button onClick={nextSlide}>NEXT</button>
      <button onClick={previousSlide}>PREV</button>
    </main>
  );
}
