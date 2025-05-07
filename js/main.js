// Main JavaScript file for REV-SEIS documentation

document.addEventListener('DOMContentLoaded', function() {

    
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
});
