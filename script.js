const gallery = document.querySelector(".scroll-gallery");

if (gallery) {
  let isPaused = false;
  let rafId = 0;

  const tick = () => {
    if (!isPaused && window.matchMedia("(min-width: 760px)").matches) {
      gallery.scrollLeft += 0.35;

      if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 2) {
        gallery.scrollTo({ left: 0, behavior: "smooth" });
      }
    }

    rafId = window.requestAnimationFrame(tick);
  };

  gallery.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  gallery.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  gallery.addEventListener("touchstart", () => {
    isPaused = true;
  }, { passive: true });

  gallery.addEventListener("touchend", () => {
    window.setTimeout(() => {
      isPaused = false;
    }, 1200);
  });

  rafId = window.requestAnimationFrame(tick);

  window.addEventListener("pagehide", () => {
    window.cancelAnimationFrame(rafId);
  });
}
