// Navbar burger toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Smooth scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        if(nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// Contact form submission
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}

// Animate skill bars when scrolling into view
const skills = document.querySelectorAll('.skill-level');

function animateSkills() {
    skills.forEach(skill => {
        const skillWidth = skill.getAttribute('data-skill'); // use data attribute for width
        if(skillWidth) {
            skill.style.width = skillWidth;
        }
    });
}

// Trigger animation when about section scrolls into view
window.addEventListener('scroll', () => {
    const section = document.getElementById('skills'); // animate skills in #skills section
    if (!section) return;
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if(sectionPos < screenPos) {
        animateSkills();
    }
});
