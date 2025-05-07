// Main JavaScript file for REV-SEIS documentation

document.addEventListener('DOMContentLoaded', function() {
    // Sticky navigation implementation
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    let navOffset = 0;
    
    if (header && nav) {
        navOffset = header.offsetHeight;
        
        function handleScroll() {
            if (window.scrollY >= navOffset) {
                nav.classList.add('sticky');
                document.body.classList.add('nav-is-sticky');
            } else {
                nav.classList.remove('sticky');
                document.body.classList.remove('nav-is-sticky');
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        // Initial check in case page is loaded already scrolled
        handleScroll();
    }
    
    // Initialize any other functionality here
    
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
});
