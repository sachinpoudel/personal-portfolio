
// Wait for the page to load
window.addEventListener('load', function() {
    // Get the preloader and content elements
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');
    
    // Hide preloader after a short delay
    setTimeout(function() {
        preloader.classList.add('fade-out');
        
        // Show content
        setTimeout(function() {
            content.classList.add('visible');
            
            // Remove preloader from DOM after transition
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 300);
    }, 1000);
});
