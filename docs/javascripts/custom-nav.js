document.addEventListener("DOMContentLoaded", function () {
    const navItems = {
        "Kalyan Jewellers": "fas fa-gem",
        "About Us": "fas fa-landmark",
        "Our Heritage": "fas fa-history",
        "Craftsmanship": "fas fa-hammer",
        "Collections": "fas fa-chess-queen",
        "Gold Jewelry": "fas fa-ring",
        "Diamond Collections": "fas fa-gem",
        "Bridal Jewelry": "fas fa-heart",
        "Services": "fas fa-concierge-bell",
        "Custom Design": "fas fa-pencil-ruler",
        "Jewelry Repair": "fas fa-tools",
        "Blog": "fas fa-newspaper",
        "Latest Trends": "fas fa-chart-line",
        "Contact Us": "fas fa-envelope"
    };

    document.querySelectorAll(".md-nav__link").forEach(link => {
        let text = link.innerText.trim();
        if (navItems[text]) {
            link.innerHTML = `<i class="${navItems[text]}"></i> ${text}`;
        }
    });
});
