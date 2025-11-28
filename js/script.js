// Animación al hacer scroll (fade-in suave)
const elements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerPoint) {
            el.classList.add('opacity-100', 'translate-y-0');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Animación de hover suave para las cards
const cards = document.querySelectorAll('.card-zoom');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.03)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
