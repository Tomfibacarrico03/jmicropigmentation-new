"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageSlider from "../../components/ImageSlider";
import styles from "@/style/quemsomos.module.css";
import { useTranslation } from "react-i18next";

import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const { t, i18n } = useTranslation();

  const [index, setIndex] = useState(0);

  const images = ["/aboutus/banner/IMG_6593.jpg", "/aboutus/banner/IMG_7105.jpg"];

  const images1 = [
    "/aboutus/slider/IMG_5573.png",
    "/aboutus/slider/falar.jpg",
    "/aboutus/slider/IMG_6742.png",
    "/aboutus/slider/IMG_3234.png",
    "/aboutus/slider/IMG_5573.png",
    "/aboutus/slider/falar.jpg",
    "/aboutus/slider/IMG_6742.png",
    "/aboutus/slider/IMG_3234.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 2; // Normalize x position to -1 to 1
    const y = ((e.clientY - top) / height - 0.5) * -2; // Normalize y position to -1 to 1
    setRotation({ x: y * 10, y: x * 10 }); // Adjust the multiplier for more/less tilt
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 }); // Reset rotation on mouse leave
  };
  return (
    <main>
      <div className={styles.slider}>
        {images.map((img, imgIndex) => (
          <div
            key={img}
            className={index === imgIndex ? styles.active : styles.slide}
          >
            <div className={styles.overlay}></div>
            <Image
              src={img}
              alt={`Slide ${imgIndex}`}
              width={1080}
              height={1920}
            />
          </div>
        ))}
      </div>
      <div
        className={styles.texts}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.overlay}></div>
        <div className={styles.textComp}>
          <h2>{t("dreamStart")}</h2>
          <h3>{t("clinicDesc")}</h3>
        </div>
        <div className={styles.story}>
          <div className={styles.divideFaq}>
            <div className={styles.faqText}>
              <h2
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("myStory")}
              </h2>
              <p>{t("storyText")}</p>
            </div>
            <Image
              src="/aboutus/feliz.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
        <ImageSlider images={images1} />
        <div className={styles.perspectiveContainer}>
          <div
            className={styles.tiltContainer}
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            <img src="/aboutus/mobile.png" alt="Descriptive Alt Text" />
          </div>
        </div>
        <div
          className={styles.textComp}
          style={{ maxWidth: "350px", textAlign: "center" }}
        >
          <h3>{t("followUs")}</h3>
          <Image
            className={styles.logocomplete}
            src={"/aboutus/logoComplete.png"}
            alt="logo"
            width={500}
            height={500}
          />
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instaLogo}
          >
            <FaInstagram size={50} /> {/* Adjust size as needed */}
          </a>
        </div>
      </div>
    </main>
  );
}
