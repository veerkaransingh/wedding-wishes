// Create floating petals dynamically
function createPetals() {
    const container = document.getElementById('petals-container');
    const petalCount = 15;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${15 + Math.random() * 8}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(petal);
    }
    console.log('✨ Petals created:', petalCount);
}

// Create sparkles dynamically
function createSparkles() {
    const container = document.getElementById('sparkles-container');
    const sparkleCount = 10;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(sparkle);
    }
    console.log('✨ Sparkles created:', sparkleCount);
}

// Smooth scroll reveal animations
function revealOnScroll() {
    const messageParagraphs = document.querySelectorAll('.message p');
    const symbolRows = document.querySelectorAll('.symbol-row');
    const quoteBox = document.querySelector('.quote-box');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    messageParagraphs.forEach((p, index) => {
        setTimeout(() => observer.observe(p), index * 100);
    });
    
    symbolRows.forEach(row => observer.observe(row));
    if (quoteBox) observer.observe(quoteBox);
    
    console.log('👁️ Scroll animations initialized');
}

// Click effect
function createClickEffect(x, y) {
    const effect = document.createElement('div');
    effect.className = 'click-effect';
    effect.style.left = x + 'px';
    effect.style.top = y + 'px';
    document.body.appendChild(effect);
    
    setTimeout(() => effect.remove(), 600);
}

// Add click effects to interactive elements
function addClickEffects() {
    const interactiveElements = document.querySelectorAll('.name, .monogram, .heart-icon, .symbol, .corner-ornament');
    
    interactiveElements.forEach(el => {
        el.addEventListener('click', (e) => {
            const rect = el.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            createClickEffect(x, y);
        });
    });
    
    console.log('💫 Click effects added to', interactiveElements.length, 'elements');
}

// Console Easter egg
function showConsoleMessage() {
    console.log('%c💝 Congratulations Mama Ji & Mami Ji! 💝', 
        'font-size: 24px; color: #8b745f; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.1); padding: 10px;');
    console.log('%c✨ Interactive Features Active:', 
        'font-size: 14px; color: #a89080; font-weight: bold;');
    console.log('1. ✅ Floating petals');
    console.log('2. ✅ Sparkle animations');
    console.log('3. ✅ Scroll reveal effects');
    console.log('4. ✅ Name hover effects');
    console.log('5. ✅ Click effects');
    console.log('6. ✅ Heartbeat animation');
    console.log('7. ✅ Symbol hover effects');
    console.log('8. ✅ Monogram interaction');
    console.log('9. ✅ Corner ornament effects');
    console.log('10. ✅ Ampersand float animation');
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎉 Page loaded! Initializing features...');
    
    createPetals();
    createSparkles();
    revealOnScroll();
    addClickEffects();
    showConsoleMessage();
    
    console.log('✅ All interactive features loaded successfully!');
    console.log('👉 Try hovering over names, clicking the monogram, or opening the console (F12) to see messages!');
});
