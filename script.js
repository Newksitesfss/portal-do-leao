document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

 
    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            mobileMenu.classList.remove("active");
        });
    });

 
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove("active");
            mobileMenu.classList.remove("active");
        }
    });
});
