const sr = ScrollReveal({ distance: '50px', duration: 800, easing: 'ease', reset: false, mobile: true, viewFactor: 0.15, viewOffset: { top: 0, right: 0, bottom: 24, left: 0 } });
sr.reveal('.informações', { origin: 'top', interval: 80 });
sr.reveal('.sobre', { origin: 'left' });
sr.reveal('.projetos', { origin: 'right' });
sr.reveal('.skills', { origin: 'bottom' });

particlesJS('particles-js', {
    particles: {
        number: { value: 650, density: { enable: true, value_area: 1100 } },
        color: { value: '#ffffff' },
        shape: { type: 'triangle' },
        opacity: { value: 0.18, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 140, color: '#ffffff', opacity: 0.25, width: 1 },
        move: { enable: true, speed: 2.5, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'window',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 75, duration: 0.4 } }
    },
    retina_detect: true
});

const stats = new Stats();
stats.showPanel(0);
stats.dom.style.position = 'fixed';
stats.dom.style.right = '8px';
stats.dom.style.top = '8px';
stats.dom.style.zIndex = '9999';
stats.dom.style.pointerEvents = 'none';
document.body.appendChild(stats.dom);
function loop() { stats.begin(); stats.end(); requestAnimationFrame(loop) }
requestAnimationFrame(loop);
