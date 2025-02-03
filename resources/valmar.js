//JS for changing nav header color on scroll

//const nav = document.querySelector('.navbar');

window.addEventListener('scroll', ()=> {

    if (window.scrollY >= 50) {
        nav.classList.add('active-nav');
    } else {
        nav.classList.remove('active-nav');
    }

})

const headerTag = document.querySelector('selected');

window.addEventListener('scroll', ()=> {

    if (window.scrollY >= 50) {
        headerTag.classList.add('unselected');
    } else {
        headerTag.classList.remove('unselected');
    }

})


//hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})

//did a "for each" link when clicked, the hamburger and navmenu will go away, hence "removed"

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))


//Search Engine

let searchable = [

'hennessey',
'jack daniels',
'<a href="budweiser.html">budweiser</a>',
'paul mason',
'bud light',
'ciroc',
'beer',
'hennessey vsop',
'hennessey VP',
'hennessey 1.75ml',


];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
let results = [];
let input = searchInput.value;
if (input.length) {
    results = searchable.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
    });
}

renderResults(results);

});

function renderResults(results) {
    if (!results.length) {
        return searchWrapper.classList.remove('show');
    }

    const content = results.map((item) => {
        return `<li><a href='#'>${item}</a></li>`;
    })
    .join('');

    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}


