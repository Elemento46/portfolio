const sr = ScrollReveal({
    distance: '50px',
    duration: 800,
    easing: 'ease',
    reset: false,
    mobile: true,
    viewFactor: 0.15,
    viewOffset: { top: 0, right: 0, bottom: 24, left: 0 }
});
sr.reveal('.informações', { origin: 'top', interval: 80 });
sr.reveal('.sobre', { origin: 'left' });
sr.reveal('.projetos', { origin: 'right' });
sr.reveal('.skills', { origin: 'bottom' });

particlesJS('particles-js', {
    particles: {
        number: { value: 250, density: { enable: true, value_area: 900 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.55, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 140, color: '#ffffff', opacity: 0.25, width: 1 },
        move: { enable: true, speed: 2.8, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } }
    },
    interactivity: {
        detect_on: 'window',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'repulse' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 } }
    },
    retina_detect: true
});
