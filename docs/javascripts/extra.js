document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".palette-menu");
    const header = document.querySelector(".md-header");
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Hide navbar and header on initial page load
    navbar.style.top = "-100px";
    header.style.top = "-100px";

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down – hide
            navbar.style.top = "-100px";
            header.style.top = "-100px";
        } else {
            // Scrolling up – show
            navbar.style.top = "0";
            header.style.top = "0";
        }

        lastScrollTop = scrollTop;
    });
});

