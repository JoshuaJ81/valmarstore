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

'<a href="budweiser.html">budweiser</a>',
'<a href="hennessey.html">hennessey</a>',
'<a href="1800.html">1800 anejo</a>',
'<a href="1800.html">1800 coconut</a>',
'<a href="1800reposado.html">1800 reposado</a>',
'<a href="1800rtd.html">1800 rtd black cherry</a>',
'<a href="1800rtd.html">1800 rtd mango</a>',
'<a href="1800rtd.html">1800 rtd peach</a>',
'<a href="1800rtd.html">1800 rtd pineapple</a>',
'<a href="1800rtd.html">1800 rtd raspberry</a>',
'<a href="1800rtd.html">1800 rtd strawberry</a>',
'<a href="1800rtd.html">1800 rtd watermelon</a>',
'<a href="1800silver.html">1800 silver</a>',
'<a href="19crimes.html">19 crimes</a>',
'<a href="99schnapps.html">99 schnapps</a>',
'<a href="absolutvodka.html">absolut vodka</a>',
'<a href="americanhoney.html">american honey</a>',
'<a href="angelenvybourbon.html">angels envy bourbon</a>',
'<a href="astraltequila.html">astral tequila</a>',
'<a href="avionteqreposado.html">avion tequila reposado</a>',
'<a href="bacardirum.html">bacardi rum</a>',
'<a href="bwpecanpie.html">backwoods pecan pie liquer</a>',
'<a href="baileys.html">baileys</a>',
'<a href="balcones.html">balcones pot still</a>',
'<a href="barebonevodka.html">bare bone vodka</a>',
'<a href="barefoot.html">barefoot</a>',
'<a href="basilhaydenbourbon.html">basil hayden bourbon</a>',
'<a href="bauchantnapolean.html">bauchant napolean</a>',
'<a href="belleglos.html">belle glos pinot noir</a>',
'<a href="beatbox.html">beatbox</a>',
'<a href="belvederevodka.html">belvedere vodka</a>',
'<a href="blantonbourbon.html">blantons bourbon</a>',
'<a href="bloodsweattears.html">blood sweat & tears vodka</a>',
'<a href="bogle pinot grigio.html">bogle pinot grigio</a>',
'<a href="bottegalimoncello.html">bottega limon cello</a>',
'<a href="bransonvsop.html">branson vsop cognac</a>',
'<a href="breadbutter.html">bread & butter cabernet</a>',
'<a href="breadbutter.html">bread & butter chardonnay</a>',
'<a href="breadbutter.html">bread & butter pinot noir</a>',
'<a href="bribontequila.html">bribon tequila</a>',
'<a href="brobond.html">brothers bond bourbon</a>',
'<a href="broughbros.html">brough brothers bourbon</a>',
'<a href="brugal.html">brugal anejo rum</a>',
'<a href="buchanans.html">buchanans scotch</a>',
'<a href="budice.html">bud ice</a>',
'<a href="budlight.html">bud light</a>',
'<a href="buffalotrace.html">buffalo trace</a>',
'<a href="bulleitwhiskey.html">bulleit whiskey</a>',
'<a href="bulletinwine.html">bulletin wine</a>',
'<a href="bumburum.html">bumbu rum</a>',
'<a href="busch.html">busch</a>',
'<a href="calypso.html">calypso rum</a>',
'<a href="camarena.html">camarena tequila</a>',
'<a href="campari.html">campari liquer</a>',
'<a href="campo.html">campo bravo tequila</a>',
'<a href="canadianwhiskey.html">canadian whiskey</a>',
'<a href="canerum.html">cane rum</a>',
'<a href="captmorgan.html">captain morgan rum</a>',
'<a href="casanoble.html">casa noble tequila</a>',
'<a href="casamigos.html">casamigos tequila</a>',
'<a href="cavitwine.html">cavit wine</a>',
'<a href="chandonwine.html">chandon wine</a>',
'<a href="chivasregale.html">chivas regale</a>',
'<a href="chopshopcab.html">chop shop cab</a>',
'<a href="chopinvodka.html">chopin vodka</a>',
'<a href="cincorotequila.html">cincoro tequila</a>',
'<a href="ciroc.html">ciroc vodka</a>',
'<a href="clanmacgregor.html">clan macgregor</a>',
'<a href="coraminoanejo.html">coramino anejo</a>',
'<a href="coronaextra.html">corona extra 6 pack</a>',
'<a href="corralejo.html">corralejo tequila</a>',
'<a href="crownroyal.html">crown royal</a>',
'<a href="cruzanrum.html">cruzan rum</a>',
'<a href="cuervo.html">jose cuervo</a>',

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
        return `<li class="boldjs"><a href='#'>${item}</a></li>`;
    })
    .join('');

    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}


