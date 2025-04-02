document.addEventListener('DOMContentLoaded', function() {
    // Set active page
    const currentPath = window.location.pathname.split('/').pop() || 'index.md';
    document.querySelectorAll('.custom-nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.parentElement.classList.add('active');
        }
        
        // Add touch feedback
        link.addEventListener('click', function(e) {
            // Remove all active classes
            document.querySelectorAll('.custom-nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add to clicked item
            this.parentElement.classList.add('active');
            
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // Add blinking to specific items
    const highlightItems = ['Gold Jewelry', 'Diamond Collections', 'Bridal Jewelry'];
    document.querySelectorAll('.custom-nav-link').forEach(link => {
        if (highlightItems.some(item => link.textContent.includes(item))) {
            link.classList.add('nav-blink');
        }
    });
});