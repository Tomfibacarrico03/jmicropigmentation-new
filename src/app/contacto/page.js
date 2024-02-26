"use client";
import React, { useState } from "react";

import styles from "@/style/contacto.module.css";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import "lightgallery.js/dist/css/lightgallery.css"; // Import lightGallery CSS
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
export default function Home() {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const formDataParams = new URLSearchParams(formData);

    try {
      const url = `https://step-server-tqom.onrender.com/naboa?${formDataParams.toString()}`;

      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }

      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const ourSpaceImages = [
    "/homebanner/pig.jpeg",
    "/homebanner/men.jpeg",
    "/homebanner/IMG_6098.jpg",
    "/homebanner/IMG_6104.jpg",
    "/homebanner/IMG_2640-scaled.jpg",
    "/homebanner/IMG_8314.jpg",
    "/homebanner/Peachy_Photo.jpg",
    "/homebanner/feliz.jpg",
  ];
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <main>
      <div className={styles.window}>
        <div className={styles.divide}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30624.955576268163!2d-9.099935!3d38.761259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1931820706b231%3A0x7461f66b265bec9e!2sR.%20Nova%20dos%20Mercadores%2019b%2C%201990-221%20Lisboa%2C%20Portugal!5e1!3m2!1spt-PT!2sus!4v1708453491813!5m2!1spt-PT!2sus"
              style={{ border: 0, width: "100%", height: "300px" }} // Corrected style passing
              allowFullScreen // Corrected attribute
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // Corrected attribute
            ></iframe>
          </div>
          <div className={styles.divide}>
            <div>
              <h2>{t("CONTACTS")}</h2>
              <p>
                {t("PHONE")}: <br /> +351 968 259 600
                <br /> {t("EMAIL")}:
                <br /> Jmicropigmentation@gmail.com
              </p>
            </div>
            <div>
              <h2>{t("ADDRESS")}</h2>
              <p>{t("MAP_ADDRESS")}</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name">
            {t("YOUR_NAME")}
            <input
              type="text"
              id="name"
              name="nome"
              placeholder={t("PLACEHOLDER_NAME")}
              style={{ width: "100%", padding: "10px" }}
              value={formData.nome}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="email" style={{ display: "block", margin: "10px 0" }}>
            {t("YOUR_EMAIL")}
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("PLACEHOLDER_EMAIL")}
              style={{ width: "100%", padding: "10px" }}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label
            htmlFor="message"
            style={{ display: "block", margin: "10px 0" }}
          >
            {t("YOUR_MESSAGE")}
            <textarea
              id="message"
              name="mensagem"
              placeholder={t("PLACEHOLDER_MESSAGE")}
              style={{ width: "100%", height: "150px", padding: "10px" }}
              value={formData.mensagem}
              onChange={handleInputChange}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            style={{ padding: "10px 20px", margin: "10px 0" }}
          >
            {t("SEND")}
          </button>
        </form>
        <LightgalleryProvider>
          <div className={styles.gallery}>
            {ourSpaceImages.map((src, index) => (
              <LightgalleryItem key={index} src={src} thumb={src}>
                <div
                  key={index}
                  className={styles.item}
                  onClick={() => openLightbox(index)}
                >
                  <div className={styles.overlay}></div>
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
    </main>
  );
}
