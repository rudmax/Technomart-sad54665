var link = document.querySelector(".feedback");
var popup = document.querySelector(".feedback-pop-up");
var close = popup.querySelector(".close");
var form = popup.querySelector(".feedback-form");
var yourName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]"); 
var text = document.querySelector("[name=text-mail]"); 

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-pop-up-show");
    yourName.focus();
});  

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-pop-up-show");
    popup.classList.remove("feedback-pop-up-error");
});
  
form.addEventListener("submit", function (evt) {
    if (!yourName.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("feedback-pop-up-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("feedback-pop-up-error");
    } 
});
  
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("feedback-pop-up-show")) {
           popup.classList.remove("feedback-pop-up-show");
           popup.classList.remove("feedback-pop-up-error");
        }
    }
});