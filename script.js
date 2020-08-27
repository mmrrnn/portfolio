let ageContainer = document.getElementById('my-age');

const ageCalculator = () => {
    const now = new Date();
    const thisYear = now.getFullYear();
    const birthdayThisYear = new Date(thisYear, 8, 22);
    
    return now >= birthdayThisYear
        ? thisYear - 2000 : thisYear - 2001;
}

ageContainer.innerText = ageCalculator();

//// SCROLL REVEAL

ScrollReveal().reveal('.main-container h1', {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
    duration: 800
});

ScrollReveal().reveal('.main-container h3', {
    distance: '150%',
    origin: 'bottom',
    duration: 1500
});

ScrollReveal().reveal('.container-header', {
    distance: '150%',
    origin: 'bottom',
    duration: 1000
});

ScrollReveal().reveal('.icon', {
    distance: '100%',
    origin: 'top',
    duration: 1000
});

ScrollReveal().reveal('.icon-card h4', {
    distance: '150%',
    origin: 'bottom',
    duration: 800
});

ScrollReveal().reveal('.icon-card p', {
    distance: '50%',
    origin: 'bottom',
    duration: 1200
});

ScrollReveal().reveal('.card-body', {
    distance: '50%',
    origin: 'top',
    duration: 800
});

ScrollReveal().reveal('.why-me-container', {
    distance: '50%',
    origin: 'top',
    duration: 800
});

ScrollReveal().reveal('footer .col-12', {
    distance: '150%',
    origin: 'top',
    duration: 800
});