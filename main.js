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

const links = document.querySelectorAll('#header .menuList ul li a');
