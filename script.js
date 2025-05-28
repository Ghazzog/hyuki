document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navigation a');
    const sections = document.querySelectorAll('.section');

    // Function to handle navigation
    function handleNavigation(e) {
        e.preventDefault();
        
        // Remove active class from all links and sections
        navLinks.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Show corresponding section
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    }

    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Handle initial page load
    const hash = window.location.hash || '#home';
    document.querySelector(`a[href="${hash}"]`).click();
}); 