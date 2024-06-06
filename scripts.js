// Hiding Navbar on Scroll Down
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-60px';
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

// Animation on Scroll
const sections = document.querySelectorAll('.section');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
