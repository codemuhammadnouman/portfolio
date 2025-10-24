const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    document.querySelectorAll('section').forEach(s => {
        const id = s.id;
        const link = document.querySelector(`nav a[href="#${id}"]`);
        if (window.scrollY >= s.offsetTop - 100) link.style.color = '#ffd700';
        else link.style.color = 'white';
    });
});

document.querySelectorAll('.fade-in').forEach((el, i) => el.style.animationDelay = `${i * 0.2}s`);
document.querySelectorAll('#skill li').forEach((el, i) => el.style.animation = `fadeIn 0.6s ease forwards ${i * 0.1}s`);
