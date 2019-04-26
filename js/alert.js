var modalLink = document.querySelectorAll(".buy");
var popup = document.querySelector(".item-added-pop-up");
var close = document.querySelector(".close");
var next = document.querySelector(".next");
var addToBasket = document.querySelector(".basket");

for (var i = 0; i <= modalLink.length; i++) {
    modalLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("item-added-pop-up-show");
    next.focus();
    addToBasket.classList.add("basket-add"); 
    });

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("item-added-pop-up-show");
    });
    
    next.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("item-added-pop-up-show");
    });
    
    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("item-added-pop-up-show")) {
            mapPopup.classList.remove("item-added-pop-up-show");
        }
    }
    });    
};

