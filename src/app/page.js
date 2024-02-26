"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/style/page.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "lightgallery.js/dist/css/lightgallery.css"; // Import lightGallery CSS
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

export default function Home() {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);

  const images = [
    "/IMG_6098.jpg",
    "/IMG_6104.jpg",
    "/IMG_2640-scaled.jpg",
    "/IMG_8314.jpg",
    "/Peachy_Photo.jpg",
    "/feliz.jpg",
  ];

  const servicesImages = [
    { title: "Capilar", desciption: "capilarDescription" },
    { title: "FACIAL", desciption: "facialDescription" },
    { title: "PARAMÉDICA AREATA", desciption: "paramedicalAreataDescription" },
    {
      title: "PARAMÉDICA CICATRICIAL",
      desciption: "paramedicalCicatricialDescription",
    },
  ];

  const [sliderValue, setSliderValue] = useState(50);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };
  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  const galleryImages = Array.from(
    { length: 15 },
    (_, index) => `/gallery/${index}_jmicro-scaled.jpg`
  );

  return (
    <main>
      <div className={styles.slider}>
        {images.map((img, imgIndex) => (
          <div
            key={img}
            className={index === imgIndex ? styles.active : styles.slide}
          >
            <div className={styles.overlay}></div>

            <div className={styles.banner}>
              <p>{t("MICROPIGMENTAÇÃO CAPILAR")}</p>
              <p>{t("HIPER-REALISTA")}</p>
              <Link href="/contato">{t("Sabre mais")}</Link>
            </div>
            <Image
              src={`/homebanner${img}`}
              alt={`Slide ${imgIndex}`}
              width={1080}
              height={1920}
            />
          </div>
        ))}
      </div>
      <div className={styles.comparison}>
        <div className={styles.wrapper1}>
          <div className={styles.images1}>
            <div className={styles.img1}></div>
            <div
              className={styles.img2}
              style={{ width: `${sliderValue}%` }}
            ></div>
          </div>
          <div className={styles.slider1}>
            <div
              className={styles.dragline1}
              style={{ left: `${sliderValue}%` }}
            >
              <span></span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
            />
          </div>
        </div>
      </div>
      <div className={styles.texts}>
        <div className={styles.overlay}></div>
        <div className={styles.textComp}>
          <h2>{t("O QUE É")}</h2>
          <h3>{t('MICROPIGMENTAÇÃO CAPILAR HIPER-REALISTA "GRANULADA"')}</h3>
          <p>{t("micropigmentationDescription")}</p>

          <div className={styles.link}>
            <Link href="/contato">{t("SABER MAIS")}</Link>
          </div>
        </div>
        <div className={styles.textComp}>
          <h2>{t("OS NOSSOS SERVIÇOS")}</h2>
          <h2 style={{ color: "rgba(228, 203, 134, 0.7)", paddingTop: "10px" }}>
            {t("MICROPIGMENTAÇÃO")}
          </h2>
          <div className={styles.cards}>
            {servicesImages.map((item, index) => (
              <div className={styles.card} key={index}>
                <Image
                  src={`/cards/${index + 1}.jpg`}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
                <h2>{t(item.title)}</h2>
                <p>{t(item.desciption)}</p>
                <Link href="/contato">{t("SABER MAIS")}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.textComp}>
          <div className={styles.divideWin}>
            <div className={styles.images}>
              <div>
                <h3>{t("Antes")}</h3>
                <Image
                  src="/feedback/1.jpeg"
                  width={500}
                  height={500}
                  alt={t("FEEDBACK")}
                />
              </div>
              <div>
                <h3>{t("Depois")}</h3>
                <Image
                  src="/feedback/2.jpeg"
                  width={500}
                  height={500}
                  alt={t("FEEDBACK")}
                />
              </div>
            </div>
            <div className={styles.feedback}>
              <h3>{t("FEEDBACK")}</h3>
              <h2
                style={{
                  color: "rgba(228, 203, 134, 0.7)",
                  paddingTop: "10px",
                }}
              >
                {t("GIL GONÇALVES")}
              </h2>
              <p>{t("gilFeedback")}</p>
              <div className={styles.link}>
                <Link href="/contato">{t("CONHECER MAIS")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ourSpace}>
        <h2>{t("O NOSSO ESPAÇO")}</h2>
        <LightgalleryProvider>
          <div className={styles.gallery}>
            {galleryImages.map((src, index) => (
              <LightgalleryItem key={index} src={src} thumb={src}>
                <div
                  key={index}
                  className={styles.item}
                  onClick={() => openLightbox(index)}
                >
                  <div className={styles.overlayGa}></div>

                  <Image
                    src={src}
                    width={500}
                    height={500}
                    alt={src}
                  />
                </div>
              </LightgalleryItem>
            ))}
          </div>
        </LightgalleryProvider>
      </div>
      <div className={styles.faq}>
        <div className={styles.overlay}></div>
        <div className={styles.divideFaq}>
          <Image src="/faq/deskin.jpeg" width={500} height={500} alt="FAQ" />
          <div className={styles.faqText}>
            <h2
              style={{ color: "rgba(228, 203, 134, 0.7)", paddingTop: "10px" }}
            >
              {t("FAQ")}
            </h2>
            <h3
              style={{ color: "rgba(228, 203, 134, 0.7)", paddingTop: "10px" }}
            >
              {t("conventionalVsHyperRealistic")}
            </h3>
            <p>{t("conventionalVsHyperRealisticAnswer")}</p>
            <h3
              style={{ color: "rgba(228, 203, 134, 0.7)", paddingTop: "10px" }}
            >
              {t("howLongDoesItLast")}
            </h3>
            <p>{t("howLongDoesItLastAnswer")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
