"use client";

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { SingleSlide } from "./singleSlide";
import { ISlide, LoadingStates } from "@/types/definitions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeXmark,
  faVolumeHigh,
  faCaretRight,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import ErrorPage from "@/app/_general/errorPage";

export default function SliderPage() {
  const [slidesData, setSlidesData] = useState<ISlide[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAudioMuted, setAudioMuted] = useState<boolean>(false);
  const [loadingState, setLoadingState] = useState<LoadingStates>("loading");

  useEffect(() => {
    fetch("/api/slides")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Slides API status " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setSlidesData(data.slidesData);
        setLoadingState("complete");
      })
      .catch((error) => {
        setLoadingState("error");
        console.error(
          "There was an error during slides fetch operation",
          error
        );
      });
  }, []);

  // Carousel behaviour, slider loops around
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
      imageURL={slide.imageURL}
      audioURL={slide.audioURL}
      imageFallbackURL={slide.imageFallbackURL}
      imageAltText={slide.imageAltText}
      title={slide.title}
      subtitle={slide.subtitle}
      activeIndex={activeIndex}
      objectIndex={index}
      isAudioMuted={isAudioMuted}
    />
  ));

  if (loadingState === "error") {
    return <ErrorPage message="Slides API not available." />;
  } else {
    return (
      <main className={styles.main}>
        <div className={styles["audio-button"]}>
          <button
            type="button"
            title="Toggle music on/off"
            onClick={() => setAudioMuted(!isAudioMuted)}
          >
            {isAudioMuted ? (
              <FontAwesomeIcon icon={faVolumeXmark} />
            ) : (
              <FontAwesomeIcon icon={faVolumeHigh} />
            )}
          </button>
        </div>
        <div className={styles["slider"]}>{slides}</div>
        <div className={styles["slider-buttons"]}>
          <button
            type="button"
            title="Go to the previous slide"
            onClick={previousSlide}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <button
            type="button"
            title="Go to the next slide"
            onClick={nextSlide}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
      </main>
    );
  }
}
