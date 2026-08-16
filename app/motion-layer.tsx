"use client";

import { useEffect } from "react";

export default function MotionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    root.classList.add("motion-ready");

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(
      ".section-intro, .result-work-row, .home-experience article, .skill-category-box, .thinking-track article, .beyond-copy, .beyond-visual, .beyond-actions, .more-works, .more-about"
    ));

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-order", String(index % 3));
      item.classList.add("motion-item");
      item.classList.add("motion-pending");
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.remove("motion-pending");
          (entry.target as HTMLElement).classList.add("is-in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -12% 0px" });

    if (reduceMotion.matches) revealItems.forEach((item) => {
      item.classList.remove("motion-pending");
      item.classList.add("is-in-view");
    });
    else revealItems.forEach((item) => {
      if (item.getBoundingClientRect().bottom < 0) {
        item.classList.remove("motion-pending");
        item.classList.add("is-in-view");
      } else observer.observe(item);
    });

    const hero = document.querySelector<HTMLElement>(".hero");
    const visual = document.querySelector<HTMLElement>(".hero > .hero-visual");
    const magneticLinks = Array.from(document.querySelectorAll<HTMLElement>(
      ".more-works a, .more-about a, .beyond-actions a"
    ));

    const onHeroMove = (event: PointerEvent) => {
      if (!hero || !visual || reduceMotion.matches || !finePointer.matches) return;
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      visual.style.setProperty("--hero-x", `${x * 18}px`);
      visual.style.setProperty("--hero-y", `${y * 14}px`);
      visual.style.setProperty("--orbit-x", `${x * -8}px`);
      visual.style.setProperty("--orbit-y", `${y * -7}px`);
    };
    const resetHero = () => {
      visual?.style.setProperty("--hero-x", "0px");
      visual?.style.setProperty("--hero-y", "0px");
      visual?.style.setProperty("--orbit-x", "0px");
      visual?.style.setProperty("--orbit-y", "0px");
    };

    const magneticCleanups = magneticLinks.map((link) => {
      const move = (event: PointerEvent) => {
        if (reduceMotion.matches || !finePointer.matches) return;
        const rect = link.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        link.style.setProperty("--magnet-x", `${x * 0.1}px`);
        link.style.setProperty("--magnet-y", `${y * 0.14}px`);
      };
      const leave = () => {
        link.style.setProperty("--magnet-x", "0px");
        link.style.setProperty("--magnet-y", "0px");
      };
      link.addEventListener("pointermove", move);
      link.addEventListener("pointerleave", leave);
      return () => {
        link.removeEventListener("pointermove", move);
        link.removeEventListener("pointerleave", leave);
      };
    });

    hero?.addEventListener("pointermove", onHeroMove);
    hero?.addEventListener("pointerleave", resetHero);
    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
      hero?.removeEventListener("pointermove", onHeroMove);
      hero?.removeEventListener("pointerleave", resetHero);
      magneticCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
