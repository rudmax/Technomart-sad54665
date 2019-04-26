var mapLink = document.querySelector(".company-contacts-map-link");
var mapPopup = document.querySelector(".map-pop-up");
var mapClose = mapPopup.querySelector(".close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-pop-up-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-pop-up-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("map-pop-up-show")) {
      mapPopup.classList.remove("map-pop-up-show");
    }
  }
});