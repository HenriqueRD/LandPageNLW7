const header = document.getElementById('header');
function onScroll() {
    if(scrollY > 0) {
        header.classList.add('scroll');
    }
    else {
        header.classList.remove('scroll');
    }
}

const toggle = document.querySelectorAll('#header div .toggle');
for(const x of toggle) {
    x.addEventListener('click', function() {
        document.querySelector('body').classList.toggle('menuExpanded');
    })
}

const links = document.querySelectorAll('#header ul li a');
for(const x of links) {
    x.addEventListener('click', function() {
        document.querySelector('body').classList.remove('menuExpanded');
    })
}

ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 500,
    reset: true
}).reveal(`#home,
         #home img, 
         #home modelStats, 
         #services, 
         #services .card,
         #about,
         #about .sectionInfoAbout,
         #about img`);