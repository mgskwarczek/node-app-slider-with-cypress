const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// injectContentsquareScript({
//   siteId: "5334322", // Twój siteId
//   async: true, // Opcjonalnie: ustaw na `false`, jeśli chcesz poczekać na załadowanie dokumentu przed uruchomieniem skryptu
//   defer: false, // Opcjonalnie: ustaw na `true`, jeśli chcesz, żeby skrypt załadował się po załadowaniu strony
// });
