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

// Confetti trail that follows the cursor

document.addEventListener('mousemove', function(e) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';

    // Random color
    const colors = ['#36B3AC', '#9B6232', '#442015', '#0E1627', '#D59B43', '#fff', '#ffb347', '#b3ff36'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.background = color;

    // Random size and rotation
    const size = 6 + Math.random() * 8; // 6 to 14px
    confetti.style.width = size + 'px';
    confetti.style.height = (size * (0.5 + Math.random())) + 'px';
    confetti.style.position = 'fixed';
    confetti.style.left = (e.clientX - size / 2) + 'px';
    confetti.style.top = (e.clientY - size / 2) + 'px';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = 9999;
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.opacity = '1';
    confetti.style.transition = 'opacity 0.7s, transform 0.7s';

    document.body.appendChild(confetti);

    // Animate: fade out and drift
    setTimeout(() => {
        const driftX = (Math.random() - 0.5) * 30;
        const driftY = 10 + Math.random() * 20;
        confetti.style.opacity = '0';
        confetti.style.transform += ` translate(${driftX}px, ${driftY}px)`;
    }, 10);

    // Remove after animation
    setTimeout(() => {
        confetti.remove();
    }, 800);
}); 