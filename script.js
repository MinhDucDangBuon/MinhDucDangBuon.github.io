document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuOverlay = document.querySelector(".menu-overlay");
    const popupOverlay = document.querySelector(".popup-overlay");
    const closePopupButton = document.querySelector(".close-popup");

    // Hiển thị/ẩn menu
    menuToggle.addEventListener("click", function () {
        menuOverlay.classList.toggle("active");
    });

    // Hiển thị popup
    menuOverlay.addEventListener("click", function (event) {
        if (event.target === menuOverlay) {
            menuOverlay.classList.remove("active");
        }
    });

    // Hiển thị popup
    popupOverlay.addEventListener("click", function (event) {
        if (event.target === popupOverlay || event.target === closePopupButton) {
            popupOverlay.style.display = "none";
        }
    });
});
