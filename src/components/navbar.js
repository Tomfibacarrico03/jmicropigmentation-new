"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/style/navbar.module.css";
import i18n from "./i18nconfig";

import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [home, setHome] = useState(true);
  const pathname = usePathname();
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    if (pathname !== "/" && pathname !== "/contacto") {
      setHome(false);
    } else {
      setHome(true);
    }
  }, [pathname]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {windowSize.width <= 900 ? (
        <>
          <div className={styles.navbarMobile}>
            <div>
              <Image
                className={styles.logo}
                src="/logo.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <FaBars
              onClick={() => {
                if (menuOpen) {
                  setMenuOpen(false);
                } else {
                  setMenuOpen(true);
                }
              }}
            />
          </div>
        </>
      ) : null}
      <nav
        className={
          home
            ? styles.navbar
            : windowSize.width <= 900
            ? styles.navbar
            : styles.navbarNoBack
        }
        style={
          windowSize.width <= 900 && menuOpen ? { display: "block" } : null
        }
      >
        <div
          className={styles.navbarcontainer}
          style={home ? null : { background: "none" }}
        >
          {home ? (
            <>
              {pathname == "/contacto" ? (
                <Link
                  href="/"
                  onClick={() => {
                    setHome(true);
                    setMenuOpen(false);
                  }}
                >
                  Home
                </Link>
              ) : null}
            </>
          ) : (
            <Link
              href="/"
              onClick={() => {
                setHome(true);
                setMenuOpen(false);
              }}
            >
              Home
            </Link>
          )}
          <Link href="/quemsomos">{t("Quem Somos")}</Link>
          <Link href="/servicos">{t("Serviços")}</Link>
          <Link href="/feedback">{t("Feedback")}</Link>
          <Link
            href="/contacto"
            onClick={() => {
              setHome(true);
            }}
          >
            {t("Contato")}
          </Link>
          <div className={styles.button} onClick={() => changeLanguage("pt")}>
            {t("Português")}
          </div>
          <div className={styles.button} onClick={() => changeLanguage("en")}>
            {t("English")}
          </div>
          <div className={styles.button} onClick={() => changeLanguage("es")}>
            {t("Español")}
          </div>
        </div>
      </nav>
    </>
  );
}
