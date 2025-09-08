/* Animação Header Transparente */

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
});