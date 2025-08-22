(() => {
  function initSwiper(suffix) {
    return new Swiper(`#es-rc #es-rc-content .es-swiper${suffix}`, {
      direction: 'horizontal',
      slidesPerView: 1.6,
      spaceBetween: 50,

      pagination: {
        el: '#es-rc .es-swiper-pagination',
      },

      navigation: {
        nextEl: `#es-rc .es-swiper${suffix}-button-next`,
        prevEl: `#es-rc .es-swiper${suffix}-button-prev`,
      },
    });
  }

  ['-1', '-2', '-3', '-4'].forEach(initSwiper);

  function addFlipHandlers(suffix) {
    const card = document.querySelector(
      `#es-rc #es-rc-content #es-card${suffix}`,
    );
    const openBtn = document.querySelector(
      `#es-rc #es-rc-content #es-flipButton${suffix}`,
    );
    const closeBtn = document.querySelector(
      `#es-rc #es-rc-content #es-flipButtonClose${suffix}`,
    );

    if (card && openBtn && closeBtn) {
      openBtn.addEventListener('click', () => card.classList.add('es-flipped'));
      closeBtn.addEventListener('click', () =>
        card.classList.remove('es-flipped'),
      );
    }
  }

  ['', '-2', '-3', '-4'].forEach(addFlipHandlers);
})();
