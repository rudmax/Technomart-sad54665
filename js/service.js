var delivery = document.querySelector(".window-acive-delivery");
var warranty = document.querySelector(".window-acive-warranty");
var credit = document.querySelector(".window-acive-credit");

var deliveryService = document.querySelector(".service-delivery");
var warrantyService = document.querySelector(".service-warranty");
var creditService = document.querySelector(".service-credit");

credit.addEventListener("click", function(evt){
    evt.preventDefault();
    credit.classList.add("window-toggle-service");
    creditService.classList.add("service-window-show");

    warranty.classList.remove("window-toggle-service");
    warrantyService.classList.remove("service-window-show");

    delivery.classList.add("window-toggle-delivery");
    deliveryService.classList.add("service-window-close");  
});

warranty.addEventListener("click", function(evt){
    evt.preventDefault();
    warranty.classList.add("window-toggle-service");
    warrantyService.classList.add("service-window-show");

    delivery.classList.add("window-toggle-delivery");
    deliveryService.classList.add("service-window-close");  

    credit.classList.remove("window-toggle-service");
    creditService.classList.remove("service-window-show");
});

delivery.addEventListener("click", function(evt){
    evt.preventDefault();
    delivery.classList.remove("window-toggle-delivery");
    deliveryService.classList.remove("service-window-close");  

    warranty.classList.remove("window-toggle-service");
    warrantyService.classList.remove("service-window-show");

    credit.classList.remove("window-toggle-service");
    creditService.classList.remove("service-window-show");
});

